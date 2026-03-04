import React from 'react';
import { Link } from 'react-router-dom';

const RegisterSalonOwner = () => {
    return (
        <div className="min-h-screen bg-[#fafafa] overflow-hidden selection:bg-gray-900 selection:text-white flex items-center justify-center relative py-12">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gray-200 mix-blend-multiply filter blur-[100px] opacity-20"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gray-300 mix-blend-multiply filter blur-[120px] opacity-20"></div>
            </div>

            <div className="relative z-10 w-full max-w-xl p-8 sm:p-12 glass rounded-[2.5rem] shadow-2xl border border-white/50 backdrop-blur-xl m-4">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-6 transition-transform hover:scale-105">
                        <span className="text-3xl font-extrabold tracking-tight text-gray-900 font-serif italic">
                            Beauty<span className="text-[#F880A8]">Connect</span>
                        </span>
                    </Link>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-gray-900/10 text-gray-900 text-xs font-bold uppercase tracking-wider mb-4">
                        Salon Owner Registration
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Business Account</h2>
                    <p className="text-gray-500 font-light text-center">Manage your salon operations at scale</p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Owner Name</label>
                        <input
                            type="text"
                            placeholder="Owner Name"
                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Salon Name</label>
                        <input
                            type="text"
                            placeholder="Your Salon Name"
                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Business Email</label>
                        <input
                            type="email"
                            placeholder="admin@beautycenter.com"
                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Business Registration Number (Optional)</label>
                        <input
                            type="text"
                            placeholder="BR-XXXX-XXXX"
                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:shadow-gray-900/20 transition-all transform hover:-translate-y-0.5 mt-6"
                    >
                        Register as Salon Owner
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login/salon" className="font-bold text-gray-900 hover:underline">
                            Log in
                        </Link>
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-200/50">
                        <Link to="/register" className="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center justify-center">
                            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back to choice
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterSalonOwner;
