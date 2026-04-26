import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const ClientSettings = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        const stored = localStorage.getItem('user');
        if (stored) {
            setUser(JSON.parse(stored));
        } else {
            navigate('/login/client');
        }
    }, [navigate]);

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-900 transition-colors">
                        ← Back
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900 font-serif">Account Settings</h1>
                </div>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" defaultValue={user.name} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" defaultValue={user.email} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input type="tel" placeholder="+94 7X XXX XXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] outline-none transition-all" />
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Password Change</h3>
                            <div className="space-y-4">
                                <div>
                                    <input type="password" placeholder="Current Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] outline-none transition-all" />
                                </div>
                                <div>
                                    <input type="password" placeholder="New Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button type="button" className="w-full bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#9F5AD5]/30 hover:shadow-xl hover:shadow-[#9F5AD5]/40 hover:-translate-y-0.5 transition-all">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClientSettings;
