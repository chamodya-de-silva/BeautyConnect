import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Booking = () => {
    const navigate = useNavigate();
    const routerLocation = useLocation();
    
    const [professionals, setProfessionals] = useState([]);
    const [selectedProfId, setSelectedProfId] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [status, setStatus] = useState(null);
    const [bookedTimes, setBookedTimes] = useState([]);

    const availableTimeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "04:00 PM", "05:00 PM"
    ];

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login/client');
            return;
        }

        const fetchProfessionals = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/professionals');
                if (response.ok) {
                    const data = await response.json();
                    setProfessionals(data);

                    const params = new URLSearchParams(routerLocation.search);
                    const prefillSalon = params.get('salon');
                    if (prefillSalon) {
                        const prof = data.find(p => p.name === prefillSalon);
                        if (prof) setSelectedProfId(prof._id);
                    }

                    const prefillService = params.get('service');
                    if (prefillService) {
                        setService(prefillService);
                    }
                }
            } catch (err) {
                console.error("Failed to load professionals", err);
            }
        };

        fetchProfessionals();
    }, [navigate, routerLocation.search]);

    const getSelectedProfessional = () => {
        return professionals.find(p => p._id === selectedProfId);
    };

    useEffect(() => {
        const fetchAvailability = async () => {
            if (selectedProfId && date) {
                try {
                    const response = await fetch(`http://localhost:5000/api/bookings/availability?professional=${selectedProfId}&date=${date}`);
                    if (response.ok) {
                        const data = await response.json();
                        setBookedTimes(data.bookedTimes || []);
                        if (data.bookedTimes && data.bookedTimes.includes(time)) {
                            setTime(''); // Reset time if currently selected time is booked
                        }
                    }
                } catch (err) {
                    console.error("Failed to fetch availability", err);
                }
            } else {
                setBookedTimes([]);
            }
        };
        fetchAvailability();
    }, [selectedProfId, date]);

    const handleBooking = async () => {
        const prof = getSelectedProfessional();
        if (!prof || !service || !date || !time) {
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
                body: JSON.stringify({ 
                    professional: prof._id,
                    location: prof.name, 
                    service, 
                    date, 
                    time 
                })
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

    const allAvailableServices = [...new Set(professionals.flatMap(p => p.services || []))].sort();
    
    // Professionals who offer the selected service
    const filteredProfessionals = service ? professionals.filter(p => p.services && p.services.includes(service)) : [];

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-8">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-[--color-brand-purple] font-medium transition-colors flex items-center gap-2">
                        <span>←</span> Back
                    </button>
                </div>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
                        Book an <span className="text-[--color-brand-purple-dark]">Appointment</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Select a service, choose a professional, and confirm your real-time slot.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 mb-16 max-w-4xl mx-auto relative z-10">
                    
                    {/* Step 1: Select Service */}
                    <div className="mb-8">
                        <label className="block text-lg font-bold text-gray-900 mb-4">1. What service do you need?</label>
                        <select 
                            value={service} 
                            onChange={(e) => {
                                setService(e.target.value);
                                setSelectedProfId(''); // Reset professional when service changes
                            }} 
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all outline-none text-lg"
                        >
                            <option value="">Select a service...</option>
                            {allAvailableServices.map(svc => (
                                <option key={svc} value={svc}>{svc}</option>
                            ))}
                        </select>
                    </div>

                    {/* Step 2: Select Professional */}
                    <div className={`mb-8 transition-opacity duration-300 ${service ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                        <label className="block text-lg font-bold text-gray-900 mb-4">2. Choose Salon / Beautician</label>
                        {filteredProfessionals.length === 0 && service ? (
                            <p className="text-red-500 font-medium">No professionals found offering this service.</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {filteredProfessionals.map(prof => (
                                    <button 
                                        key={prof._id}
                                        onClick={() => setSelectedProfId(prof._id)}
                                        className={`flex items-center p-3 rounded-xl border transition-all text-left ${selectedProfId === prof._id ? 'bg-[--color-brand-purple]/10 border-[--color-brand-purple] shadow-sm ring-1 ring-[--color-brand-purple]' : 'bg-white border-gray-200 hover:border-[--color-brand-purple] hover:shadow-sm'}`}
                                    >
                                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 mr-4 flex-shrink-0">
                                            <img src={prof.profilePicture || 'https://images.unsplash.com/photo-1522337360788-8b13fee7a3af'} alt={prof.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className={`font-bold ${selectedProfId === prof._id ? 'text-[--color-brand-purple-dark]' : 'text-gray-900'}`}>{prof.name}</h4>
                                            <p className="text-xs text-gray-500">⭐ {prof.rating || '4.9'} | {prof.address || 'Location N/A'}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Step 3: Date & Time */}
                    <div className={`mb-10 transition-opacity duration-300 ${service ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                        <label className="block text-lg font-bold text-gray-900 mb-4">3. Select Date & Time</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input 
                                    type="date" 
                                    value={date} 
                                    onChange={(e) => setDate(e.target.value)} 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all outline-none" 
                                />
                            </div>
                            <div className={`grid grid-cols-3 gap-2 ${date ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                                {availableTimeSlots.map(slot => {
                                    const isBooked = bookedTimes.includes(slot);
                                    return (
                                        <button 
                                            key={slot}
                                            onClick={() => !isBooked && setTime(slot)}
                                            disabled={isBooked}
                                            className={`py-2 px-2 rounded-lg text-xs font-bold transition-all border ${
                                                isBooked ? 'bg-gray-100 border-gray-100 text-gray-400 cursor-not-allowed line-through' :
                                                time === slot ? 'bg-gray-200 border-gray-900 text-black' : 
                                                'bg-white border-gray-200 text-gray-600 hover:border-gray-900'
                                            }`}
                                        >
                                            {slot}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-6 border-t border-gray-100">
                        <button 
                            onClick={handleBooking} 
                            disabled={!selectedProfId || !service || !date || !time}
                            className="w-full bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-black font-bold py-5 rounded-2xl text-lg shadow-lg shadow-[#9F5AD5]/30 hover:shadow-xl hover:shadow-[#9F5AD5]/40 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            Confirm Appointment
                        </button>
                    </div>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                    <div className="text-center py-8 bg-green-50 border border-green-200 rounded-[2rem] max-w-4xl mx-auto animate-pulse">
                        <div className="text-4xl mb-2">🎉</div>
                        <h3 className="text-2xl font-bold text-green-700">Booking Confirmed!</h3>
                        <p className="text-green-600 mt-2">Redirecting to your dashboard...</p>
                    </div>
                )}
                {status === 'error' && (
                    <div className="text-center py-8 bg-red-50 border border-red-200 rounded-[2rem] max-w-4xl mx-auto">
                        <div className="text-4xl mb-2">❌</div>
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
