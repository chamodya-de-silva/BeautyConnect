import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const ClientHistory = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                                    <button onClick={() => navigate('/booking')} className="bg-[#f4eaf9] text-[#9F5AD5] px-5 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-[#9F5AD5] hover:text-white hover:shadow-md transition-all">Book Again</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClientHistory;
