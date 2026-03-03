import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ForProfessionals = () => {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 font-serif leading-[1.1]">
                            Grow Your <span className="text-[--color-brand-purple-dark]">Beauty Business</span> with Us.
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
                            Join Sri Lanka's fastest-growing beauty community. Manage appointments, showcase your work, and connect with more clients effortlessly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link to="/register" className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all shadow-lg text-center">
                                Get Started for Free
                            </Link>
                            <button className="glass border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all text-center">
                                View Pricing
                            </button>
                        </div>
                    </div>
                    <div className="mt-16 lg:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                            alt="Professional at work"
                            className="rounded-[3rem] shadow-2xl"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-[--color-brand-purple] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl">📅</div>
                        <h3 className="text-2xl font-bold mb-4">Easy Scheduling</h3>
                        <p className="text-gray-600 font-light">Take bookings 24/7 without answering a single call. Let our system handle your calendar.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-20 h-20 bg-[--color-brand-pink] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl">📈</div>
                        <h3 className="text-2xl font-bold mb-4">Business Insights</h3>
                        <p className="text-gray-600 font-light">Track your earnings, popular services, and client feedback with our intuitive dashboard.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl">💰</div>
                        <h3 className="text-2xl font-bold mb-4">Secure Payments</h3>
                        <p className="text-gray-600 font-light">Get paid directly and securely. No more chasing clients for payments.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ForProfessionals;
