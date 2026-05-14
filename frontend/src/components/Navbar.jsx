import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch(e) {}
            } else {
                setUser(null);
            }
        };
        
        checkAuth();
        window.addEventListener('storage', checkAuth);
        
        return () => {
            window.removeEventListener('storage', checkAuth);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
        // Force reload to update other components if needed
        window.location.reload();
    };
    return (
        <nav className="fixed w-full z-50 glass border-b border-white/40 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
                        <img src="/logo.png" alt="Beauty Connect Logo" className="h-12 w-auto object-contain" />
                        <span className="text-3xl font-extrabold tracking-tight text-gray-900 font-serif italic">
                            Beauty<span className="text-[#F880A8]">Connect</span>
                        </span>
                    </Link>
                    {/* Links */}
                    <div className="hidden md:flex space-x-10">
                        {user && (user.role === 'beautician' || user.role === 'salon_owner') ? (
                            <>
                                <Link to={`/dashboard/${user.role === 'salon_owner' ? 'salon' : 'beautician'}`} className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">Dashboard</Link>
                                <Link to={`/dashboard/${user.role === 'salon_owner' ? 'salon' : 'beautician'}`} className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">Appointments</Link>
                                <Link to={`/dashboard/${user.role === 'salon_owner' ? 'salon' : 'beautician'}`} className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">Services</Link>
                            </>
                        ) : user && user.role === 'client' ? (
                            <>
                                <Link to="/salons" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">Explore Salons</Link>
                                <Link to="/services" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">Services</Link>
                                <Link to="/dashboard/client/history" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">My Bookings</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/salons" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">Salons</Link>
                                <Link to="/services" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">Services</Link>
                                <Link to="/professionals" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">For Professionals</Link>
                                <Link to="/testimonials" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors">Testimonials</Link>
                            </>
                        )}
                    </div>
                    {/* CTA */}
                    <div className="flex items-center space-x-6">
                        {user ? (
                            <>
                                <Link to={`/dashboard/${user.role === 'salon_owner' ? 'salon' : user.role}`} className="text-gray-700 font-medium hover:text-[--color-brand-purple-dark] transition-colors">
                                    Hi, <span className="font-bold text-black">{user.name.split(' ')[0]}</span>
                                </Link>
                                <button onClick={handleLogout} className="bg-[--color-brand-pink-dark] text-black px-6 py-2 rounded-full font-bold transition-all shadow-md hover:bg-[#d499b5] transform hover:-translate-y-0.5">
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-black font-bold hover:text-[#7D3CA6] transition-colors">Log In</Link>
                                <Link to="/register" className="bg-[--color-brand-purple-dark] text-black px-7 py-2.5 rounded-full font-bold transition-all shadow-md hover:bg-[#7D3CA6] transform hover:-translate-y-0.5">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
