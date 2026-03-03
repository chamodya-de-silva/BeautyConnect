import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Booking = () => {
    const categories = ['Makeup', 'Hair', 'Nails', 'Skincare', 'Spa', 'Bridal'];
    const locations = ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Jaffna'];

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
                        Book an <span className="text-[--color-brand-purple-dark]">Appointment</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Find and book the best beauty professionals near you in seconds.
                    </p>
                </div>

                {/* Search Bar / Filters */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 mb-16 max-w-5xl mx-auto -mt-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Service Type</label>
                            <select className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all">
                                <option>What are you looking for?</option>
                                {categories.map(cat => <option key={cat}>{cat}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Location</label>
                            <select className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[--color-brand-purple] transition-all">
                                <option>Where in Sri Lanka?</option>
                                {locations.map(loc => <option key={loc}>{loc}</option>)}
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button className="w-full bg-white border-2 border-[#9F5AD5] text-[#9F5AD5] font-bold py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-[#9F5AD5]/20 transform hover:-translate-y-0.5">
                                Search Professionals
                            </button>
                        </div>
                    </div>
                </div>

                {/* Placeholder for results */}
                <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-[3rem]">
                    <div className="text-6xl mb-6">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-400">Select a category to see available professionals</h3>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Booking;
