import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        
        // Simulate an API call to a forgot password endpoint
        setTimeout(() => {
            if (email.includes('@')) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#fafafa] overflow-hidden selection:bg-[--color-brand-purple] selection:text-white flex items-center justify-center relative">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[--color-brand-pink] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[--color-brand-purple] mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#e8dbf0] mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 w-full max-w-lg p-8 sm:p-12 glass rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-6">
                        <span className="text-3xl font-extrabold tracking-tight text-gray-900 font-serif italic">
                            Beauty<span className="text-[#F880A8]">Connect</span>
                        </span>
                    </Link>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h2>
                    <p className="text-gray-500 font-light">Enter your email and we'll send you a link</p>
                </div>

                {status === 'success' ? (
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                            ✓
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Check your email</h3>
                        <p className="text-gray-500 mb-8">We've sent a password reset link to <br/> <span className="font-semibold text-gray-800">{email}</span></p>
                        <Link to="/login" className="w-full inline-block bg-[--color-brand-purple] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-[--color-brand-purple]/20 transition-all duration-300">
                            Return to Login
                        </Link>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {status === 'error' && (
                            <div className="p-3 bg-red-100 text-red-700 rounded-xl text-sm text-center">
                                Please enter a valid email address.
                            </div>
                        )}
                        
                        <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] focus:border-transparent outline-none transition-all duration-300"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full bg-[--color-brand-purple] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-[--color-brand-purple]/20 transition-all duration-300 transform hover:-translate-y-0.5 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {status === 'loading' ? 'Sending Link...' : 'Send Reset Link'}
                        </button>
                    </form>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200/50 text-center">
                    <Link to="/login" className="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center justify-center">
                        <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
