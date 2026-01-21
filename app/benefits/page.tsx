'use client';

import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Building, ChartBar, ChartColumnBig, Home, Leaf, PiggyBank, Star, StarHalf, TrendingUp, Zap } from 'lucide-react';

export default function Benefits() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [audience, setAudience] = useState('homeowners');
    const [zipCode, setZipCode] = useState('');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleAudienceChange = (value: string) => {
        setAudience(value);
    };

    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Zip code submitted:', zipCode);
        // Add form submission logic here
    };

    return (
        <>
            <Head>
                <title>Benefits of Solar Energy - SolarTech</title>
                <meta name="description" content="Join the renewable revolution. Experience significant cost savings, energy independence, and a cleaner planet for future generations." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
                    .glass-panel {
                        background: rgba(255, 255, 255, 0.7);
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 255, 255, 0.5);
                    }
                    .dark .glass-panel {
                        background: rgba(16, 34, 16, 0.7);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    }
                `}</style>
            </Head>

            <div className={`${isDarkMode ? 'dark' : ''}`}>
                <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden flex flex-col min-h-screen">
                    {/* Navigation */}
                    <Header />

                    {/* Main Content */}
                    <main className="flex-grow flex flex-col items-center w-full">
                        {/* Hero Section */}
                        <section className="w-full px-4 py-6 md:px-10 md:py-8 max-w-[1280px]">
                            <div
                                className="relative overflow-hidden rounded-2xl md:rounded-3xl min-h-[500px] flex flex-col items-center justify-center text-center p-6 md:p-12 gap-6 bg-cover bg-center bg-no-repeat group"
                                style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKxihW-GM0TB7JTX-9YPA1gPmYjbEaorjAk8hnPLNICZoiEqnSBBvuKoWCDx35fitZCawIBhLJHcahB-gfsQ9VkHhHIpqdLpnOiZ51MLd2Zd4NcMUVdZR2WnKmpK8qNT7qXhL-BAtSLVhgHlp07gJ37yhz5FQl9hE3-4Nwm4T_mT8PqY040lIZ11_39kdm6XhWbwyYSW0pDvURsYHxAPaqXU80z-3T450oSu8t25joy_FtY9dJ8OQu7SFsO5_mR5M1hHtXU-9ZCBU")' }}
                            >
                                <div className="relative z-10 flex flex-col gap-4 max-w-3xl animate-fade-in-up">
                                    <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">Clean Energy Revolution</span>
                                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                        Power Your Future with <span className="text-primary">Clean Energy</span>
                                    </h1>
                                    <h2 className="text-slate-100 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                                        Join the renewable revolution. Experience significant cost savings, energy independence, and a cleaner planet for future generations.
                                    </h2>
                                </div>

                                <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                                    <button className="h-12 px-8 rounded-full bg-primary text-slate-900 font-bold text-base hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(19,236,19,0.4)]">
                                        Calculate Savings
                                    </button>
                                    <button className="h-12 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-base hover:bg-white/20 transition-all">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Segmented Control / Audience Switcher */}
                        <section className="w-full px-4 py-8 max-w-[960px]">
                            <div className="flex justify-center">
                                <div className="inline-flex h-12 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 p-1.5 w-full max-w-md">
                                    <label
                                        className={`cursor-pointer h-full flex-1 rounded-full px-4 flex items-center justify-center transition-all font-bold text-sm ${audience === 'homeowners'
                                            ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
                                            : 'text-slate-500 dark:text-slate-400'
                                            }`}
                                    >
                                        <input
                                            className="hidden"
                                            name="audience-toggle"
                                            type="radio"
                                            value="homeowners"
                                            checked={audience === 'homeowners'}
                                            onChange={() => handleAudienceChange('homeowners')}
                                        />
                                        <span className="flex items-center gap-2">
                                            <Home size={18} />
                                            For Homeowners
                                        </span>
                                    </label>

                                    <label
                                        className={`cursor-pointer h-full flex-1 rounded-full px-4 flex items-center justify-center transition-all font-bold text-sm ${audience === 'businesses'
                                            ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
                                            : 'text-slate-500 dark:text-slate-400'
                                            }`}
                                    >
                                        <input
                                            className="hidden"
                                            name="audience-toggle"
                                            type="radio"
                                            value="businesses"
                                            checked={audience === 'businesses'}
                                            onChange={() => handleAudienceChange('businesses')}
                                        />
                                        <span className="flex items-center gap-2">
                                            <Building size={18} />
                                            For Businesses
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </section>

                        {/* Feature Grid (Benefits) */}
                        <section className="w-full px-4 py-12 max-w-[1280px]">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Make the Switch?</h2>
                                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                                    Solar energy isn't just about saving the planet—it's a smart financial investment that pays dividends for decades.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Card 1 */}
                                <div className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-slate-900 text-primary transition-colors">
                                        <PiggyBank size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Drastic Cost Savings</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Eliminate or significantly reduce your monthly electricity bills. Solar often pays for itself in 6-9 years.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-slate-900 text-primary transition-colors">
                                        <Leaf size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Environmental Impact</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Reduce your carbon footprint instantly. A typical residential solar system offsets 3-4 tons of carbon annually.
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-slate-900 text-primary transition-colors">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Energy Independence</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Protect yourself from volatile utility rates and grid instability. Generate your own clean power on-site.
                                    </p>
                                </div>

                                {/* Card 4 */}
                                <div className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-slate-900 text-primary transition-colors">
                                        <TrendingUp size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Increased Property Value</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Homes with solar sell 20% faster and for 4.1% more on average compared to homes without solar.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Charts / Data Visualization */}
                        <section className="w-full px-4 py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                            <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
                                {/* Text Content */}
                                <div className="flex-1 flex flex-col gap-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold w-fit">
                                        <ChartColumnBig size={16} />
                                        Long-Term Analysis
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                                        Solar is Cheaper than Traditional Energy
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                                        Over a 10-year period, the cumulative cost of staying on the traditional grid far exceeds the investment in solar. Once your system is paid off, your energy is essentially free.
                                    </p>
                                    <div className="flex gap-8 mt-4">
                                        <div>
                                            <p className="text-4xl font-black text-primary">$15k+</p>
                                            <p className="text-slate-500 font-medium">Avg. 10-Year Savings</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl font-black text-blue-600 dark:text-blue-400">4.1%</p>
                                            <p className="text-slate-500 font-medium">Home Value Increase</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chart Visual */}
                                <div className="flex-1 w-full max-w-md bg-background-light dark:bg-[#102210] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative shadow-xl">
                                    <h3 className="font-bold text-center mb-8 text-slate-900 dark:text-white">Cumulative Energy Costs (10 Years)</h3>
                                    <div className="flex items-end justify-center gap-8 h-64 px-4 pb-2 border-b border-slate-300 dark:border-slate-700">
                                        {/* Bar 1: Traditional */}
                                        <div className="group relative flex flex-col items-center gap-2 w-24 h-full justify-end">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 text-sm font-bold text-slate-500">$32,000</span>
                                            <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-t-lg transition-all duration-1000 group-hover:bg-slate-400 h-[90%] relative overflow-hidden">
                                                {/* Pattern overlay */}
                                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #000 5px, #000 10px)' }}></div>
                                            </div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mt-2">Traditional Grid</p>
                                        </div>

                                        {/* Bar 2: Solar */}
                                        <div className="group relative flex flex-col items-center gap-2 w-24 h-full justify-end">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-[30%] text-sm font-bold text-primary">$17,000</span>
                                            <div className="w-full bg-primary rounded-t-lg shadow-[0_0_20px_rgba(19,236,19,0.3)] h-[53%] relative overflow-hidden">
                                                <div className="absolute inset-0 bg-white/20"></div>
                                            </div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-primary text-center mt-2">Solar Energy</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-sm text-slate-500">
                                            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-1"></span>
                                            Solar users save ~47%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Testimonial Section */}
                        <section className="w-full px-4 py-16 max-w-[960px]">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Trusted by Families & Businesses</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Testimonial 1 */}
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-4">
                                    <div className="flex text-yellow-400 gap-1">
                                        <Star size={18} />
                                        <Star size={18} />
                                        <Star size={18} />
                                        <Star size={18} />
                                        <Star size={18} />
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 italic">
                                        "The process was incredibly smooth. We've seen our bill drop from $250 to practically zero in the summer months. Highly recommend!"
                                    </p>
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                            <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Jenkins</p>
                                            <p className="text-xs text-slate-500">Homeowner, California</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-4">
                                    <div className="flex text-yellow-400 gap-1">
                                        <Star size={18} />
                                        <Star size={18} />
                                        <Star size={18} />
                                        <Star size={18} />
                                        <Star size={18} />
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 italic">
                                        "Implementing solar for our warehouse was a strategic move. The ROI has been faster than projected, and our clients love our green initiative."
                                    </p>
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                            <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Marcus Chen</p>
                                            <p className="text-xs text-slate-500">Logistics Corp, Texas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="w-full px-4 py-20 bg-[#102210] relative overflow-hidden mt-10">
                            {/* Background Accents */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                    Ready to Switch to <span className="text-primary">Clean Power?</span>
                                </h2>
                                <p className="text-slate-300 text-lg max-w-2xl">
                                    Get a custom quote designed for your specific energy needs. It only takes a minute to start saving.
                                </p>

                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                    <input
                                        className="h-12 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full max-w-xs transition-all"
                                        placeholder="Enter your zip code"
                                        type="text"
                                        value={zipCode}
                                        onChange={handleZipCodeChange}
                                    />
                                    <button
                                        type="submit"
                                        className="h-12 px-8 rounded-full bg-primary text-slate-900 font-bold hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(19,236,19,0.3)]"
                                    >
                                        Get My Quote
                                    </button>
                                </form>

                                <p className="text-slate-500 text-xs mt-2">No commitment required. Free consultation.</p>
                            </div>
                        </section>
                    </main>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </>
    );
}