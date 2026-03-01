import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] overflow-hidden selection:bg-[--color-brand-purple] selection:text-white">
      {/* Dynamic Background Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[--color-brand-pink] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[--color-brand-purple] mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#e8dbf0] mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass border-b border-white/40 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img src="/logo.png" alt="Beauty Connect Logo" className="h-12 w-auto object-contain" />
              <span className="text-3xl font-extrabold tracking-tight text-gray-900 font-serif italic">
                Beauty<span className="text-[--color-brand-purple-dark]">Connect</span>
              </span>
            </div>
            {/* Links */}
            <div className="hidden md:flex space-x-10">
              <a href="#services" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">Discover Services</a>
              <a href="#professionals" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">For Professionals</a>
              <a href="#reviews" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">Testimonials</a>
            </div>
            {/* CTA */}
            <div className="flex items-center space-x-6">
              <Link to="/login" className="text-gray-700 font-medium hover:text-gray-900 transition-colors">Log In</Link>
              <Link to="/register" className="bg-gray-900 hover:bg-gray-800 text-white px-7 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-24 lg:pt-48 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0 relative">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[--color-brand-purple] bg-white/50 backdrop-blur-sm text-[--color-brand-purple-dark] font-medium text-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[--color-brand-purple-dark] mr-2 animate-pulse"></span>
                Sri Lanka's #1 Beauty Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
                Your Beauty.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-brand-purple-dark] to-[#e88aa8]">Reimagined.</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Connect with Sri Lanka's top freelance beauticians and salons. Book effortlessly, read verified reviews, and experience premium wellness.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <Link to="/search" className="bg-[--color-brand-purple] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[--color-brand-purple-dark] transition-all shadow-lg hover:shadow-2xl hover:shadow-[--color-brand-purple]/30 transform hover:-translate-y-1 flex items-center justify-center">
                  Book an Appointment
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
                <Link to="/pro/register" className="glass text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-[--color-brand-purple] hover:bg-white transition-all shadow-sm flex items-center justify-center">
                  Join as Professional
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500 font-medium">
                <div className="flex flex-col items-center lg:items-start"><span className="text-3xl font-bold text-gray-900 font-serif">200+</span> Professionals</div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col items-center lg:items-start"><span className="text-3xl font-bold text-gray-900 font-serif">5k+</span> Happy Clients</div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col items-center lg:items-start"><span className="text-3xl font-bold text-gray-900 font-serif">4.9/5</span> Average Rating</div>
              </div>
            </div>

            {/* Right Imagery */}
            <div className="lg:col-span-6 relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[--color-brand-pink] rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                  alt="Professional Makeup Artist"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">"Absolutely flawless makeup!"</p>
                    <p className="text-gray-600 text-xs mt-0.5">⭐⭐⭐⭐⭐ Ama P.</p>
                  </div>
                </div>
              </div>

              {/* Smaller floating image */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white hidden md:block z-20 animate-bounce" style={{ animationDuration: '6s' }}>
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Beauty Products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Modern Features Section Grid */}
      <div className="py-24 relative z-10 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-[--color-brand-purple-dark] font-bold tracking-wide uppercase text-sm mb-3">Why Beauty Connect?</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 font-serif">The seamless way to manage beauty.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group rounded-[2rem] bg-gray-50 border border-gray-100 p-8 hover:bg-[--color-brand-purple] hover:text-white transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[--color-brand-purple-dark] group-hover:text-[--color-brand-purple]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Smart Booking</h4>
              <p className="text-gray-500 group-hover:text-white/90 leading-relaxed font-light">Eliminate manual calls. See real-time availability and confirm your appointments instantly to avoid double bookings.</p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-[2rem] bg-gray-50 border border-gray-100 p-8 hover:bg-[--color-brand-pink] hover:text-gray-900 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[--color-brand-pink-dark] group-hover:text-[--color-brand-pink-dark]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Verified Portfolios</h4>
              <p className="text-gray-500 group-hover:text-gray-800 leading-relaxed font-light">Check clear pricing, services, authentic image galleries and honest reviews before you decide to book your session.</p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-[2rem] bg-gray-50 border border-gray-100 p-8 hover:bg-gray-900 hover:text-white transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-gray-800">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-3">Secure Payments</h4>
              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed font-light">Enjoy completely secure transactions with integrated local reliable payment gateways for ultimate peace of mind.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Premium Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
        {/* Decorative subtle blurs in footer */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[--color-brand-purple] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[--color-brand-pink] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Column 1: Brand & About */}
            <div className="lg:col-span-1">
              <span className="text-3xl font-extrabold tracking-tight text-white font-serif italic mb-6 block">
                Beauty<span className="text-[--color-brand-purple]">Connect</span>
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Elevating Sri Lanka's beauty industry. We connect clients with top-tier freelance beauticians and salons for seamless, reliable, and premium grooming experiences.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons (Placeholders) */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[--color-brand-purple] transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[--color-brand-pink] hover:text-gray-900 transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-3 text-sm font-light text-gray-400">
                <li><a href="#services" className="hover:text-[--color-brand-pink] transition-colors">Find a Service</a></li>
                <li><a href="/login" className="hover:text-[--color-brand-pink] transition-colors">Log In</a></li>
                <li><a href="/pro/register" className="hover:text-[--color-brand-pink] transition-colors">Join as Professional</a></li>
                <li><a href="#about" className="hover:text-[--color-brand-pink] transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-[--color-brand-pink] transition-colors">Contact Support</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-white font-bold mb-6 font-serif">Top Services</h4>
              <ul className="space-y-3 text-sm font-light text-gray-400">
                <li><a href="#" className="hover:text-[--color-brand-purple] transition-colors">Bridal Makeup</a></li>
                <li><a href="#" className="hover:text-[--color-brand-purple] transition-colors">Hair Styling</a></li>
                <li><a href="#" className="hover:text-[--color-brand-purple] transition-colors">Nail Art</a></li>
                <li><a href="#" className="hover:text-[--color-brand-purple] transition-colors">Spa & Massage</a></li>
                <li><a href="#" className="hover:text-[--color-brand-purple] transition-colors">Skincare Treatments</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-6 font-serif">Stay Connected</h4>
              <p className="text-gray-400 text-sm mb-4 font-light">
                Subscribe to get the latest beauty trends and exclusive offers in Sri Lanka.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-gray-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-[--color-brand-purple] transition-colors text-sm"
                />
                <button
                  type="button"
                  className="bg-[--color-brand-purple] hover:bg-[--color-brand-purple-dark] text-white font-medium py-2.5 rounded-lg transition-colors text-sm w-full"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
            <p>&copy; {new Date().getFullYear()} Beauty Connect. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div className="p-20 text-center text-2xl font-bold text-gray-900">Login Page Coming Soon</div>} />
        <Route path="/register" element={<div className="p-20 text-center text-2xl font-bold text-gray-900">Register Page Coming Soon</div>} />
      </Routes>
    </Router>
  );
}

export default App;
