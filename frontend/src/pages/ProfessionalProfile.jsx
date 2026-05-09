import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProfessionalProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [professional, setProfessional] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chatModalOpen, setChatModalOpen] = useState(false);
    const [messageInput, setMessageInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        const fetchProfessional = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/professionals/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    
                    // Enrich with mock gallery and reviews if not present
                    if (!data.gallery) {
                        data.gallery = [
                            'https://images.unsplash.com/photo-1522337360788-8b13fee7a3af?w=500&h=500&fit=crop',
                            'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=500&fit=crop',
                            'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&h=500&fit=crop',
                            'https://images.unsplash.com/photo-1516975080661-46b0a7ea64db?w=500&h=500&fit=crop',
                            'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=500&fit=crop',
                            'https://images.unsplash.com/photo-1521590832168-70fb853e5bc8?w=500&h=500&fit=crop'
                        ];
                    }
                    if (!data.feedbacks) {
                        data.feedbacks = [
                            { user: 'Amanda Silva', rating: 5, comment: 'Absolutely amazing service! Highly recommend.', date: '2023-10-15' },
                            { user: 'Nishanthi Perera', rating: 4, comment: 'Great experience, very professional staff.', date: '2023-09-28' },
                            { user: 'Sarah Fernando', rating: 5, comment: 'Loved the results. Will definitely come back.', date: '2023-11-02' }
                        ];
                    }
                    
                    setProfessional(data);
                }
            } catch (err) {
                console.error("Error fetching professional details", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfessional();
    }, [id]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageInput.trim()) return;
        
        // Add user message to history
        setChatHistory([...chatHistory, { text: messageInput, sender: 'user', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
        setMessageInput('');
        
        // Simulate auto-reply from professional
        setTimeout(() => {
            setChatHistory(prev => [...prev, { 
                text: "Thanks for reaching out! I'll get back to you as soon as I'm free.", 
                sender: 'professional', 
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
            }]);
        }, 1000);
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-[#fafafa]"><div className="animate-pulse text-2xl font-bold text-[--color-brand-purple]">Loading profile...</div></div>;
    }

    if (!professional) {
        return <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">Professional not found.</div>;
    }

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-6">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-[--color-brand-purple] font-medium transition-colors flex items-center gap-2">
                        <span>←</span> Back
                    </button>
                </div>

                {/* Profile Header */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                        <img src={professional.profilePicture || 'https://images.unsplash.com/photo-1522337360788-8b13fee7a3af'} alt={professional.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider mb-3">
                            {professional.role === 'salon_owner' ? 'Salon' : 'Beautician'}
                        </div>
                        <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-2">{professional.name}</h1>
                        <p className="text-gray-500 text-lg mb-4">📍 {professional.address || 'Location unavailable'}</p>
                        
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                            <span className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-xl font-bold border border-yellow-200">
                                ⭐ {professional.rating || '4.9'} ({professional.reviews || '0'} Reviews)
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <button onClick={() => navigate(`/booking?salon=${encodeURIComponent(professional.name)}`)} className="bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg">
                                Book Appointment
                            </button>
                            <button onClick={() => setChatModalOpen(true)} className="bg-white border-2 border-[--color-brand-purple] text-[--color-brand-purple-dark] px-8 py-3 rounded-xl font-bold shadow-sm hover:bg-gray-50 transition-all text-lg flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                                Message
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Details & Services */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Offered Services</h3>
                            <div className="space-y-4">
                                {(professional.services || []).map((svc, idx) => {
                                    // Generate a mock duration based on the service name for demonstration
                                    const mockDurations = {
                                        'Hair Cut': '45 mins',
                                        'Hair Coloring': '120 mins',
                                        'Bridal Makeup': '180 mins',
                                        'Basic Facial': '60 mins',
                                        'Manicure': '45 mins',
                                        'Pedicure': '60 mins',
                                        'Full Body Waxing': '90 mins',
                                        'Massage': '60 mins'
                                    };
                                    // Default to 60 mins if not explicitly mocked
                                    const duration = mockDurations[svc] || (Math.floor(Math.random() * 3 + 1) * 30 + ' mins');
                                    
                                    return (
                                        <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[--color-brand-purple]/30 transition-colors">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900">{svc}</span>
                                                <span className="text-sm text-gray-500 flex items-center mt-1">
                                                    <svg className="w-4 h-4 mr-1 text-[--color-brand-purple]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    {duration}
                                                </span>
                                            </div>
                                            <button onClick={() => navigate(`/booking?salon=${encodeURIComponent(professional.name)}&service=${encodeURIComponent(svc)}`)} className="text-[--color-brand-purple-dark] font-bold text-sm hover:underline">
                                                Book
                                            </button>
                                        </div>
                                    );
                                })}
                                {(!professional.services || professional.services.length === 0) && (
                                    <p className="text-gray-500 text-sm">Services not listed.</p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">About</h3>
                            <p className="text-gray-600 leading-relaxed font-light">
                                Welcome to {professional.name}! We provide top-notch beauty services tailored just for you. Our goal is to make you look and feel your absolute best in a relaxing and welcoming environment.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Gallery & Feedback */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Gallery */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {(professional.gallery || []).map((imgUrl, idx) => (
                                    <div key={idx} className="aspect-square rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer relative">
                                        <img src={imgUrl} alt={`Gallery item ${idx+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feedback */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Feedback</h3>
                            <div className="space-y-6">
                                {(professional.feedbacks || []).map((fb, idx) => (
                                    <div key={idx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-gray-900">{fb.user}</h4>
                                            <span className="text-sm text-gray-500">{new Date(fb.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="text-yellow-400 text-sm mb-2">
                                            {'★'.repeat(fb.rating)}{'☆'.repeat(5-fb.rating)}
                                        </div>
                                        <p className="text-gray-600 font-light">{fb.comment}</p>
                                    </div>
                                ))}
                                {(!professional.feedbacks || professional.feedbacks.length === 0) && (
                                    <p className="text-gray-500 text-sm">No feedback available yet.</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Chat Modal */}
            {chatModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl flex flex-col h-[600px] max-h-[90vh]">
                        
                        {/* Chat Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-[2rem]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <img src={professional.profilePicture || 'https://images.unsplash.com/photo-1522337360788-8b13fee7a3af'} alt={professional.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 leading-tight">{professional.name}</h3>
                                    <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => setChatModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors p-2">
                                ✕
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50 custom-scrollbar">
                            <div className="text-center text-xs text-gray-400 my-4">Today</div>
                            {chatHistory.length === 0 ? (
                                <div className="text-center text-gray-500 mt-10">
                                    Send a message to start chatting with {professional.name}!
                                </div>
                            ) : (
                                chatHistory.map((msg, idx) => (
                                    <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className={`px-5 py-3 max-w-[80%] rounded-2xl ${msg.sender === 'user' ? 'bg-[--color-brand-purple] text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                                            {msg.text}
                                        </div>
                                        <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 border-t border-gray-100 bg-white rounded-b-[2rem]">
                            <form onSubmit={handleSendMessage} className="flex gap-2">
                                <input 
                                    type="text" 
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="Type your message..." 
                                    className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[--color-brand-purple]/50 transition-all"
                                />
                                <button type="submit" disabled={!messageInput.trim()} className="bg-[--color-brand-purple] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[--color-brand-purple-dark] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ProfessionalProfile;
