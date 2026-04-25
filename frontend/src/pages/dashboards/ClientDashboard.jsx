import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ClientDashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleAction = (action) => {
        alert(`Action: ${action} - This feature is coming soon!`);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/login/client');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    if (!user) return null; // or a loading spinner

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-2">Welcome, <span className="text-[--color-brand-purple-dark]">{user.name.split(' ')[0]}</span>!</h1>
                    <p className="text-gray-600 font-light text-lg">Here's your beauty schedule for the week.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Upcoming Appointment */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Appointment</h2>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[#fafafa] p-6 rounded-3xl border border-gray-100">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&h=200&fit=crop" alt="Service" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Bridal Makeup Trial</h3>
                                    <p className="text-gray-500 text-sm mb-3">with Sarah's Beauty Studio</p>
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[--color-brand-purple]/10 text-[--color-brand-purple-dark] text-sm font-medium">
                                            📅 Oct 25, 2024
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[--color-brand-pink]/20 text-[--color-brand-pink-dark] text-sm font-medium">
                                            ⏰ 10:00 AM
                                        </span>
                                    </div>
                                </div>
                                <div className="flex sm:flex-col gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                                    <button className="flex-1 bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">Reschedule</button>
                                    <button className="flex-1 bg-white border-2 border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 hover:border-gray-300 transition-colors">Cancel</button>
                                </div>
                            </div>
                        </div>

                        {/* Recent Favorites */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Your Favorites</h2>
                                <button onClick={() => navigate('/dashboard/client/favorites')} className="bg-[#f4eaf9] text-[#9F5AD5] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#9F5AD5] hover:text-white transition-colors">View All</button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[1, 2].map((i) => (
                                    <div key={i} onClick={() => navigate('/dashboard/client/favorites')} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#fafafa] transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                                        <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden">
                                            <img src={`https://images.unsplash.com/photo-${i === 1 ? '1522337360788-8b13fee7a3af' : '1560066984-138dadb4c035'}?w=100&h=100&fit=crop`} alt="Favorite" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{i === 1 ? 'Luxe Nail Spa' : 'Glow Up Studio'}</h4>
                                            <p className="text-xs text-gray-500 mt-1">⭐ 4.9 (120+ reviews)</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-8">
                        {/* Quick Stats/Info */}
                        <div className="bg-gradient-to-br from-[--color-brand-purple] to-[#e88aa8] p-8 rounded-[2rem] text-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-[-10%] right-[-10%] w-32 h-32 rounded-full bg-white opacity-10 blur-xl"></div>
                            <h3 className="text-xl font-bold mb-6">Beauty Rewards</h3>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-5xl font-extrabold font-serif">450</span>
                                <span className="text-white/80 pb-1">Points</span>
                            </div>
                            <p className="text-sm text-white/90 mb-6 font-light">You are 50 points away from a free Deluxe Spa Manicure!</p>
                            <button onClick={() => navigate('/dashboard/client/rewards')} className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white py-3 rounded-xl font-bold transition-colors">
                                Redeem Points
                            </button>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-4">
                                <button onClick={() => navigate('/booking')} className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#fafafa] to-[#f4eaf9] border border-[#e8dbf0] hover:border-[--color-brand-purple] hover:shadow-md transition-all text-left group">
                                    <span className="font-bold text-gray-800 group-hover:text-[--color-brand-purple-dark]">Book New Service</span>
                                    <span className="text-[--color-brand-purple] bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm font-bold group-hover:bg-[--color-brand-purple] group-hover:text-white transition-colors">→</span>
                                </button>
                                <button onClick={() => navigate('/dashboard/client/history')} className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#fafafa] to-[#f9eaf0] border border-[#f5d5e0] hover:border-[--color-brand-pink] hover:shadow-md transition-all text-left group">
                                    <span className="font-bold text-gray-800 group-hover:text-[--color-brand-pink-dark]">My History</span>
                                    <span className="text-[--color-brand-pink-dark] bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm font-bold group-hover:bg-[--color-brand-pink] group-hover:text-white transition-colors">→</span>
                                </button>
                                <button onClick={() => navigate('/dashboard/client/settings')} className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all text-left group">
                                    <span className="font-bold text-gray-800 group-hover:text-gray-900">Settings</span>
                                    <span className="text-gray-500 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm font-bold group-hover:bg-gray-800 group-hover:text-white transition-colors">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ClientDashboard;
