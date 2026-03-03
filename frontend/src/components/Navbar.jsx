import { Link } from 'react-router-dom';

const Navbar = () => {
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
                        <Link to="/services" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">Discover Services</Link>
                        <Link to="/professionals" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">For Professionals</Link>
                        <Link to="/testimonials" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">Testimonials</Link>
                    </div>
                    {/* CTA */}
                    <div className="flex items-center space-x-6">
                        <Link to="/login" className="text-[#9F5AD5] font-bold hover:text-[--color-brand-purple-dark] transition-colors">Log In</Link>
                        <Link to="/register" className="bg-white border border-[#9F5AD5] text-[#9F5AD5] px-7 py-2.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
