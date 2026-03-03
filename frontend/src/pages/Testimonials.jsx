import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Testimonials = () => {
    const reviews = [
        {
            name: "Ama Perera",
            role: "Bridal Client",
            comment: "Beauty Connect made it so easy to find a makeup artist for my wedding. The portfolio was exactly what I saw on the day. Highly recommended!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
        },
        {
            name: "Kasun Silva",
            role: "Salon Owner",
            comment: "Since joining as a professional, my bookings have increased by 40%. The management tools are a lifesaver.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
        },
        {
            name: "Sarah Jones",
            role: "Regular Customer",
            comment: "I love the secure payment system. It's so convenient to book and pay through the platform.",
            rating: 4,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        },
        {
            name: "Dilan Dias",
            role: "Freelance Stylist",
            comment: "The best platform in Sri Lanka for beauty professionals. Very professional and supportive team.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
                        What Our <span className="text-[--color-brand-purple-dark]">Community</span> Says
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Hear from the thousands of happy clients and professionals who are transforming the beauty industry in Sri Lanka.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                            <div className="flex items-center space-x-4 mb-6">
                                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-[--color-brand-purple]" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                                <div className="ml-auto flex text-yellow-400">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 font-light italic leading-relaxed">"{review.comment}"</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Testimonials;
