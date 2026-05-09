import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';

const DiscoverSalons = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [professionals, setProfessionals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
    const [filters, setFilters] = useState({
        query: '',
        location: '',
        minRating: 0
    });

    useEffect(() => {
        fetchProfessionals();
    }, [filters]);

    const fetchProfessionals = async () => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams();
            if (filters.query) queryParams.append('query', filters.query);
            if (filters.location) queryParams.append('location', filters.location);
            
            const response = await fetch(`http://localhost:5000/api/professionals?role=salon_owner&${queryParams.toString()}`);
            if (response.ok) {
                const data = await response.json();
                
                // Client-side filtering for fields we mock in backend for now
                let filteredData = data;
                if (filters.minRating > 0) {
                    filteredData = filteredData.filter(p => parseFloat(p.rating) >= filters.minRating);
                }
                
                setProfessionals(filteredData);
            }
        } catch (error) {
            console.error("Error fetching professionals:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-6">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-[--color-brand-purple] font-medium transition-colors flex items-center gap-2">
                        <span>←</span> Back
                    </button>
                </div>
                {/* Header & Main Search */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-serif">
                        Discover Top <span className="text-[--color-brand-purple-dark]">Salons</span>
                    </h1>
                    
                    <div className="max-w-4xl mx-auto bg-white p-3 rounded-full shadow-lg border border-gray-100 flex flex-col md:flex-row gap-2">
                        <div className="flex-1 flex items-center px-4">
                            <span className="text-xl mr-3">🔍</span>
                                <input 
                                    type="text" 
                                    name="query"
                                    value={filters.query}
                                    onChange={handleFilterChange}
                                    placeholder="Search salons by name..." 
                                    className="w-full py-3 outline-none text-gray-700 bg-transparent"
                                />
                        </div>
                        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
                        <div className="flex-1 flex items-center px-4">
                            <span className="text-xl mr-3">📍</span>
                            <input 
                                type="text" 
                                name="location"
                                value={filters.location}
                                onChange={handleFilterChange}
                                placeholder="Location (e.g. Colombo)" 
                                className="w-full py-3 outline-none text-gray-700 bg-transparent"
                            />
                        </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center gap-4">
                        <button 
                            onClick={() => setViewMode('list')}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${viewMode === 'list' ? 'bg-[--color-brand-purple] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-[--color-brand-purple]'}`}
                        >
                            📋 List View
                        </button>
                        <button 
                            onClick={() => setViewMode('map')}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${viewMode === 'map' ? 'bg-[--color-brand-purple] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-[--color-brand-purple]'}`}
                        >
                            🗺️ Map View
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 lg:sticky lg:top-32 max-h-[80vh] overflow-y-auto custom-scrollbar">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-xl text-gray-900">Filters</h3>
                                <button onClick={() => {setFilters({query: '', location: '', minRating: 0});}} className="text-sm text-[--color-brand-purple] hover:underline">Clear All</button>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-700 mb-4">Minimum Rating</h4>
                                <input 
                                    type="range" 
                                    name="minRating" 
                                    min="0" 
                                    max="5" 
                                    step="0.5" 
                                    value={filters.minRating} 
                                    onChange={handleFilterChange}
                                    className="w-full accent-[--color-brand-purple]" 
                                />
                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                    <span>Any</span>
                                    <span>{filters.minRating} ⭐+</span>
                                    <span>5 ⭐</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="w-full lg:w-3/4">
                        <div className="mb-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {viewMode === 'map' ? 'Salons Near You' : loading ? 'Searching...' : `${professionals.length} Professionals Found`}
                            </h2>
                        </div>

                        {viewMode === 'map' ? (
                            <div className="bg-white rounded-[2rem] p-2 shadow-sm border border-gray-100 overflow-hidden h-[600px]">
                                <iframe 
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent('salons in ' + (filters.location || 'Sri Lanka'))}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0, borderRadius: '1.5rem' }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        ) : loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1,2,3,4].map(n => (
                                    <div key={n} className="bg-white rounded-[2rem] h-80 animate-pulse border border-gray-100 shadow-sm">
                                        <div className="h-48 bg-gray-200 rounded-t-[2rem]"></div>
                                        <div className="p-6 space-y-3">
                                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                            <div className="h-10 bg-gray-200 rounded-xl mt-4"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : professionals.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                <div className="text-6xl mb-4">🕵️‍♀️</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                                <p className="text-gray-500">Try adjusting your filters or search terms.</p>
                                <button onClick={() => setFilters({query: '', location: '', minRating: 0})} className="mt-6 bg-[--color-brand-purple]/10 text-[--color-brand-purple-dark] px-6 py-2 rounded-xl font-bold hover:bg-[--color-brand-purple]/20 transition-colors">Clear Filters</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {professionals.map((prof, i) => (
                                    <div key={prof._id || i} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                                        <div className="h-48 relative overflow-hidden bg-gray-200 cursor-pointer" onClick={() => navigate(`/professional/${prof._id}`)}>
                                            <img src={prof.profilePicture} alt={prof.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-sm flex items-center">
                                                ⭐ {prof.rating} <span className="text-gray-500 font-normal ml-1">({prof.reviews})</span>
                                            </div>
                                            <div className="absolute bottom-4 left-4">
                                                <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wider">
                                                    {prof.role === 'salon_owner' ? 'Salon' : 'Freelancer'}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="font-bold text-xl text-gray-900 mb-1 cursor-pointer hover:text-[--color-brand-purple]" onClick={() => navigate(`/professional/${prof._id}`)}>{prof.name}</h3>
                                            <p className="text-gray-500 text-sm mb-4">📍 {prof.address || 'Location unavailable'}</p>
                                            
                                            <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                                                {(prof.services || []).slice(0, 3).map((svc, idx) => (
                                                    <span key={idx} className="bg-[--color-brand-pink]/10 text-[--color-brand-pink-dark] px-3 py-1 rounded-full text-xs font-medium">
                                                        {svc}
                                                    </span>
                                                ))}
                                                {prof.services && prof.services.length > 3 && (
                                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                                        +{prof.services.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500">Starting from</span>
                                                    <span className="font-bold text-gray-900">{prof.priceRange || 'Contact for price'}</span>
                                                </div>
                                                <button onClick={() => navigate(`/booking?salon=${encodeURIComponent(prof.name)}`)} className="bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DiscoverSalons;
