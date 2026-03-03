import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DiscoverServices = () => {
    const services = [
        { title: 'Bridal Makeup', description: 'Transform your special day with premium bridal makeup packages.', icon: '💄' },
        { title: 'Hair Styling', description: 'Modern cuts, colors, and styling from top professionals.', icon: '💇‍♀️' },
        { title: 'Nail Art', description: 'Exquisite nail designs and spa manicures.', icon: '💅' },
        { title: 'Skincare', description: 'Rejuvenating facials and advanced skincare treatments.', icon: '✨' },
        { title: 'Spa & Massage', description: 'Relaxing treatments to rejuvenate your body and mind.', icon: '🌿' },
        { title: 'Men\'s Grooming', description: 'Premium haircuts and beard styling for men.', icon: '✂️' },
    ];

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
                        Discover <span className="text-[--color-brand-purple-dark]">Services</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Explore a wide range of beauty and wellness services from the best professionals in Sri Lanka.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed mb-6">{service.description}</p>
                            <button className="text-[#9F5AD5] font-bold hover:underline">Explore More →</button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DiscoverServices;
