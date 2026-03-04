import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginClient from './pages/auth/LoginClient';
import LoginBeautician from './pages/auth/LoginBeautician';
import LoginSalonOwner from './pages/auth/LoginSalonOwner';
import RegisterClient from './pages/auth/RegisterClient';
import RegisterBeautician from './pages/auth/RegisterBeautician';
import RegisterSalonOwner from './pages/auth/RegisterSalonOwner';
import DiscoverServices from './pages/DiscoverServices';
import ForProfessionals from './pages/ForProfessionals';
import Testimonials from './pages/Testimonials';
import Booking from './pages/Booking';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] overflow-hidden selection:bg-[--color-brand-purple] selection:text-white">
      {/* Dynamic Background Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[--color-brand-pink] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[--color-brand-purple] mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#e8dbf0] mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

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
                <Link to="/booking" className="bg-white text-[#9F5AD5] border-2 border-[#9F5AD5] px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center animate-pulse-purple">
                  Book an Appointment
                  <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
                <Link to="/professionals" className="glass text-[#9F5AD5] border border-[#9F5AD5] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-sm flex items-center justify-center">
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

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/client" element={<LoginClient />} />
        <Route path="/login/beautician" element={<LoginBeautician />} />
        <Route path="/login/salon" element={<LoginSalonOwner />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/client" element={<RegisterClient />} />
        <Route path="/register/beautician" element={<RegisterBeautician />} />
        <Route path="/register/salon" element={<RegisterSalonOwner />} />
        <Route path="/services" element={<DiscoverServices />} />
        <Route path="/professionals" element={<ForProfessionals />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}


export default App;
