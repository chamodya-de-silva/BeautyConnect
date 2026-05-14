import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try { setUser(JSON.parse(storedUser)); } catch(e) {}
            } else {
                setUser(null);
            }
        };
        checkAuth();
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setMobileOpen(false);
        navigate('/');
        window.location.reload();
    };

    const dashPath = user?.role === 'salon_owner' ? 'salon' : user?.role === 'beautician' ? 'beautician' : 'client';

    const ProfessionalLinks = () => (
        <>
            <Link to={`/dashboard/${dashPath}`} className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            <Link to={`/dashboard/${dashPath}`} className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>Appointments</Link>
            <Link to={`/dashboard/${dashPath}`} className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>Services</Link>
        </>
    );

    const ClientLinks = () => (
        <>
            <Link to="/salons" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>Explore Salons</Link>
            <Link to="/services" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link to="/dashboard/client/history" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>My Bookings</Link>
        </>
    );

    const GuestLinks = () => (
        <>
            <Link to="/salons" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>Salons</Link>
            <Link to="/services" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link to="/professionals" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>For Professionals</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-bold transition-colors" onClick={() => setMobileOpen(false)}>Testimonials</Link>
        </>
    );

    const NavLinks = () => {
        if (user && (user.role === 'beautician' || user.role === 'salon_owner')) return <ProfessionalLinks />;
        if (user && user.role === 'client') return <ClientLinks />;
        return <GuestLinks />;
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

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-10">
                        <NavLinks />
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-6">
                        {user ? (
                            <>
                                <Link to={`/dashboard/${dashPath}`} className="text-gray-700 font-medium hover:text-[--color-brand-purple-dark] transition-colors">
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

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setMobileOpen(prev => !prev)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-gray-100 transition-colors gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-2 shadow-lg">
                    <NavLinks />
                    <div className="border-t border-gray-100 mt-4 pt-4 flex flex-col gap-3">
                        {user ? (
                            <>
                                <span className="text-sm text-gray-500 font-medium">
                                    Signed in as <span className="font-bold text-gray-900">{user.name}</span>
                                </span>
                                <button onClick={handleLogout} className="w-full text-center bg-red-50 text-red-600 border border-red-200 px-6 py-3 rounded-xl font-bold hover:bg-red-100 transition-colors">
                                    🚪 Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setMobileOpen(false)} className="w-full text-center border border-gray-300 text-gray-800 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Log In</Link>
                                <Link to="/register" onClick={() => setMobileOpen(false)} className="w-full text-center bg-[--color-brand-purple-dark] text-black px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#7D3CA6] transition-colors">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

