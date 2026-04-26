import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const ClientFavorites = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-900 transition-colors">
                        ← Back
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900 font-serif">Your Favorites</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="h-48 relative overflow-hidden">
                                <img src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1522337360788-8b13fee7a3af' : '1560066984-138dadb4c035'}?w=400&h=300&fit=crop`} alt="Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 shadow-md">
                                    ♥
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-gray-900 mb-1">{i % 2 === 0 ? 'Luxe Nail Spa' : 'Glow Up Studio'}</h3>
                                <p className="text-gray-500 text-sm mb-4">Colombo {i}, Sri Lanka</p>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                    <span className="text-sm font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">⭐ 4.{9 - (i % 3)}</span>
                                    <button onClick={() => navigate(`/booking?salon=${encodeURIComponent(i % 2 === 0 ? 'Luxe Nail Spa' : 'Glow Up Studio')}`)} className="bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClientFavorites;
