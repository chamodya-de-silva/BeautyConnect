import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceSalons = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Reconstruct the title from the URL slug (e.g. "hair-styling" -> "Hair Styling")
    const serviceTitle = id.split('-').map(word => {
        if (word === 'and') return '&';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ').replace(' & ', ' & ').replace('Mens', 'Men\'s');

    // Dummy data matching the Discover Services mapping
    const serviceSalonsMap = {
        'Bridal Makeup': ['Sarah\'s Beauty Studio (Negombo)', 'Glow Up Studio (Kandy)'],
        'Hair Styling': ['Serenity Wellness (Galle)', 'Luxe Salon (Colombo)'],
        'Nail Art': ['Luxe Nail Spa (Colombo)'],
        'Skincare': ['Glow Up Studio (Kandy)', 'Serenity Wellness (Galle)'],
        'Spa & Massage': ['Serenity Wellness (Galle)'],
        'Men\'s Grooming': ['Sarah\'s Beauty Studio (Negombo)']
    };

    const salons = serviceSalonsMap[serviceTitle] || [];

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-900 transition-colors">
                        ← Back to Services
                    </button>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-serif">Top Salons for <span className="text-[--color-brand-purple-dark]">{serviceTitle}</span></h1>
                </div>

                {salons.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <p className="text-gray-500 text-lg">No salons found for this service at the moment.</p>
                        <button onClick={() => navigate(-1)} className="mt-6 text-[#9F5AD5] font-bold hover:underline">Go Back</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {salons.map((salon, i) => (
                            <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="h-48 relative overflow-hidden bg-gray-200">
                                    <img src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1522337360788-8b13fee7a3af' : '1560066984-138dadb4c035'}?w=400&h=300&fit=crop`} alt={salon} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">{salon.split(' (')[0]}</h3>
                                    <p className="text-gray-500 text-sm mb-4">📍 {salon.split(' (')[1]?.replace(')', '')}</p>
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                        <span className="text-sm font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">⭐ 4.{9 - (i % 3)}</span>
                                        <button onClick={() => navigate(`/booking?service=${encodeURIComponent(serviceTitle)}&salon=${encodeURIComponent(salon.split(' (')[0])}`)} className="bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-black px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ServiceSalons;
