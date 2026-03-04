import React from 'react';
import { Link } from 'react-router-dom';

const LoginSalonOwner = () => {
    return (
        <div className="min-h-screen bg-[#fafafa] overflow-hidden selection:bg-gray-900 selection:text-white flex items-center justify-center relative">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gray-200 mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-gray-300 mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 w-full max-w-lg p-8 sm:p-12 glass rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-6">
                        <span className="text-3xl font-extrabold tracking-tight text-gray-900 font-serif italic">
                            Beauty<span className="text-[#F880A8]">Connect</span>
                        </span>
                    </Link>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-gray-900/10 text-gray-900 text-xs font-bold uppercase tracking-wider mb-4">
                        Salon Management
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Business Portal</h2>
                    <p className="text-gray-500 font-light">Manage your salon, staff, and operations</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-4">
                        <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Business Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="manager@salon.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-300"
                            />
                        </div>

                        <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-gray-900 h-4 w-4 rounded border-gray-300" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <Link to="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Sign In to Dashboard
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        List your salon?{' '}
                        <Link to="/register/salon" className="font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                            Start here
                        </Link>
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-200/50">
                        <Link to="/login" className="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center justify-center">
                            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Not a salon owner?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSalonOwner;
