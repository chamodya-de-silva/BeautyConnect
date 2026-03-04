import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
    const roles = [
        {
            id: 'client',
            title: 'Client',
            description: 'I want to find and book beauty services near me.',
            icon: '👤',
            path: '/register/client',
            color: 'bg-[--color-brand-purple]',
            hoverColor: 'hover:shadow-[--color-brand-purple]/20'
        },
        {
            id: 'beautician',
            title: 'Freelance Beautician',
            description: 'I want to showcase my work and manage my bookings.',
            icon: '✨',
            path: '/register/beautician',
            color: 'bg-[--color-brand-pink]',
            hoverColor: 'hover:shadow-[--color-brand-pink]/20'
        },
        {
            id: 'salon',
            title: 'Salon Owner',
            description: 'I want to list my salon and manage my team and services.',
            icon: '🏛️',
            path: '/register/salon',
            color: 'bg-gray-900',
            hoverColor: 'hover:shadow-gray-900/20'
        }
    ];

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 flex items-center justify-center relative px-4">
                {/* Dynamic Background Blurs */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-[--color-brand-purple] mix-blend-multiply filter blur-[100px] opacity-20"></div>
                    <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-[--color-brand-pink] mix-blend-multiply filter blur-[100px] opacity-20"></div>
                </div>

                <div className="relative z-10 w-full max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-serif">Join Beauty Connect</h1>
                        <p className="text-xl text-gray-600 font-light">Choose how you want to use the platform</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roles.map((role) => (
                            <Link
                                key={role.id}
                                to={role.path}
                                className={`group relative bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${role.hoverColor} flex flex-col items-center text-center`}
                            >
                                <div className={`w-20 h-20 ${role.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                    {role.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[--color-brand-purple-dark] transition-colors">
                                    {role.title}
                                </h3>
                                <p className="text-gray-500 font-light leading-relaxed mb-6">
                                    {role.description}
                                </p>
                                <div className="mt-auto inline-flex items-center text-[--color-brand-purple-dark] font-bold">
                                    Register Now
                                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-600">
                            Already have an account? {' '}
                            <Link to="/login" className="font-bold text-[#9F5AD5] hover:text-[--color-brand-purple-dark] transition-colors underline decoration-2 underline-offset-4">
                                Log in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Register;
