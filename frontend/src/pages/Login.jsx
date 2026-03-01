import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] overflow-hidden selection:bg-[--color-brand-purple] selection:text-white flex items-center justify-center relative">
      {/* Dynamic Background Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[--color-brand-pink] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[--color-brand-purple] mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#e8dbf0] mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Glass Container */}
      <div className="relative z-10 w-full max-w-lg p-8 sm:p-12 glass rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-6">
            <span className="text-3xl font-extrabold tracking-tight text-gray-900 font-serif italic">
              Beauty<span className="text-[--color-brand-purple-dark]">Connect</span>
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500 font-light">Log in to manage your beauty appointments</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
              <input 
                id="email"
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
            
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
              <input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-[--color-brand-purple] focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-[--color-brand-purple] h-4 w-4 rounded border-gray-300" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm font-medium text-[--color-brand-purple-dark] hover:text-[--color-brand-purple] transition-colors">
              Forgot your password?
            </a>
          </div>

          <button 
            type="button" 
            className="w-full bg-[--color-brand-purple] hover:bg-[--color-brand-purple-dark] text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-[--color-brand-purple]/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-[--color-brand-purple-dark] hover:text-[--color-brand-purple] transition-colors">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
