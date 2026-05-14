import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import ClientSubNavbar from '../../components/ClientSubNavbar';

const ClientHistory = () => {
    const [reviewModal, setReviewModal] = useState({ isOpen: false, bookingId: null, rating: 5, feedback: '' });

    const handleReviewClick = (bookingId) => {
        setReviewModal({ isOpen: true, bookingId, rating: 5, feedback: '' });
    };

    const submitReview = () => {
        if (!reviewModal.feedback.trim()) {
            alert('Please provide some feedback.');
            return;
        }
        // Mocking an API call to save the review
        alert('Thank you! Your feedback has been submitted successfully.');
        setReviewModal({ isOpen: false, bookingId: null, rating: 5, feedback: '' });
    };

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            <ClientSubNavbar />
            <div className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-900 transition-colors">
                        ← Back
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900 font-serif">Booking History</h1>
                </div>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h2 className="font-bold text-gray-800">Past Appointments</h2>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                                        <img src={`https://images.unsplash.com/photo-${i === 1 ? '1522337360788-8b13fee7a3af' : i === 2 ? '1560066984-138dadb4c035' : '1595152772835-219674b2a8a6'}?w=100&h=100&fit=crop`} alt="Service" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{i === 1 ? 'Gel Manicure' : i === 2 ? 'Hair Coloring' : 'Facial Treatment'}</h3>
                                        <p className="text-sm text-gray-500">{i === 1 ? 'Luxe Nail Spa' : 'Glow Up Studio'}</p>
                                        <p className="text-xs text-gray-400 mt-1">October 1{i}, 2024</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:items-end gap-3 mt-4 sm:mt-0">
                                    <span className="px-3 py-1 bg-[#eafff0] border border-[#a3e5bb] text-green-700 text-xs font-bold rounded-full">Completed</span>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleReviewClick(i)} className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-all">Rate & Review</button>
                                        <button onClick={() => navigate('/booking')} className="bg-[#f4eaf9] text-[#9F5AD5] px-5 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-[#9F5AD5] hover:text-black hover:shadow-md transition-all">Book Again</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Review Modal */}
            {reviewModal.isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
                    <div className="bg-white p-8 rounded-[2rem] w-full max-w-md shadow-2xl transform scale-100 transition-all">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Rate Your Experience</h3>
                        <p className="text-gray-500 text-sm mb-6">Your feedback helps others find the best beauty services.</p>
                        
                        <div className="space-y-6 mb-8">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3 text-center">How was your service?</label>
                                <div className="flex justify-center gap-2">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <button 
                                            key={star} 
                                            onClick={() => setReviewModal({...reviewModal, rating: star})}
                                            className={`text-4xl transition-transform hover:scale-110 ${reviewModal.rating >= star ? 'text-yellow-400' : 'text-gray-200'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Leave a Review</label>
                                <textarea 
                                    rows="4"
                                    value={reviewModal.feedback}
                                    onChange={e => setReviewModal({...reviewModal, feedback: e.target.value})}
                                    placeholder="Tell us what you loved..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-[--color-brand-purple] outline-none resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button 
                                onClick={() => setReviewModal({ isOpen: false, bookingId: null, rating: 5, feedback: '' })} 
                                className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-400 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={submitReview} 
                                className="flex-1 bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-black py-3 rounded-xl font-bold shadow-lg shadow-[#9F5AD5]/30 hover:shadow-xl hover:shadow-[#9F5AD5]/40 hover:-translate-y-0.5 transition-all"
                            >
                                Submit Review
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default ClientHistory;
