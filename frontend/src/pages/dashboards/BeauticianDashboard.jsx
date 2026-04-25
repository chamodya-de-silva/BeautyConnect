import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BeauticianDashboard = () => {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-2">Pro <span className="text-[--color-brand-pink-dark]">Dashboard</span></h1>
                        <p className="text-gray-600 font-light text-lg">Manage your bookings and grow your business.</p>
                    </div>
                    <button className="bg-[--color-brand-pink-dark] hover:bg-[#d499b5] text-white px-6 py-3 rounded-full font-bold shadow-md transition-all self-start md:self-auto">
                        + Add Availability
                    </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: 'Today\'s Earnings', value: 'Rs. 15,000', change: '+12%', color: 'text-green-500' },
                        { label: 'Upcoming Appts', value: '8', change: 'This week', color: 'text-gray-500' },
                        { label: 'Profile Views', value: '243', change: '+5%', color: 'text-green-500' },
                        { label: 'Avg Rating', value: '4.9', change: 'Based on 45 reviews', color: 'text-gray-500' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-500 mb-2 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                            <p className={`text-xs ${stat.color} font-medium`}>{stat.change}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Area - Schedule */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-2xl font-bold text-gray-900">Today's Schedule</h2>
                            <button className="text-[--color-brand-purple-dark] text-sm font-bold hover:underline">View Calendar</button>
                        </div>
                        
                        {[
                            { time: '09:00 AM', client: 'Nishanthi Silva', service: 'Bridal Trial', duration: '2 hours', status: 'Confirmed' },
                            { time: '11:30 AM', client: 'Piyumi Fernando', service: 'Hair Coloring', duration: '1.5 hours', status: 'Pending' },
                        ].map((appt, i) => (
                            <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="w-20 h-20 bg-[#fafafa] rounded-2xl flex flex-col items-center justify-center border border-gray-200 flex-shrink-0">
                                    <span className="text-sm font-bold text-[--color-brand-purple-dark]">{appt.time.split(' ')[0]}</span>
                                    <span className="text-xs text-gray-500 font-medium">{appt.time.split(' ')[1]}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{appt.client}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{appt.service} • {appt.duration}</p>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {appt.status}
                                    </span>
                                </div>
                                <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                                    <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">Details</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[--color-brand-pink-dark] hover:shadow-sm transition-all text-left group">
                                    <span className="font-medium text-gray-700 group-hover:text-[--color-brand-pink-dark]">Edit Services & Pricing</span>
                                    <span className="text-gray-400 group-hover:text-[--color-brand-pink-dark]">→</span>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[--color-brand-pink-dark] hover:shadow-sm transition-all text-left group">
                                    <span className="font-medium text-gray-700 group-hover:text-[--color-brand-pink-dark]">Manage Portfolio</span>
                                    <span className="text-gray-400 group-hover:text-[--color-brand-pink-dark]">→</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-8 rounded-[2rem] text-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-[-20%] right-[-10%] w-40 h-40 rounded-full bg-[--color-brand-purple] opacity-30 blur-2xl"></div>
                            <h3 className="text-xl font-bold mb-4">Boost Profile</h3>
                            <p className="text-sm text-gray-300 mb-6 font-light">Get 3x more views by featuring your profile on the homepage.</p>
                            <button className="w-full bg-[--color-brand-purple] hover:bg-[--color-brand-purple-dark] text-white py-3 rounded-xl font-bold transition-colors">
                                Upgrade Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BeauticianDashboard;
