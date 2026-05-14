import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import ClientSubNavbar from '../../components/ClientSubNavbar';

const ClientRewards = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />
            <ClientSubNavbar />
            <div className="pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                    <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-900 transition-colors">
                        ← Back
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900 font-serif">Beauty Rewards</h1>
                </div>

                <div className="bg-gradient-to-br from-[--color-brand-purple] to-[#e88aa8] p-10 rounded-[3rem] text-black shadow-xl relative overflow-hidden mb-12">
                    <div className="absolute top-[-20%] right-[-10%] w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Current Balance</h2>
                            <div className="flex items-baseline justify-center sm:justify-start gap-2">
                                <span className="text-6xl font-extrabold font-serif">450</span>
                                <span className="text-xl text-black/80">Points</span>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex justify-between text-sm mb-2 font-medium">
                                <span>Gold Tier</span>
                                <span>500 Points</span>
                            </div>
                            <div className="w-full bg-black/20 rounded-full h-3 mb-2">
                                <div className="bg-white h-3 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                            <p className="text-xs text-black/80">50 more points to unlock Gold Tier benefits!</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Rewards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                        <div>
                            <h4 className="font-bold text-lg text-gray-900">10% Off Next Booking</h4>
                            <p className="text-sm text-gray-500">Any service over LKR 5000</p>
                        </div>
                        <button className="bg-gradient-to-r from-[#9F5AD5] to-[#F880A8] text-black px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                            Redeem (100 Pts)
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between opacity-50 grayscale">
                        <div>
                            <h4 className="font-bold text-lg text-gray-900">Free Deluxe Manicure</h4>
                            <p className="text-sm text-gray-500">At participating salons</p>
                        </div>
                        <button className="bg-gray-200 text-gray-500 px-6 py-3 rounded-xl font-bold cursor-not-allowed">
                            Need 500 Pts
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClientRewards;
