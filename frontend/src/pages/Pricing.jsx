import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
    const plans = [
        {
            name: 'Freelancer',
            price: 'Free',
            description: 'Perfect for individual beauticians starting their journey.',
            features: [
                'Personal Portfolio Page',
                'Up to 5 Bookings/Month',
                'Basic Analytics',
                'Email Support'
            ],
            buttonText: 'Start for Free',
            popular: false
        },
        {
            name: 'Professional',
            price: '₨ 2,500',
            period: '/month',
            description: 'Ideal for busy professionals growing their brand.',
            features: [
                'Unlimited Bookings',
                'Advanced Analytics',
                'Priority Listing',
                'SMS Notifications',
                'Custom Promo Codes'
            ],
            buttonText: 'Choose Professional',
            popular: true
        },
        {
            name: 'Salon Plus',
            price: '₨ 7,500',
            period: '/month',
            description: 'Designed for salons managing multiple staff members.',
            features: [
                'Everything in Professional',
                'Multi-staff Management',
                'Inventory Tracking',
                'Dedicated Account Manager',
                'Marketing Tools'
            ],
            buttonText: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-serif">
                        Simple <span className="text-[#F880A8]">Pricing</span> for Growth
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Choose the plan that fits your business needs. No hidden fees, cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-[2.5rem] border ${plan.popular ? 'border-[#9F5AD5] ring-2 ring-[#9F5AD5]/20 shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-lg'} p-10 flex flex-col transition-all duration-300 hover:shadow-2xl`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#9F5AD5] text-white px-6 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                                </div>
                                <p className="mt-4 text-gray-600 font-light leading-relaxed">{plan.description}</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="font-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-0.5 ${plan.popular ? 'bg-white border-2 border-[#9F5AD5] text-[#9F5AD5] hover:bg-gray-50 shadow-lg' : 'bg-gray-50 border border-gray-200 text-gray-900 hover:bg-white hover:border-[#9F5AD5] hover:text-[#9F5AD5]'}`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Pricing;
