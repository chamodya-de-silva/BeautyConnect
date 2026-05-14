import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from '../components/Toast';
import useToast from '../hooks/useToast';

const Booking = () => {
    const navigate = useNavigate();
    const routerLocation = useLocation();
    
    const [professionals, setProfessionals] = useState([]);
    const [selectedProfId, setSelectedProfId] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [bookedTimes, setBookedTimes] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [confirming, setConfirming] = useState(false);
    const { toasts, showToast, removeToast } = useToast();

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
                            setTime('');
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
            showToast('Please fill out all fields before confirming.', 'warning');
            return;
        }

        setConfirming(true);
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

            const data = await response.json();

            if (response.ok) {
                showToast('🎉 Booking confirmed! Redirecting to dashboard...', 'success');
                setTimeout(() => navigate('/dashboard/client'), 2500);
            } else if (response.status === 409) {
                showToast(data.message || 'This slot was just taken. Please choose another time.', 'warning');
                setCurrentStep(3); // send user back to pick a new time
                setTime('');
            } else {
                showToast(data.message || 'Booking failed. Please try again.', 'error');
            }
        } catch (error) {
            showToast('Network error. Please check your connection.', 'error');
        } finally {
            setConfirming(false);
        }
    };

    const allAvailableServices = [...new Set(professionals.flatMap(p => p.services || []))].sort();
    const filteredProfessionals = service ? professionals.filter(p => p.services && p.services.includes(service)) : [];

    const handleNext = () => {
        if (currentStep === 1 && service) setCurrentStep(2);
        else if (currentStep === 2 && selectedProfId) setCurrentStep(3);
        else if (currentStep === 3 && date && time) setCurrentStep(4);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
        else navigate(-1);
    };

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            <ToastContainer toasts={toasts} removeToast={removeToast} />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-8">
                    <button onClick={handleBack} className="text-gray-500 hover:text-[--color-brand-purple] font-medium transition-colors flex items-center gap-2">
                        <span>←</span> Back
                    </button>
                </div>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
                        Book an <span className="text-[--color-brand-purple-dark]">Appointment</span>
                    </h1>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 mb-16 max-w-3xl mx-auto relative z-10 min-h-[500px] flex flex-col">
                    
                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-10 relative">
                        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-100 -z-10"></div>
                        {[1, 2, 3, 4].map(step => (
                            <div key={step} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 ${currentStep >= step ? 'bg-[--color-brand-purple] text-black border-[--color-brand-purple]' : 'bg-white text-gray-400 border-gray-200'}`}>
                                {step}
                            </div>
                        ))}
                    </div>

                    <div className="flex-1">
                        {/* Step 1: Select Service */}
                        {currentStep === 1 && (
                            <div className="animate-fade-in">
                                <label className="block text-xl font-bold text-gray-900 mb-6">What service do you need?</label>
                                <select 
                                    value={service} 
                                    onChange={(e) => {
                                        setService(e.target.value);
                                        setSelectedProfId('');
                                    }} 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all outline-none text-lg mb-6"
                                >
                                    <option value="">Select a service...</option>
                                    {allAvailableServices.map(svc => (
                                        <option key={svc} value={svc}>{svc}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Step 2: Select Professional */}
                        {currentStep === 2 && (
                            <div className="animate-fade-in">
                                <label className="block text-xl font-bold text-gray-900 mb-6">Choose Salon / Beautician</label>
                                {filteredProfessionals.length === 0 ? (
                                    <p className="text-red-500 font-medium">No professionals found offering this service.</p>
                                ) : (
                                    <div className="grid grid-cols-1 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        {filteredProfessionals.map(prof => (
                                            <button 
                                                key={prof._id}
                                                onClick={() => setSelectedProfId(prof._id)}
                                                className={`flex items-center p-4 rounded-2xl border transition-all text-left ${selectedProfId === prof._id ? 'bg-[--color-brand-purple]/10 border-[--color-brand-purple] shadow-sm ring-1 ring-[--color-brand-purple]' : 'bg-white border-gray-200 hover:border-[--color-brand-purple] hover:shadow-sm'}`}
                                            >
                                                <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 mr-4 flex-shrink-0">
                                                    <img src={prof.profilePicture || 'https://images.unsplash.com/photo-1522337360788-8b13fee7a3af'} alt={prof.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className={`text-lg font-bold ${selectedProfId === prof._id ? 'text-[--color-brand-purple-dark]' : 'text-gray-900'}`}>{prof.name}</h4>
                                                    <p className="text-sm text-gray-500">⭐ {prof.rating || '4.9'} | {prof.address || 'Location N/A'}</p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Step 3: Date & Time */}
                        {currentStep === 3 && (
                            <div className="animate-fade-in">
                                <label className="block text-xl font-bold text-gray-900 mb-6">Select Date & Time</label>
                                <div className="space-y-6">
                                    <div>
                                        <input 
                                            type="date" 
                                            value={date} 
                                            onChange={(e) => setDate(e.target.value)} 
                                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all outline-none font-medium" 
                                        />
                                    </div>
                                    <div className={`grid grid-cols-3 gap-3 ${date ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                                        {availableTimeSlots.map(slot => {
                                            const isBooked = bookedTimes.includes(slot);
                                            return (
                                                <button 
                                                    key={slot}
                                                    onClick={() => !isBooked && setTime(slot)}
                                                    disabled={isBooked}
                                                    className={`py-3 px-2 rounded-xl text-sm font-bold transition-all border ${
                                                        isBooked ? 'bg-gray-100 border-gray-100 text-gray-400 cursor-not-allowed line-through' :
                                                        time === slot ? 'bg-black border-black text-white' : 
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
                        )}

                        {/* Step 4: Payment Summary */}
                        {currentStep === 4 && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Summary</h3>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8 space-y-4">
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                        <span className="text-gray-600 font-medium">Service</span>
                                        <span className="font-bold text-gray-900">{service}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                        <span className="text-gray-600 font-medium">Professional</span>
                                        <span className="font-bold text-gray-900">{getSelectedProfessional()?.name}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                        <span className="text-gray-600 font-medium">Date & Time</span>
                                        <span className="font-bold text-gray-900">{new Date(date).toLocaleDateString()} at {time}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-gray-900 font-bold text-lg">Total</span>
                                        <span className="font-bold text-[--color-brand-purple-dark] text-2xl">Rs. 8,500</span>
                                    </div>
                                </div>
                                <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm mb-6 flex items-start">
                                    <span className="mr-2 mt-0.5">ℹ️</span>
                                    Payment will be collected at the salon. Please confirm your booking to secure this slot.
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-8 border-t border-gray-100 mt-auto flex gap-4">
                        {currentStep < 4 ? (
                            <button 
                                onClick={handleNext}
                                disabled={(currentStep === 1 && !service) || (currentStep === 2 && !selectedProfId) || (currentStep === 3 && (!date || !time))}
                                className="flex-1 bg-black text-white font-bold py-4 rounded-2xl text-lg hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continue
                            </button>
                        ) : (
                            <button 
                                onClick={handleBooking}
                                disabled={confirming}
                                className="flex-1 bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-black font-bold py-4 rounded-2xl text-lg shadow-lg shadow-[#9F5AD5]/30 hover:shadow-xl hover:shadow-[#9F5AD5]/40 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                            >
                                {confirming ? (
                                    <><div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div> Confirming...</>
                                ) : 'Confirm Booking'}
                            </button>
                        )}
                    </div>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                        <div className="text-center p-10 bg-white rounded-[2rem] max-w-md w-full animate-bounce-in shadow-2xl">
                            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                            <p className="text-gray-500 mb-6 text-lg">We look forward to seeing you.</p>
                            <div className="w-8 h-8 border-4 border-[--color-brand-purple] border-t-transparent rounded-full animate-spin mx-auto"></div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Booking;
