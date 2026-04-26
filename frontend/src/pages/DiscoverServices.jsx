import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const DiscoverServices = () => {
    const navigate = useNavigate();

    const services = [
        { title: 'Bridal Makeup', description: 'Transform your special day with premium bridal makeup packages.', icon: '💄', slug: 'bridal-makeup' },
        { title: 'Hair Styling', description: 'Modern cuts, colors, and styling from top professionals.', icon: '💇‍♀️', slug: 'hair-styling' },
        { title: 'Nail Art', description: 'Exquisite nail designs and spa manicures.', icon: '💅', slug: 'nail-art' },
        { title: 'Skincare', description: 'Rejuvenating facials and advanced skincare treatments.', icon: '✨', slug: 'skincare' },
        { title: 'Spa & Massage', description: 'Relaxing treatments to rejuvenate your body and mind.', icon: '🌿', slug: 'spa-and-massage' },
        { title: 'Men\'s Grooming', description: 'Premium haircuts and beard styling for men.', icon: '✂️', slug: 'mens-grooming' },
    ];

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
                        Discover <span className="text-[--color-brand-purple-dark]">Services</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Explore a wide range of beauty and wellness services from the best professionals in Sri Lanka.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow">{service.description}</p>
                            
                            <button 
                                onClick={() => navigate(`/services/${service.slug}`)} 
                                className="w-full bg-gray-50 text-[--color-brand-purple-dark] font-bold py-3 rounded-xl border border-gray-100 hover:bg-[--color-brand-purple] hover:text-white transition-all shadow-sm flex items-center justify-center group-hover:shadow-md"
                            >
                                Explore Salons <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DiscoverServices;
