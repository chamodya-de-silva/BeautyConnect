import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SalonDashboard = () => {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-2">Salon <span className="text-gray-500">Management</span></h1>
                        <p className="text-gray-600 font-light text-lg">Oversee operations, staff, and analytics.</p>
                    </div>
                    <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-full font-bold shadow-md transition-all self-start md:self-auto">
                        + Add Staff Member
                    </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: 'Total Revenue (Mtd)', value: 'Rs. 450,000', change: '+24%', color: 'text-green-500' },
                        { label: 'Total Bookings', value: '145', change: '+12%', color: 'text-green-500' },
                        { label: 'Active Staff', value: '8', change: '2 on leave', color: 'text-yellow-500' },
                        { label: 'Client Retention', value: '78%', change: '+3%', color: 'text-green-500' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-500 mb-2 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                            <p className={`text-xs ${stat.color} font-medium`}>{stat.change}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Area - Schedule overview */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-2xl font-bold text-gray-900">Live Salon Activity</h2>
                            <button className="text-gray-900 text-sm font-bold hover:underline">View Full Roster</button>
                        </div>
                        
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <div className="space-y-6">
                                {[
                                    { time: 'In Progress', staff: 'Sarah (Hair Stylist)', client: 'Dilini M.', service: 'Hair Coloring', status: 'Active' },
                                    { time: 'Next up', staff: 'Kasun (Barber)', client: 'Ruwan T.', service: 'Premium Haircut', status: 'Waiting' },
                                    { time: 'In 30 mins', staff: 'Amila (Nail Tech)', client: 'Pooja', service: 'Gel Manicure', status: 'Scheduled' },
                                ].map((appt, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                                        <div className="w-24 bg-gray-50 rounded-xl py-2 px-3 text-center border border-gray-100 flex-shrink-0">
                                            <span className="text-xs font-bold text-gray-900 block">{appt.time}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-900 mb-0.5">{appt.staff}</p>
                                            <p className="text-xs text-gray-500">with {appt.client} • {appt.service}</p>
                                        </div>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                            appt.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                            appt.status === 'Waiting' ? 'bg-yellow-100 text-yellow-800' : 
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {appt.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4">Management Links</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-900 hover:shadow-sm transition-all text-left group">
                                    <span className="font-medium text-gray-700 group-hover:text-gray-900">Staff Schedules</span>
                                    <span className="text-gray-400 group-hover:text-gray-900">→</span>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-900 hover:shadow-sm transition-all text-left group">
                                    <span className="font-medium text-gray-700 group-hover:text-gray-900">Inventory Management</span>
                                    <span className="text-gray-400 group-hover:text-gray-900">→</span>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-900 hover:shadow-sm transition-all text-left group">
                                    <span className="font-medium text-gray-700 group-hover:text-gray-900">Financial Reports</span>
                                    <span className="text-gray-400 group-hover:text-gray-900">→</span>
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

export default SalonDashboard;
