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
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm ${activeTab === tab.id ? 'bg-white text-black font-bold shadow-md border border-gray-200' : 'text-gray-600 hover:bg-gray-50 font-medium'}`}
                                >
                                    <span>{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <button 
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('user');
                                    window.location.href = '/';
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm text-red-500 hover:bg-red-50 font-bold"
                            >
                                <span>🚪</span>
                                Log Out
                            </button>
                        </div>
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Salon Profile</h2>
                <p className="text-gray-600 text-sm">Manage your salon's public identity and settings.</p>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full font-bold shadow-sm hover:bg-gray-800 transition-all">Save Changes</button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mt-6">
            <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-gray-400 font-bold">Logo</span>
                </div>
                <button className="text-sm font-bold border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">Upload Logo</button>
            </div>
            
            <div className="flex-1 space-y-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Salon Name</label>
                    <input type="text" defaultValue="Luxe Beauty Lounge" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-black" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Location / Address</label>
                    <input type="text" defaultValue="123 Galle Road, Colombo" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-black" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Business Phone</label>
                    <input type="text" defaultValue="011 234 5678" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-black" />
                </div>
            </div>
        </div>
        
        <div className="mt-8 border-t border-gray-100 pt-8">
            <h3 className="font-bold text-gray-900 mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <div key={day} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg">
                        <span className="font-medium text-gray-700 w-24">{day}</span>
                        {day === 'Sunday' ? (
                            <span className="text-sm font-bold text-red-500">Closed</span>
                        ) : (
                            <div className="flex items-center gap-2">
                                <input type="time" defaultValue="09:00" className="border border-gray-200 rounded px-2 py-1 text-sm outline-none" />
                                <span>-</span>
                                <input type="time" defaultValue="18:00" className="border border-gray-200 rounded px-2 py-1 text-sm outline-none" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ServicesTab = () => {
    const [activeSubTab, setActiveSubTab] = useState('All');
    const [services, setServices] = useState([
        { id: 1, name: 'Bridal Makeup', category: 'Makeup', price: '25,000', duration: '120 mins' },
        { id: 2, name: 'Hair Coloring', category: 'Hair', price: '8,000', duration: '90 mins' },
        { id: 3, name: 'Premium Haircut', category: 'Hair', price: '4,500', duration: '45 mins' }
    ]);
    const filteredServices = services.filter(s => activeSubTab === 'All' || s.category === activeSubTab);

    return (
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Manage Services</h2>
                    <p className="text-gray-600 text-sm">Add, edit, and remove salon services, set pricing.</p>
                </div>
                <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all">+ Add Service</button>
            </div>
            
            <div className="flex gap-2 border-b border-gray-100 pb-4 overflow-x-auto">
                {['All', 'Hair', 'Makeup', 'Nails'].map(cat => (
                    <button 
                        key={cat} 
                        onClick={() => setActiveSubTab(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeSubTab === cat ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filteredServices.map(s => (
                    <div key={s.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-all">
                        <div>
                            <h4 className="font-bold text-gray-900">{s.name}</h4>
                            <p className="text-sm text-gray-500">{s.category} • {s.duration}</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="font-bold text-gray-900">Rs. {s.price}</span>
                            <button className="text-gray-400 hover:text-red-500 transition-colors">🗑️</button>
                        </div>
                    </div>
                ))}
                {filteredServices.length === 0 && (
                    <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        No services found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

const StaffTab = () => {
    const [activeSubTab, setActiveSubTab] = useState('All');
    const [staff, setStaff] = useState([
        { id: 1, name: 'Sarah Stylist', role: 'Hair Stylist', status: 'Active' },
        { id: 2, name: 'Kasun Barber', role: 'Barber', status: 'On Leave' },
        { id: 3, name: 'Amila Perera', role: 'Nail Technician', status: 'Active' }
    ]);
    const filteredStaff = staff.filter(s => activeSubTab === 'All' || s.status === activeSubTab);

    return (
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Staff Management</h2>
                    <p className="text-gray-600 text-sm">Add/manage beauticians, assign services, and manage staff schedules.</p>
                </div>
                <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all">+ Add Staff</button>
            </div>
            
            <div className="flex gap-2 border-b border-gray-100 pb-4 overflow-x-auto">
                {['All', 'Active', 'On Leave'].map(cat => (
                    <button 
                        key={cat} 
                        onClick={() => setActiveSubTab(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeSubTab === cat ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filteredStaff.map(s => (
                    <div key={s.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-all gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600 border border-gray-200">{s.name.charAt(0)}</div>
                            <div>
                                <h4 className="font-bold text-gray-900">{s.name}</h4>
                                <p className="text-sm text-gray-500">{s.role}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className={`px-4 py-1 rounded-full text-xs font-bold ${s.status==='Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{s.status}</span>
                            <button className="text-gray-500 hover:text-black font-bold text-sm bg-gray-50 px-3 py-1 rounded-lg">Edit</button>
                        </div>
                    </div>
                ))}
                {filteredStaff.length === 0 && (
                    <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        No staff found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

const AppointmentsTab = () => {
    const [view, setView] = useState('Daily');
    return (
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Bookings & Calendar</h2>
                    <p className="text-gray-600 text-sm">Approve, cancel, or reassign bookings.</p>
                </div>
                <div className="flex bg-gray-100 p-1 rounded-xl">
                    {['Daily', 'Weekly', 'Monthly'].map(v => (
                        <button key={v} onClick={() => setView(v)} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${view === v ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}>{v}</button>
                    ))}
                </div>
            </div>
            <div className="space-y-4">
                {[
                    { id: 1, time: '10:00 AM', client: 'Sarah M.', service: 'Bridal Makeup', status: 'Pending', staff: 'Unassigned' },
                    { id: 2, time: '12:30 PM', client: 'Ruwan T.', service: 'Hair Coloring', status: 'Confirmed', staff: 'Kasun Barber' }
                ].map(appt => (
                    <div key={appt.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-all gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-100 px-4 py-2 rounded-lg font-bold text-gray-900 text-sm whitespace-nowrap">{appt.time}</div>
                            <div>
                                <h4 className="font-bold text-gray-900">{appt.client}</h4>
                                <p className="text-sm text-gray-500">{appt.service} • {appt.staff}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {appt.status === 'Pending' ? (
                                <>
                                    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800">Approve</button>
                                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-300">Reject</button>
                                </>
                            ) : (
                                <button className="border border-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-50">Reassign</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CustomersTab = () => {
    return (
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>
            <p className="text-gray-600 text-sm">View customer details, booking history, and manage reviews.</p>
            <div className="space-y-4">
                {[
                    { id: 1, name: 'Dilini Perera', bookings: 12, spent: 'Rs. 45,000', lastVisit: '2 days ago' },
                    { id: 2, name: 'Ayesha Fernando', bookings: 3, spent: 'Rs. 12,500', lastVisit: '1 month ago' }
                ].map(c => (
                    <div key={c.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600 border border-gray-200">{c.name.charAt(0)}</div>
                            <div>
                                <h4 className="font-bold text-gray-900">{c.name}</h4>
                                <p className="text-sm text-gray-500">Last visit: {c.lastVisit}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-900">{c.bookings} Bookings</p>
                                <p className="text-xs text-gray-500">Total Spent: {c.spent}</p>
                            </div>
                            <button className="bg-gray-100 text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200">View History</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ChatTab = () => {
    return (
        <div className="h-[600px] flex animate-fade-in bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="w-1/3 border-r border-gray-100 flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Messages</h2>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-xl cursor-pointer border border-gray-200">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold border border-gray-200">S</div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Sarah (Staff)</h4>
                            <p className="text-xs text-gray-600 truncate">I'll be 5 mins late today.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold border border-gray-300">C</div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Client: Amanda</h4>
                            <p className="text-xs text-gray-500 truncate">Can I reschedule my appointment?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 flex flex-col items-center justify-center bg-[#fafafa]">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-900">Select a conversation</h3>
                <p className="text-gray-500 text-sm">Chat with your staff and clients in real-time.</p>
            </div>
        </div>
    );
};

const AnalyticsTab = () => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Business Analytics</h2>
            <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-50">Download Report</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
                <h3 className="font-bold text-gray-900 mb-4">Popular Services</h3>
                <div className="space-y-3">
                    {['Hair Coloring (45%)', 'Bridal Makeup (30%)', 'Manicure (15%)', 'Other (10%)'].map((s,i) => (
                        <div key={i} className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700">{s.split(' (')[0]}</span>
                            <span className="text-sm font-bold text-gray-900">{s.split('(')[1].replace(')','')}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
                <h3 className="font-bold text-gray-900 mb-4">Staff Performance</h3>
                <div className="space-y-3">
                    {['Sarah Stylist - 4.9⭐ (120 bookings)', 'Kasun Barber - 4.7⭐ (85 bookings)'].map((s,i) => (
                        <div key={i} className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700">{s.split(' - ')[0]}</span>
                            <span className="text-sm font-bold text-green-600">{s.split(' - ')[1]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const InventoryTab = () => {
    const [activeSubTab, setActiveSubTab] = useState('All');
    const [items, setItems] = useState([
        { id: 1, name: 'Loreal Professional Shampoo', stock: 15, status: 'In Stock', type: 'Hair' },
        { id: 2, name: 'Keratin Treatment Serum', stock: 2, status: 'Low Stock', type: 'Hair' },
        { id: 3, name: 'Disposable Towels (Pack of 50)', stock: 8, status: 'In Stock', type: 'Supplies' }
    ]);
    const filteredItems = items.filter(s => activeSubTab === 'All' || s.type === activeSubTab);

    return (
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Inventory Management</h2>
                    <p className="text-gray-600 text-sm">Beauty product management, low stock alerts.</p>
                </div>
                <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all">+ Add Product</button>
            </div>
            
            <div className="flex gap-2 border-b border-gray-100 pb-4 overflow-x-auto">
                {['All', 'Hair', 'Supplies', 'Skincare'].map(cat => (
                    <button 
                        key={cat} 
                        onClick={() => setActiveSubTab(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeSubTab === cat ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filteredItems.map(s => (
                    <div key={s.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-all">
                        <div>
                            <h4 className="font-bold text-gray-900">{s.name}</h4>
                            <p className="text-sm text-gray-500">{s.stock} units remaining • {s.type}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className={`px-4 py-1 rounded-full text-xs font-bold ${s.status==='In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{s.status}</span>
                            <button className="text-gray-500 hover:text-black font-bold text-sm bg-gray-50 px-3 py-1 rounded-lg">Edit</button>
                        </div>
                    </div>
                ))}
                {filteredItems.length === 0 && (
                    <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        No items found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default SalonDashboard;
