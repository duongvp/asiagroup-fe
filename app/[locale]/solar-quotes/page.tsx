'use client';

import { useState } from 'react';
import Head from 'next/head';
import { ArrowRight, BadgeCheck, Banknote, ChevronDown, CircleCheck, Leaf, Mail, MapPin, Phone, PiggyBank, Star, UserCog } from 'lucide-react';

export default function GetQuote() {
    const [formData, setFormData] = useState({
        zipcode: '',
        bill: '',
        fname: '',
        lname: '',
        email: ''
    });



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <>
            <Head>
                <title>Get a Free Solar Quote - SolarGreen</title>
                <meta name="description" content="Stop renting your power. Own your energy. Switch to solar today to lock in lower rates and increase your home's value immediately." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    }
                    
                    input:focus, select:focus {
                        outline: none;
                        border-color: #13ec13;
                        box-shadow: 0 0 0 3px rgba(19, 236, 19, 0.2);
                    }
                    
                    .fill-current {
                        font-variation-settings: 'FILL' 1;
                    }
                `}</style>
            </Head>

            <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display overflow-x-hidden">
                <main className="flex-grow">
                    {/* Hero Section with Split Layout */}
                    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>
                        </div>

                        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                                {/* Left Column: Content */}
                                <div className="flex flex-col gap-6 max-w-2xl">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/10 w-fit border border-blue-100 dark:border-white/10">
                                        <BadgeCheck size={18} />
                                        <span className="text-xs font-bold uppercase tracking-wide text-accent-blue">Official Solar Partner</span>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                                        Power Your Home <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">For Less.</span>
                                    </h1>

                                    <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-lg">
                                        Stop renting your power. Own your energy. Switch to solar today to lock in lower rates and increase your home's value immediately.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                        <div className="flex items-center gap-3">
                                            <div className="flex -space-x-3">
                                                <img
                                                    alt="Customer avatar"
                                                    className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmVRLqLhp_K8-lMRr3UczKgtIrE7Y0ETdH7JUfPtGLaAvyQq5kAtqx4AMTV76EQN--RXkszJlppKjr2n0Mma6QQwgxhk1Xa4owrxVdE7b4I9nAlPjexNHztq9slLgj0o8cXVbbYV0nXLxrRbDsBsP5_U_wFLKsQyNysGhn6coqk67XLaN2QsiSFUu8tJ6vY8u0jL4hEP60EQDuSms87NTdOhlGkI_LpLufi8kRiZX10OCBSkY61tuRI57Q51AAeHI9ZHVvA-0g1v4"
                                                />
                                                <img
                                                    alt="Customer avatar"
                                                    className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNbFZRRaimSDUoHP1EMaaFiBQFta4TOkSpPWJhaMNQ_JkmoOxu1-zATAnUf_FtMkkViHO_xHzeobqw0bGHnYYq94vNavDyLT_A0GIfYTd34cXHV85YJl4rjO5Jhf25g-O8gGO7Iy8HCZxQzkqfydsl-7zjfh6XM-I38o_jACVx5FLdpC9WJXRP-mbanX7ZDfsoHz8g7yTwx5puQw8CORiJ38ftuQhrwnZ8di2hjg1gz8u0M9vjphpxJpOjRAvPhzuLQwAsrovLDpM"
                                                />
                                                <img
                                                    alt="Customer avatar"
                                                    className="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKEQjV8dOrb_nQQn0QplQYjrDLhgHJ-ylxO3wUaCrMYVTpmDF3ZiJWk-ehW2cxAQiPrmb-vBN-jcLD6OLdF5l6-w_6zeiKxgVI3BJ_nVoMs7tv5KZeQq7lCFxXjOwvZlk53DFVB-0a5YCkbqJR52d0emOuhEq2uslc0gHIZu6zWfcEuEcK4N0XRsJZvKhKMhosw9cdXprroMeAQ3jP2LBphWaUji-2fLZf6k_ExdtDe9WqXv1DtTUrkyIP8ZBIJTDJXMpZh_uj35c"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex text-yellow-400 text-sm">
                                                    <Star size={16} />
                                                    <Star size={16} />
                                                    <Star size={16} />
                                                    <Star size={16} />
                                                    <Star size={16} />
                                                </div>
                                                <span className="text-xs font-medium text-slate-500 dark:text-gray-400">Trusted by 10,000+ homeowners</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mt-4">
                                        <li className="flex items-center gap-3 text-slate-700 dark:text-gray-200">
                                            <CircleCheck className="text-primary" size={20} />
                                            <span>$0 Down financing options available</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700 dark:text-gray-200">
                                            <CircleCheck className="text-primary" size={20} />
                                            <span>25-Year performance warranty</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700 dark:text-gray-200">
                                            <CircleCheck className="text-primary" size={20} />
                                            <span>Increase property value instantly</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Column: Form Card */}
                                <div className="w-full max-w-md mx-auto lg:mr-0">
                                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                                        <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Request Your Free Quote</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">See how much you can save in 60 seconds.</p>
                                        </div>

                                        <form className="p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" htmlFor="zipcode">Zip Code</label>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                        <MapPin size={18} />
                                                    </span>
                                                    <input
                                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 transition-all"
                                                        id="zipcode"
                                                        placeholder="Enter your zip code"
                                                        type="text"
                                                        value={formData.zipcode}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" htmlFor="bill">Average Monthly Bill</label>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                        <Banknote size={16} />
                                                    </span>
                                                    <select
                                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white appearance-none focus:ring-0 transition-all cursor-pointer"
                                                        id="bill"
                                                        value={formData.bill}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option disabled value="">Select amount</option>
                                                        <option value="100-150">$100 - $150</option>
                                                        <option value="150-200">$150 - $200</option>
                                                        <option value="200-300">$200 - $300</option>
                                                        <option value="300+">$300+</option>
                                                    </select>
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                                        <ChevronDown size={20} />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" htmlFor="fname">First Name</label>
                                                    <input
                                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 transition-all"
                                                        id="fname"
                                                        type="text"
                                                        value={formData.fname}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" htmlFor="lname">Last Name</label>
                                                    <input
                                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 transition-all"
                                                        id="lname"
                                                        type="text"
                                                        value={formData.lname}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" htmlFor="email">Email Address</label>
                                                <input
                                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 transition-all"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <button
                                                className="w-full mt-2 bg-primary hover:bg-green-400 text-slate-900 text-base font-bold h-12 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(19,236,19,0.39)] hover:shadow-[0_6px_20px_rgba(19,236,19,0.23)] hover:-translate-y-0.5"
                                                type="submit"
                                            >
                                                Calculate My Savings
                                                <ArrowRight size={18} />
                                            </button>

                                            <p className="text-[11px] text-center text-slate-400 mt-1">
                                                By clicking above, you agree to our <a className="underline hover:text-slate-600 dark:hover:text-slate-200" href="#">Terms of Service</a> and <a className="underline hover:text-slate-600 dark:hover:text-slate-200" href="#">Privacy Policy</a>.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Feature Section */}
                    <section className="py-16 bg-white dark:bg-slate-900/50">
                        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
                                <div className="max-w-2xl">
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why SolarGreen is the clear choice</h2>
                                    <p className="text-slate-600 dark:text-slate-300 text-lg">We make switching to clean energy simple, affordable, and worry-free.</p>
                                </div>
                                <a className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    See all benefits
                                    <ArrowRight size={18} />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Feature 1 */}
                                <div className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 transition-all hover:shadow-lg">
                                    <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        <PiggyBank size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Maximum Savings</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Lock in lower electricity rates and protect yourself from utility price hikes for decades.</p>
                                </div>

                                {/* Feature 2 */}
                                <div className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 transition-all hover:shadow-lg">
                                    <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-accent-blue mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        <UserCog size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Expert Installation</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Our certified teams handle everything from permits to activation. Sit back and relax.</p>
                                </div>

                                {/* Feature 3 */}
                                <div className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 transition-all hover:shadow-lg">
                                    <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-green-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        <Leaf size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Clean Future</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Reduce your carbon footprint significantly. One home at a time, we're changing the world.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}