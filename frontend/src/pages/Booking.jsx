import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Booking = () => {
    const navigate = useNavigate();
    const routerLocation = useLocation();
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [status, setStatus] = useState(null);

    const categories = ['Makeup', 'Hair Styling', 'Nail Art', 'Skincare', 'Spa & Massage', 'Men\'s Grooming', 'Bridal Makeup'];
    const salons = [
        { name: 'Luxe Nail Spa', location: 'Colombo' },
        { name: 'Glow Up Studio', location: 'Kandy' },
        { name: 'Serenity Wellness', location: 'Galle' },
        { name: 'Sarah\'s Beauty Studio', location: 'Negombo' },
        { name: 'Luxe Salon', location: 'Colombo' }
    ];

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login/client');
            return;
        }

        const params = new URLSearchParams(routerLocation.search);
        const prefillService = params.get('service');
        const prefillSalon = params.get('salon');

        if (prefillService) setService(prefillService);
        if (prefillSalon) setLocation(prefillSalon);
    }, [navigate, routerLocation.search]);

    const handleBooking = async () => {
        if (!service || !location || !date || !time) {
            alert('Please fill out all fields');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                // location field is now storing the salon name for the backend logic
                body: JSON.stringify({ service, location, date, time })
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => navigate('/dashboard/client'), 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
                        Book an <span className="text-[--color-brand-purple-dark]">Appointment</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Select a salon, pick your service, and confirm your time.
                    </p>
                </div>

                {/* Search Bar / Filters */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 mb-16 max-w-5xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Select Salon</label>
                            <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all">
                                <option value="">Choose a salon...</option>
                                {salons.map(salon => <option key={salon.name} value={salon.name}>{salon.name} ({salon.location})</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Service Type</label>
                            <select value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all">
                                <option value="">What are you looking for?</option>
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Date</label>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Time</label>
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all" />
                        </div>
                        <div className="flex items-end md:col-span-2 mt-4">
                            <button onClick={handleBooking} className="w-full bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-white font-bold py-4 rounded-2xl shadow-lg shadow-[#9F5AD5]/30 hover:shadow-xl hover:shadow-[#9F5AD5]/40 hover:-translate-y-0.5 transition-all">
                                Confirm Appointment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                    <div className="text-center py-10 bg-green-50 border border-green-200 rounded-[2rem] max-w-5xl mx-auto">
                        <div className="text-4xl mb-4">🎉</div>
                        <h3 className="text-2xl font-bold text-green-700">Booking Confirmed!</h3>
                        <p className="text-green-600 mt-2">Redirecting to your dashboard...</p>
                    </div>
                )}
                {status === 'error' && (
                    <div className="text-center py-10 bg-red-50 border border-red-200 rounded-[2rem] max-w-5xl mx-auto">
                        <div className="text-4xl mb-4">❌</div>
                        <h3 className="text-2xl font-bold text-red-700">Booking Failed</h3>
                        <p className="text-red-600 mt-2">Please try again.</p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Booking;
