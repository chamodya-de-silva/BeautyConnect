import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SalonDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'profile': return <ProfileTab />;
            case 'services': return <ServicesTab />;
            case 'staff': return <StaffTab />;
            case 'appointments': return <AppointmentsTab />;
            case 'customers': return <CustomersTab />;
            case 'chat': return <ChatTab />;
            case 'analytics': return <AnalyticsTab />;
            case 'inventory': return <InventoryTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm sticky top-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white font-bold text-xl">
                                SA
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Salon Admin</h3>
                                <p className="text-sm text-gray-500">Owner</p>
                            </div>
                        </div>

                        <nav className="space-y-1">
                            {[
                                { id: 'overview', label: 'Dashboard', icon: '📊' },
                                { id: 'profile', label: 'Salon Profile', icon: '🏢' },
                                { id: 'services', label: 'Services', icon: '✨' },
                                { id: 'staff', label: 'Staff & Team', icon: '👥' },
                                { id: 'appointments', label: 'Bookings', icon: '🗓️' },
                                { id: 'customers', label: 'Clients', icon: '🤝' },
                                { id: 'chat', label: 'Messages', icon: '💬' },
                                { id: 'analytics', label: 'Analytics', icon: '📈' },
                                { id: 'inventory', label: 'Inventory', icon: '📦' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm ${activeTab === tab.id ? 'bg-black text-white font-bold shadow-md' : 'text-gray-600 hover:bg-gray-50 font-medium'}`}
                                >
                                    <span>{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-hidden">
                    {renderTabContent()}
                </div>
            </div>

            <Footer />
        </div>
    );
};

// --- Sub Components ---

const OverviewTab = () => (
    <div className="space-y-8 animate-fade-in">
        <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Salon Overview</h1>
            <p className="text-gray-600">Quick glance at your salon's performance today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { label: 'Revenue (Today)', value: 'Rs. 45,000', change: '+15%', color: 'text-green-500' },
                { label: 'Appointments', value: '24', change: '4 Pending', color: 'text-orange-500' },
                { label: 'Active Staff', value: '8/10', change: 'On Duty', color: 'text-gray-500' },
                { label: 'Low Stock Items', value: '3', change: 'Needs Restock', color: 'text-red-500' },
            ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm">
                    <p className="text-sm text-gray-500 mb-2 font-medium">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className={`text-xs ${stat.color} font-bold`}>{stat.change}</p>
                </div>
            ))}
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Live Activity</h2>
            <p className="text-gray-500 text-sm">Dashboard for overall salon management will display real-time ongoing services here.</p>
        </div>
    </div>
);

const ProfileTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900">Salon Profile</h2>
        <p className="text-gray-600 text-sm">Upload salon logo, add images, update location and business hours.</p>
        {/* Placeholder for form */}
        <div className="h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">Profile Form UI</div>
    </div>
);

const ServicesTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900">Manage Services</h2>
        <p className="text-gray-600 text-sm">Add, edit, and remove salon services, set pricing, duration, and create categories.</p>
        <div className="h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">Services List & Add Modal UI</div>
    </div>
);

const StaffTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900">Staff Management</h2>
        <p className="text-gray-600 text-sm">Add/manage beauticians, assign services, and manage staff schedules & availability.</p>
        <div className="h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">Staff Roster UI</div>
    </div>
);

const AppointmentsTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900">Bookings & Calendar</h2>
        <p className="text-gray-600 text-sm">Booking calendar to approve, cancel, or reassign bookings and view all appointments.</p>
        <div className="h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">Calendar & Appointments UI</div>
    </div>
);

const CustomersTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>
        <p className="text-gray-600 text-sm">View customer details, booking history, and manage reviews/promotions.</p>
        <div className="h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">Customer CRM UI</div>
    </div>
);

const ChatTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900">In-App Chat</h2>
        <p className="text-gray-600 text-sm">Communicate with customers and staff members.</p>
        <div className="h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">Chat Interface UI</div>
    </div>
);

const AnalyticsTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900">Business Analytics</h2>
        <p className="text-gray-600 text-sm">Daily/weekly/monthly sales reports, popular service analysis, and staff performance.</p>
        <div className="h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">Charts & Reports UI</div>
    </div>
);

const InventoryTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900">Inventory Management</h2>
        <p className="text-gray-600 text-sm">Beauty product management, low stock alerts, and expense tracking.</p>
        <div className="h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">Inventory Tracker UI</div>
    </div>
);

export default SalonDashboard;
