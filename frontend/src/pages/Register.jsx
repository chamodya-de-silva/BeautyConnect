import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen bg-[#fafafa] overflow-hidden selection:bg-[--color-brand-pink] selection:text-white flex items-center justify-center relative py-12">
            {/* Dynamic Background Blurs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[--color-brand-purple] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
                <div className="absolute top-[20%] left-[-10%] w-[40%] h-[60%] rounded-full bg-[--color-brand-pink] mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] right-[20%] w-[60%] h-[50%] rounded-full bg-[#e8dbf0] mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main Glass Container */}
            <div className="relative z-10 w-full max-w-xl p-8 sm:p-12 glass rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl m-4">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-6 hover:scale-105 transition-transform duration-300">
                        <span className="text-3xl font-extrabold tracking-tight text-gray-900 font-serif italic drop-shadow-sm">
                            Beauty<span className="text-[#F880A8]">Connect</span>
                        </span>
                    </Link>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Create an Account</h2>
                    <p className="text-gray-500 font-light text-lg">Join us and discover your beauty journey</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Jane"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-[--color-brand-pink] focus:border-transparent outline-none transition-all duration-300 placeholder:text-gray-400"
                            />
                        </div>

                        <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Doe"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-[--color-brand-pink] focus:border-transparent outline-none transition-all duration-300 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="relative group">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-[--color-brand-pink] focus:border-transparent outline-none transition-all duration-300 placeholder:text-gray-400"
                        />
                    </div>

                    <div className="relative group">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-[--color-brand-pink] focus:border-transparent outline-none transition-all duration-300 placeholder:text-gray-400"
                        />
                        <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
                    </div>

                    <div className="relative group">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 focus:bg-white focus:ring-2 focus:ring-[--color-brand-pink] focus:border-transparent outline-none transition-all duration-300 placeholder:text-gray-400"
                        />
                    </div>

                    <div className="flex items-start mt-2">
                        <input
                            id="terms"
                            type="checkbox"
                            className="form-checkbox text-[--color-brand-pink-dark] mt-1 h-4 w-4 rounded border-gray-300 cursor-pointer"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600 block leading-relaxed cursor-pointer">
                            I agree to the <a href="#" className="font-semibold text-[#9F5AD5] hover:text-[#8b46c2] transition-colors">Terms of Service</a> and <a href="#" className="font-semibold text-[#9F5AD5] hover:text-[#8b46c2] transition-colors">Privacy Policy</a>
                        </label>
                    </div>

                    <button
                        type="button"
                        className="w-full mt-6 bg-white border-2 border-[#9F5AD5] text-[#9F5AD5] py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-[#9F5AD5]/20 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200/50 text-center">
                    <p className="text-sm text-gray-600 font-medium">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-[#9F5AD5] hover:text-[#8b46c2] transition-colors hover:underline underline-offset-4 pointer-events-auto">
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
