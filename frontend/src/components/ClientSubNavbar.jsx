import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ClientSubNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        { name: 'Overview', path: '/dashboard/client' },
        { name: 'Book Appointment', path: '/booking' },
        { name: 'Find Services', path: '/services' },
        { name: 'Find Salons', path: '/salons' },
        { name: 'Favorites', path: '/dashboard/client/favorites' },
        { name: 'History', path: '/dashboard/client/history' },
        { name: 'Rewards', path: '/dashboard/client/rewards' },
        { name: 'Settings', path: '/dashboard/client/settings' },
    ];

    return (
        <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200 mb-8">
            <div className="flex overflow-x-auto space-x-6 hide-scrollbar">
                {tabs.map(tab => {
                    const isActive = location.pathname === tab.path || (tab.path === '/booking' && location.pathname.startsWith('/booking')) || (tab.path === '/services' && location.pathname.startsWith('/services')) || (tab.path === '/salons' && location.pathname.startsWith('/salons'));
                    return (
                        <button 
                            key={tab.name}
                            onClick={() => navigate(tab.path)} 
                            className={`pb-2 whitespace-nowrap transition-colors ${isActive ? 'text-[--color-brand-purple-dark] font-bold border-b-2 border-[--color-brand-purple]' : 'text-gray-600 hover:text-[--color-brand-purple] font-medium'}`}
                        >
                            {tab.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ClientSubNavbar;
