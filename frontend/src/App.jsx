import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-[--color-brand-purple] to-[--color-brand-pink] bg-clip-text text-transparent" style={{ fontFamily: 'cursive' }}>
                Beauty Connect
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">Find Services</a>
              <a href="#professionals" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">For Professionals</a>
              <a href="#about" className="text-gray-700 hover:text-[--color-brand-purple-dark] px-3 py-2 font-medium transition-colors">About Us</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 font-medium hover:text-[--color-brand-purple-dark] transition-colors">Log in</Link>
              <Link to="/register" className="bg-[--color-brand-purple] hover:bg-[--color-brand-purple-dark] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[--color-brand-pink] mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[--color-brand-purple] mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Discover Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-brand-purple-dark] to-[--color-brand-pink-dark]">Perfect Beauty Match</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto mb-10">
            Book top-rated freelance beauticians and salons in Sri Lanka. Manage your appointments, browse portfolios, and leave reviews all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/search" className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Find a Beautician
            </Link>
            <Link to="/pro/register" className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-[--color-brand-purple] transition-all shadow-sm hover:shadow-md">
              Join as Professional
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why choose Beauty Connect?</h2>
            <p className="mt-4 text-lg text-gray-600">The premier digital ecosystem for Sri Lanka's beauty industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Smart Booking',
                desc: 'Real-time calendar scheduling prevents double bookings and simplifies your planning.',
                color: 'bg-[--color-brand-purple]'
              },
              {
                title: 'Verified Portfolios',
                desc: 'Browse authentic work history, prices, and reviews before you book a service.',
                color: 'bg-[--color-brand-pink]'
              },
              {
                title: 'Secure Payments',
                desc: 'Integrated local payment gateways guarantee seamless and protective transactions.',
                color: 'bg-indigo-200'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-14 h-14 ${feature.color} rounded-xl mb-6 flex items-center justify-center`}>
                  <svg className="w-7 h-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div className="p-20 text-center text-2xl font-bold">Login Page Coming Soon</div>} />
        <Route path="/register" element={<div className="p-20 text-center text-2xl font-bold">Register Page Coming Soon</div>} />
      </Routes>
    </Router>
  );
}

export default App;
