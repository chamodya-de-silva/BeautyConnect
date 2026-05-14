import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { beautyServicesCategories } from '../../data/services';

const BeauticianDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [appointments, setAppointments] = useState([
        { id: 1, client: 'Sarah Johnson', service: 'Bridal Makeup', time: '10:00 AM', date: '2026-05-15', duration: '90 mins', status: 'Upcoming' },
        { id: 2, client: 'Emily Chen', service: 'Hair Coloring', time: '01:00 PM', date: '2026-05-15', duration: '120 mins', status: 'Upcoming' },
        { id: 3, client: 'Jessica Alba', service: 'Basic Facial', time: '04:00 PM', date: '2026-05-16', duration: '45 mins', status: 'Pending' },
        { id: 4, client: 'Anna Smith', service: 'Hair Styling', time: '09:00 AM', date: '2026-05-14', duration: '60 mins', status: 'Past' },
        { id: 5, client: 'Laura Palmer', service: 'Manicure', time: '02:30 PM', date: '2026-05-17', duration: '45 mins', status: 'Pending' }
    ]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            const newBooking = {
                id: 6,
                client: 'Amanda Bynes',
                service: 'Full Body Waxing',
                time: '03:00 PM',
                date: '2026-05-20',
                duration: '60 mins',
                status: 'Pending'
            };
            setAppointments(prev => [newBooking, ...prev]);
            setToastMessage('New Booking Request from Amanda Bynes!');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 5000);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewTab />;
            case 'profile':
                return <ProfileTab />;
            case 'services':
                return <ServicesTab />;
            case 'schedule':
                return <ScheduleTab appointments={appointments} setAppointments={setAppointments} />;
            case 'reviews':
                return <ReviewsTab />;
            case 'settings':
                return <WorkingHoursTab />;
            case 'messages':
                return <MessagesTab />;
            default:
                return <OverviewTab />;
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
                            <div className="w-16 h-16 rounded-full bg-[--color-brand-pink-light] flex items-center justify-center text-[--color-brand-pink-dark] font-bold text-xl">
                                JD
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Jane Doe</h3>
                                <p className="text-sm text-gray-500">Beautician</p>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            {[
                                { id: 'overview', label: 'Dashboard Overview', icon: '📊' },
                                { id: 'schedule', label: 'Appointments', icon: '🗓️' },
                                { id: 'services', label: 'My Services', icon: '✨' },
                                { id: 'profile', label: 'Profile & Portfolio', icon: '👤' },
                                { id: 'settings', label: 'Working Hours', icon: '⏱️' },
                                { id: 'messages', label: 'Messages', icon: '💬' },
                                { id: 'reviews', label: 'Reviews', icon: '⭐' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === tab.id ? 'bg-[--color-brand-pink-dark] text-black font-bold shadow-md' : 'text-gray-600 hover:bg-gray-50 font-medium'}`}
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
                <div className="flex-1">
                    {renderTabContent()}
                </div>
            </div>

            <Footer />

            {/* Real-time Notification Toast */}
            {showToast && (
                <div className="fixed bottom-10 right-10 bg-white border-l-4 border-[--color-brand-pink-dark] p-4 rounded-xl shadow-2xl flex items-center gap-4 animate-fade-in z-50">
                    <div className="w-10 h-10 rounded-full bg-[--color-brand-pink-light] flex items-center justify-center text-xl">
                        🔔
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">New Notification</h4>
                        <p className="text-sm text-gray-600">{toastMessage}</p>
                    </div>
                    <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-gray-900 ml-4">&times;</button>
                </div>
            )}
        </div>
    );
};

// --- Sub Components for Tabs ---

const OverviewTab = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-end">
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 font-serif mb-2">Welcome back, Jane!</h1>
                <p className="text-gray-600 font-light">Here's what's happening today.</p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Online & Accepting Bookings
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { label: 'Today\'s Earnings', value: 'Rs. 15,000', change: '+12%', color: 'text-green-500' },
                { label: 'Pending Requests', value: '3', change: 'Needs action', color: 'text-orange-500' },
                { label: 'Upcoming Appts', value: '8', change: 'This week', color: 'text-gray-500' },
                { label: 'Avg Rating', value: '4.9', change: 'Based on 45 reviews', color: 'text-[--color-brand-pink-dark]' },
            ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 mb-2 font-medium">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className={`text-xs ${stat.color} font-medium`}>{stat.change}</p>
                </div>
            ))}
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
                <button className="text-[--color-brand-purple-dark] text-sm font-bold hover:underline">View Calendar</button>
            </div>
            
            <div className="space-y-4">
                {[
                    { time: '09:00 AM', client: 'Nishanthi Silva', service: 'Bridal Trial', duration: '2 hours', status: 'Confirmed' },
                    { time: '11:30 AM', client: 'Piyumi Fernando', service: 'Hair Coloring', duration: '1.5 hours', status: 'Pending' },
                ].map((appt, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[--color-brand-pink-light] transition-colors">
                        <div className="w-16 h-16 bg-[#fafafa] rounded-xl flex flex-col items-center justify-center border border-gray-200 flex-shrink-0">
                            <span className="text-sm font-bold text-[--color-brand-purple-dark]">{appt.time.split(' ')[0]}</span>
                            <span className="text-xs text-gray-500 font-medium">{appt.time.split(' ')[1]}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-md font-bold text-gray-900">{appt.client}</h3>
                            <p className="text-sm text-gray-600">{appt.service} • {appt.duration}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                                {appt.status}
                            </span>
                            <button className="text-gray-400 hover:text-[--color-brand-pink-dark] transition-colors">⚙️</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ScheduleTab = ({ appointments, setAppointments }) => {
    const [activeInnerTab, setActiveInnerTab] = useState('Upcoming');
    const [viewMode, setViewMode] = useState('Daily');
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const handleAccept = (id) => {
        setAppointments(appointments.map(app => app.id === id ? { ...app, status: 'Upcoming' } : app));
    };

    const handleReject = (id) => {
        setAppointments(appointments.map(app => app.id === id ? { ...app, status: 'Cancelled' } : app));
    };

    const handleComplete = (id) => {
        setAppointments(appointments.map(app => app.id === id ? { ...app, status: 'Past' } : app));
    };

    const filteredAppointments = appointments.filter(app => {
        if (activeInnerTab === 'Upcoming') return app.status === 'Upcoming';
        if (activeInnerTab === 'Pending Requests') return app.status === 'Pending';
        if (activeInnerTab === 'Past') return app.status === 'Past' || app.status === 'Cancelled';
        return true;
    });

    return (
        <div className="space-y-6 animate-fade-in bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Manage Appointments</h2>
                <div className="flex bg-gray-100 p-1 rounded-xl">
                    {['Daily', 'Weekly', 'Monthly'].map(view => (
                        <button key={view} onClick={() => setViewMode(view)} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === view ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}>{view}</button>
                    ))}
                </div>
            </div>
            <div className="flex gap-4 mb-6 border-b border-gray-100 pb-4">
                {['Upcoming', 'Pending Requests', 'Past'].map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveInnerTab(tab)}
                        className={`px-4 py-2 font-bold transition-all ${activeInnerTab === tab ? 'text-[--color-brand-pink-dark] border-b-2 border-[--color-brand-pink-dark]' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
            <div className="space-y-4">
                {filteredAppointments.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No appointments found in this category.</p>
                ) : (
                    filteredAppointments.map(app => (
                        <div key={app.id} className="flex flex-col md:flex-row justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-[--color-brand-pink-light] transition-all gap-4">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="w-12 h-12 rounded-full bg-[--color-brand-pink-light] flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                                    {app.client.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{app.client}</h3>
                                    <p className="text-sm text-gray-500">{app.service} • {app.duration}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-sm text-gray-700 bg-gray-50 px-4 py-2 rounded-lg font-medium">
                                    🗓️ {app.date} at {app.time}
                                </div>
                                <button onClick={() => setSelectedAppointment(app)} className="bg-[--color-brand-purple-dark] text-black px-4 py-2 rounded-lg text-sm font-bold hover:opacity-80 transition-opacity">View Details</button>
                                
                                <div className="flex gap-2">
                                    {activeInnerTab === 'Pending Requests' && (
                                        <>
                                            <button onClick={() => handleAccept(app.id)} className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-200 transition-colors">Accept</button>
                                            <button onClick={() => handleReject(app.id)} className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-200 transition-colors">Reject</button>
                                        </>
                                    )}
                                    {activeInnerTab === 'Upcoming' && (
                                        <button onClick={() => handleComplete(app.id)} className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-600 transition-colors">Mark Completed</button>
                                    )}
                                    {activeInnerTab === 'Past' && (
                                        <span className={`px-4 py-2 rounded-lg text-sm font-bold ${app.status === 'Cancelled' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'}`}>
                                            {app.status}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Customer Details Modal */}
            {selectedAppointment && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Customer Details</h3>
                            <button onClick={() => setSelectedAppointment(null)} className="text-gray-400 hover:text-gray-900 text-2xl">&times;</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-[--color-brand-pink-light] flex items-center justify-center text-black font-bold text-2xl flex-shrink-0">
                                    {selectedAppointment.client.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">{selectedAppointment.client}</h4>
                                    <p className="text-sm text-[--color-brand-purple-dark] font-bold">New Customer</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <p className="text-sm text-gray-500 mb-1">Service Requested</p>
                                <p className="font-bold text-gray-900">{selectedAppointment.service}</p>
                                <p className="text-sm text-gray-500 mt-2">Duration: {selectedAppointment.duration}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Booking History</h4>
                                <p className="text-sm text-gray-600">This client has no past bookings with you.</p>
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button className="flex-1 bg-[--color-brand-pink-dark] text-black py-3 rounded-full font-bold shadow-md hover:bg-[#d499b5]">Message Client</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ServicesTab = () => {
    const [selectedCategory, setSelectedCategory] = useState(Object.keys(beautyServicesCategories)[0]);
    const [myServices, setMyServices] = useState(
        Object.keys(beautyServicesCategories).reduce((acc, cat) => {
            acc[cat] = beautyServicesCategories[cat].slice(0, 3).map(s => ({ name: s, duration: '45 mins', price: '2,500' }));
            return acc;
        }, {})
    );
    const [showModal, setShowModal] = useState(false);
    const [newService, setNewService] = useState({ name: '', duration: '60 mins', price: '' });

    const handleAddService = (e) => {
        e.preventDefault();
        if (newService.name && newService.price) {
            setMyServices(prev => ({
                ...prev,
                [selectedCategory]: [...(prev[selectedCategory] || []), { name: newService.name, duration: newService.duration, price: newService.price }]
            }));
            setShowModal(false);
            setNewService({ name: '', duration: '60 mins', price: '' });
        }
    };

    return (
        <div className="space-y-6 animate-fade-in bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Services & Pricing</h2>
                <button onClick={() => setShowModal(true)} className="bg-[--color-brand-pink-dark] text-black px-4 py-2 rounded-full font-bold shadow-md hover:bg-[#d499b5] transition-all">
                    + Add New Service
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Categories */}
                <div className="w-full md:w-1/3 border-r border-gray-100 pr-4">
                    <h3 className="font-bold text-gray-700 mb-4">Categories</h3>
                    <div className="space-y-2">
                        {Object.keys(beautyServicesCategories).map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-[--color-brand-pink-light] text-[--color-brand-pink-dark]' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Services List */}
                <div className="w-full md:w-2/3">
                    <h3 className="font-bold text-gray-700 mb-4">{selectedCategory}</h3>
                    <div className="space-y-3">
                        {myServices[selectedCategory]?.map((service, i) => (
                            <div key={i} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-[--color-brand-pink-light] transition-all">
                                <div>
                                    <h4 className="font-bold text-gray-900">{service.name}</h4>
                                    <p className="text-sm text-gray-500">{service.duration}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-[--color-brand-purple-dark]">Rs. {service.price}</span>
                                    <button className="text-gray-400 hover:text-[--color-brand-pink-dark]">✏️</button>
                                </div>
                            </div>
                        ))}
                        <button onClick={() => setShowModal(true)} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 font-bold hover:border-[--color-brand-pink-dark] hover:text-[--color-brand-pink-dark] transition-all">
                            Add {selectedCategory} Service
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Service Modal popup */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Add New {selectedCategory} Service</h3>
                        <form onSubmit={handleAddService} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Service Name</label>
                                <select 
                                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[--color-brand-pink-dark] outline-none"
                                    value={newService.name}
                                    onChange={e => setNewService({...newService, name: e.target.value})}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    {beautyServicesCategories[selectedCategory].map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Duration</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[--color-brand-pink-dark] outline-none" 
                                        placeholder="e.g. 45 mins"
                                        value={newService.duration}
                                        onChange={e => setNewService({...newService, duration: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Price (Rs.)</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[--color-brand-pink-dark] outline-none" 
                                        placeholder="2,500"
                                        value={newService.price}
                                        onChange={e => setNewService({...newService, price: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-3 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</button>
                                <button type="submit" className="bg-[--color-brand-pink-dark] text-black px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#d499b5] transition-colors">Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProfileTab = () => {
    const [profilePic, setProfilePic] = useState("https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=200");
    const [portfolioImages, setPortfolioImages] = useState([
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=200"
    ]);

    const handleChangeProfilePic = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePic(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleAddImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const url = URL.createObjectURL(e.target.files[0]);
            setPortfolioImages([...portfolioImages, url]);
        }
    };

    const handleRemoveImage = (index) => {
        setPortfolioImages(portfolioImages.filter((_, i) => i !== index));
    };

    return (
    <div className="space-y-6 animate-fade-in bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile & Portfolio</h2>
        <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
                <label className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all text-sm mb-2 cursor-pointer inline-block">
                    Change Picture
                    <input type="file" className="hidden" accept="image/*" onChange={handleChangeProfilePic} />
                </label>
                <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
            </div>
        </div>

        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[--color-brand-pink-dark] focus:ring-1 focus:ring-[--color-brand-pink-dark]" defaultValue="Jane Doe" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Specialization</label>
                    <input type="text" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[--color-brand-pink-dark] focus:ring-1 focus:ring-[--color-brand-pink-dark]" defaultValue="Bridal Makeup Artist" />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bio / Experience</label>
                    <textarea rows="4" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[--color-brand-pink-dark] focus:ring-1 focus:ring-[--color-brand-pink-dark]" defaultValue="Over 5 years of experience in creating stunning bridal looks..."></textarea>
                </div>
            </div>
            
            <hr className="border-gray-100" />
            
            <div>
                <h3 className="font-bold text-gray-900 mb-4">Portfolio</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {portfolioImages.map((img, i) => (
                        <div key={i} className="aspect-square rounded-xl bg-gray-100 overflow-hidden relative group">
                            <img src={img} alt={`Portfolio ${i}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button type="button" onClick={() => handleRemoveImage(i)} className="text-black text-sm font-bold bg-red-500 px-3 py-1 rounded-full">Remove</button>
                            </div>
                        </div>
                    ))}
                    <label className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:border-[--color-brand-pink-dark] hover:text-[--color-brand-pink-dark] transition-all cursor-pointer">
                        <input type="file" className="hidden" accept="image/*" onChange={handleAddImage} />
                        <span className="text-2xl mb-1">+</span>
                        <span className="text-sm font-bold">Add Image</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button type="button" className="bg-[--color-brand-pink-dark] text-black px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#d499b5] transition-all">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
    );
};

const ReviewsTab = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Client Name', time: '2 days ago', service: 'Bridal Makeup', rating: 5, comment: 'Jane was absolutely amazing! She made me feel so beautiful on my special day. Highly recommend her services to anyone.', reply: '' },
        { id: 2, name: 'Another Client', time: '1 week ago', service: 'Hair Styling', rating: 4, comment: 'Great service, loved the hairstyle but was a bit late.', reply: '' }
    ]);
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState('');

    const submitReply = (id) => {
        if (!replyText.trim()) return;
        setReviews(reviews.map(r => r.id === id ? { ...r, reply: replyText } : r));
        setReplyingTo(null);
        setReplyText('');
    };

    return (
    <div className="space-y-6 animate-fade-in bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        <div className="flex items-center gap-4 mb-8 bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <div className="text-4xl font-extrabold text-orange-500">4.9</div>
            <div>
                <div className="flex text-orange-400 text-lg">★★★★★</div>
                <p className="text-sm font-medium text-orange-800">Based on 45 reviews</p>
            </div>
        </div>
        
        <div className="space-y-6">
            {reviews.map(review => (
                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            <div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <p className="text-xs text-gray-500">{review.time} • {review.service}</p>
                            </div>
                        </div>
                        <div className="text-orange-400">{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
                    
                    {review.reply ? (
                        <div className="mt-4 bg-[--color-brand-pink-light] p-4 rounded-xl border border-[--color-brand-pink]">
                            <p className="text-xs font-bold text-[--color-brand-pink-dark] mb-1">Your Reply</p>
                            <p className="text-sm text-gray-800">{review.reply}</p>
                        </div>
                    ) : replyingTo === review.id ? (
                        <div className="mt-4 flex gap-2">
                            <input 
                                type="text" 
                                value={replyText} 
                                onChange={e => setReplyText(e.target.value)} 
                                placeholder="Type your reply..." 
                                className="flex-1 p-2 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[--color-brand-pink-dark]" 
                            />
                            <button onClick={() => submitReply(review.id)} className="bg-[--color-brand-pink-dark] text-black px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-[#d499b5]">Send</button>
                            <button onClick={() => {setReplyingTo(null); setReplyText('');}} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-300">Cancel</button>
                        </div>
                    ) : (
                        <button onClick={() => setReplyingTo(review.id)} className="mt-3 text-sm font-bold text-[--color-brand-pink-dark] hover:underline">Reply to review</button>
                    )}
                </div>
            ))}
        </div>
    </div>
    );
};

const WorkingHoursTab = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
        <div className="space-y-6 animate-fade-in bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Working Days & Hours</h2>
            <div className="space-y-4">
                {days.map((day, i) => (
                    <div key={day} className="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-[--color-brand-pink-light] transition-all gap-4">
                        <div className="flex items-center gap-3 w-full sm:w-1/3">
                            <input type="checkbox" defaultChecked={i < 5} className="w-5 h-5 rounded text-[--color-brand-pink-dark] focus:ring-[--color-brand-pink-dark] cursor-pointer" />
                            <span className="font-bold text-gray-900">{day}</span>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-2/3 justify-end">
                            <input type="time" defaultValue="09:00" disabled={i >= 5} className="p-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[--color-brand-pink-dark] outline-none disabled:bg-gray-100 disabled:text-gray-400" />
                            <span className="text-gray-500 font-medium">to</span>
                            <input type="time" defaultValue="18:00" disabled={i >= 5} className="p-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[--color-brand-pink-dark] outline-none disabled:bg-gray-100 disabled:text-gray-400" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end pt-4">
                <button type="button" className="bg-[--color-brand-pink-dark] text-black px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#d499b5] transition-all">
                    Save Schedule
                </button>
            </div>
        </div>
    );
};

const MessagesTab = () => {
    const [messages, setMessages] = useState([
        { sender: 'user', text: 'Hi! Are you available tomorrow for a bridal trial?' },
        { sender: 'me', text: 'Hello! Yes, I have a slot at 10 AM. Does that work for you?' }
    ]);
    const [input, setInput] = useState('');

    const sendMsg = (e) => {
        e.preventDefault();
        if(input.trim()){
            setMessages([...messages, { sender: 'me', text: input }]);
            setInput('');
        }
    }

    return (
        <div className="h-[600px] flex animate-fade-in bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/3 border-r border-gray-100 flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Chats</h2>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-[--color-brand-pink-light] rounded-xl cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold">S</div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Sarah Johnson</h4>
                            <p className="text-xs text-gray-600 truncate">Hello! Yes, I have a slot...</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">E</div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Emily Chen</h4>
                            <p className="text-xs text-gray-500 truncate">Thanks for the great service!</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Chat Area */}
            <div className="w-2/3 flex flex-col">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[--color-brand-pink-light] flex items-center justify-center text-black font-bold">S</div>
                    <h3 className="font-bold text-gray-900">Sarah Johnson</h3>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fafafa]">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`px-4 py-2 max-w-[70%] rounded-2xl ${msg.sender === 'me' ? 'bg-[--color-brand-purple-dark] text-black rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="p-4 bg-white border-t border-gray-100">
                    <form onSubmit={sendMsg} className="flex gap-2">
                        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Type your message..." className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--color-brand-pink-dark]" />
                        <button type="submit" className="bg-[--color-brand-pink-dark] text-black px-6 rounded-xl font-bold shadow-md hover:bg-[#d499b5]">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BeauticianDashboard;
