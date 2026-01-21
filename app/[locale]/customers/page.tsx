'use client';

import { useState } from 'react';
import Head from 'next/head';
import { BadgeCheck, CheckCircle, CheckCircle2, ChevronLeft, ChevronRight, PiggyBank, Star, Zap } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface ITestimonial {
    id: number;
    name: string;
    date: string;
    rating: number;
    review: string;
    type: "residential" | "commercial";
    avatar?: string;
    initials?: string;
    bgColor?: string;
    textColor?: string;
    verified?: boolean;
    verifiedBusiness?: boolean;
    icon?: string
}

export default function CustomerTestimonials() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const testimonials: ITestimonial[] = [
        {
            id: 1,
            name: "Marcus Chen",
            date: "2 days ago",
            rating: 5,
            review: "Absolutely thrilled with the service. The crew was professional, tidy, and fast. My first bill was $12!",
            type: "residential",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeLYSJnhuMLYO4S0zvOv1s1nhaQ3DcZJstSc4ku0Pl6cxLHBHG724L1OQLBFhKHjyv5nYSR7CdEc1tUHvUAO0ul54siNOjDdR2KBTurkP7UCUsfk-5TRIILjze3NA5vYxecq2PeoxI39bcUmVc7-qlHKpbwsZHZ6I29lbOAzFI334XfWU5lSDMQigobVl3lhahNxP-Ey8FPDt-hDuNwX8cgDxpsevF-EPx1oFYWWMTh-CljpgVQzOoLtuaP804Hq_xBiYElCpLjyU",
            verified: true
        },
        {
            id: 2,
            name: "Sarah L.",
            date: "1 week ago",
            rating: 5,
            review: "A significant investment that is already paying off. The sales team was honest about the numbers and ROI.",
            type: "residential",
            initials: "SL",
            bgColor: "bg-blue-100",
            textColor: "text-blue-700",
            verified: true
        },
        {
            id: 3,
            name: "Emily R.",
            date: "2 weeks ago",
            rating: 4,
            review: "Great experience overall. There was a small delay with permits, but the communication was excellent throughout.",
            type: "residential",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvSlu8JX7eCV_vaEkzXle9tqn_esEuDVQjHzloumO3g9fDVdEeidqBsA22qDs0pHbjZsE8dkGRs7qgkC4VHnqhp0Erf1tzuAD_of40JXLWk8v_7hQfTBNl8yWTFcgUSUlWokZTzHVP2h22ri2JU2dAf8E3Lakej7Ee6UZg1l9R6mFVI5vntclHMfwFcaTontvfor4OgP6VoNbqv7NLdMHPlaGQpRrqt4sNUO5EKqr4hz4GJqXkZt79QE5Nykt2qBY6EgVRvscK63g",
            verified: true
        },
        {
            id: 4,
            name: "Apex Design Studio",
            date: "3 weeks ago",
            rating: 5,
            review: "Switched our entire office building to solar. The tax incentives combined with their pricing made it a no-brainer.",
            type: "commercial",
            // icon: "apartment",
            bgColor: "bg-purple-100",
            textColor: "text-purple-700",
            verifiedBusiness: true
        },
        {
            id: 5,
            name: "David K.",
            date: "1 month ago",
            rating: 5,
            review: "I did a lot of research before choosing SolarTech. Their panels are higher efficiency than competitors for the same price.",
            type: "residential",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQjLN2T3Iy1EDA5KC8C9GCKdV4ZPUxkC2OQwj_qt-OlU9iTGHmd7KrzhEm0qYBR389InshKCUenT7Cp-v6SWItU6p9I4bmO_Zdhui2pwF1ve5iQRJICEt-3oP19Auau2R8Wx9qf1WgMhpVf4tbbR061zdi73V6EmEstYRja3x981Pdbv1EaI2Dwm5kRlMivjP5hNPLCbQpIm0AOncIMW8v_OtbruvICUU7NmpaAfNDmVcQs_0EW3hzzyassxeYpKJ_xxE5TOEMO6g",
            verified: true
        },
        {
            id: 6,
            name: "Michael J.",
            date: "1 month ago",
            rating: 5,
            review: "Clean technology, clean installation. The app is super intuitive to track my generation. Highly recommend!",
            type: "residential",
            initials: "MJ",
            bgColor: "bg-green-100",
            textColor: "text-green-700",
            verified: true
        }
    ];

    const featuredStories = [
        {
            id: 1,
            title: "The Johnson Family",
            location: "San Diego, California",
            type: "residential",
            typeColor: "bg-[#e8fce8] dark:bg-green-900/30",
            typeText: "text-green-800 dark:text-green-300",
            rating: 5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB85PJPUinJ4ClWzMQiUN9MHDCiipf_XTS-kpi7gYZPdKofU6169spE617lh5FpW_shSfEUP0-nYu6x5DObxqO7xuJTs-CMV-GQ649LWlllOI-VYGHmjSEk3Cricgzr_DMzGUf-2RbIKj421MVccBkgcgcXPN4chhf0Y7XOkSS4yXMo6TL_ICrHgRHWGogian5oLfK64NkdBe7v9KmQlZF-LmvcDY1WF6IQCLD7Zd8RL1coG0JCKeI9klEyRNPg9-qP5kiwjV06VLA",
            details: [
                { label: "System Size", value: "12kW System" },
                { label: "Annual Savings", value: "~$2,400" }
            ],
            testimonial: "The installation was seamless. The team handled all the permits, and now I love watching my electric meter run backward! It feels great to be energy independent.",
            layout: "normal"
        },
        {
            id: 2,
            title: "TechCorp Headquarters",
            location: "Austin, Texas",
            type: "commercial",
            typeColor: "bg-blue-50 dark:bg-blue-900/30",
            typeText: "text-blue-700 dark:text-blue-300",
            rating: 5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1oCOQTukeu1oosxHr4ivRjV_YoyzJP0SiA5ObPfBGfw-h0BW6Z3509iMRVSxiPAIUmuvPeYq9HAiP9CJPEFXl9bUHb0gOGv8_UJP1hp1KA-y00lGtsm1xy8GGVnFPfMBA56tUUa2aYyqijrh20iOGfmWFNWAl3edxCsDsxnajgFDrQEVWJ1YNGm6vO5napZoVcLYbMsnZYNcjw7v1iZDPQCx-zJ-1UwtzBU_supunmU0XIaycH_eKe9uqzLwUMpx1AQLV1fFEdlw",
            details: [
                { label: "System Capacity", value: "450kW Array" },
                { label: "Offset", value: "85% Usage" }
            ],
            testimonial: "SolarTech Solutions helped us achieve our sustainability goals two years ahead of schedule. The ROI has been fantastic, cutting our warehouse operating costs significantly.",
            layout: "reverse"
        }
    ];

    const stats = [
        { icon: <CheckCircle2 size={28} className="material-symbols-outlined text-primary text-3xl" />, label: "Installations", value: "2,000+" },
        { icon: <Zap size={28} className="material-symbols-outlined text-primary text-3xl" />, label: "Energy Generated", value: "50MW" },
        { icon: <PiggyBank size={28} className="material-symbols-outlined text-primary text-3xl" />, label: "Client Savings", value: "$5M+" }
    ];

    const filteredTestimonials = activeFilter === 'all'
        ? testimonials
        : testimonials.filter(t => t.type === activeFilter);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star size={18} />
        ));
    };

    const renderFeaturedStars = (rating: number, size: string = "text-[18px]") => {
        return [...Array(5)].map((_, index) => (
            <Star size={18} />
        ));
    };

    return (
        <>
            <Head>
                <title>Customer Testimonials - SolarTech Solutions</title>
                <meta name="description" content="Join thousands of homeowners who have taken control of their energy future. Real stories from real people making a real difference." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
          .fill-1 { font-variation-settings: 'FILL' 1; }
        `}</style>
            </Head>

            <div className={`${isDarkMode ? 'dark' : ''}`}>
                <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-[#111811] dark:text-white font-display">
                    {/* TopNavBar */}
                    <Header />

                    <main className="flex h-full grow flex-col items-center">
                        {/* HeroSection */}
                        <div className="w-full flex justify-center">
                            <div className="flex flex-col  flex-1">
                                <div className="@container">
                                    <div>
                                        <div
                                            className="relative flex min-h-[400px] flex-col gap-6 overflow-hidden bg-cover bg-center bg-no-repeat @[480px]:gap-8  items-center justify-center p-8"
                                            style={{
                                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJyLCPq6fOSVXQrTBwsA4c-87AFpNvpNkUo3u01zXyio_wZzXgL66aQuHTEJBHCMd6ZtqlbQMXCEzhMmaKv0QWadoHW8VbGFbsQgxIow2nxWQ1jy9IkT7Evqp18uJ1fJq03S351r0s4kMvFvuhP8q6qxDZnjPj3OrAbfVbYZ56jYHL7SEsyym6HJaBpWOuyzU_019xcNqWGt7SxE-Cylaqi4P-ORkpdU08FrxUClgndyV59xd1cWbVW87mi6AvjokfKGcQxbSqxng")',
                                            }}
                                        >
                                            <div className="flex flex-col gap-4 text-center z-10 max-w-2xl">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <div className="flex text-primary">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star size={18} />
                                                        ))}
                                                    </div>
                                                    <span className="text-white font-medium">4.9/5 from 500+ happy neighbors</span>
                                                </div>

                                                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                                                    Powering Homes, Empowering People
                                                </h1>

                                                <h2 className="text-gray-100 text-base font-normal leading-relaxed md:text-lg">
                                                    Join thousands of homeowners who have taken control of their energy future. Real stories from real people making a real difference.
                                                </h2>
                                            </div>

                                            <div className="flex gap-4 z-10 flex-wrap justify-center">
                                                <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-[#0fbd0f] transition-colors text-[#111811] text-base font-bold leading-normal tracking-[0.015em]">
                                                    See Projects
                                                </button>

                                                <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/30 text-white text-base font-bold leading-normal tracking-[0.015em]">
                                                    Get Estimate
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="w-full px-4 md:px-10  py-5 flex justify-center">
                            <div className="flex flex-col max-w-[960px] flex-1">
                                <div className="flex flex-wrap gap-4 p-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe6db] dark:border-gray-700 bg-white dark:bg-[#1a2e1a]">
                                            <div className="flex items-center gap-3">
                                                {stat.icon}
                                                <p className="text-[#111811] dark:text-gray-200 text-base font-medium leading-normal">{stat.label}</p>
                                            </div>
                                            <p className="text-[#111811] dark:text-white tracking-light text-2xl font-bold leading-tight pl-[44px]">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Featured Stories Header */}
                        <div className="w-full px-4 md:px-10 lg:px-40 py-2 flex justify-center">
                            <div className="flex flex-col max-w-[960px] flex-1 px-4">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 pt-5 border-b border-[#f0f4f0] dark:border-gray-800">
                                    <div>
                                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Featured Case Studies</span>
                                        <h2 className="text-[#111811] dark:text-white tracking-light text-[28px] font-bold leading-tight text-left">Success Stories Spotlight</h2>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                                            <ChevronLeft />
                                        </button>
                                        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                                            <ChevronRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Cards (Carousel style) */}
                        <div className="w-full px-4 md:px-10 lg:px-40 py-5 flex justify-center">
                            <div className="flex flex-col max-w-[960px] flex-1">
                                {featuredStories.map((story) => (
                                    <div key={story.id} className="p-4 @container">
                                        <div className={`flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start ${story.layout === 'reverse' ? '@xl:flex-row-reverse' : ''} shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white dark:bg-[#1a2e1a] border border-[#f0f4f0] dark:border-gray-700 overflow-hidden group hover:shadow-lg transition-shadow duration-300`}>
                                            <div
                                                className="w-full @xl:w-1/2 bg-center bg-no-repeat aspect-video bg-cover group-hover:scale-105 transition-transform duration-700"
                                                style={{ backgroundImage: `url('${story.image}')` }}
                                            />

                                            <div className="flex w-full @xl:w-1/2 grow flex-col items-stretch justify-center gap-1 py-6 px-6 relative bg-white dark:bg-[#1a2e1a] z-10">
                                                <div className="flex justify-between items-start">
                                                    <span className={`inline-flex items-center rounded-full ${story.typeColor} ${story.typeText} px-2.5 py-0.5 text-xs font-medium`}>
                                                        {story.type === 'residential' ? 'Residential Installation' : 'Commercial Project'}
                                                    </span>

                                                    <div className="flex text-primary text-sm">
                                                        {renderFeaturedStars(story.rating)}
                                                    </div>
                                                </div>

                                                <h3 className="text-[#111811] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mt-3">
                                                    {story.title}
                                                </h3>

                                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                                                    {story.location}
                                                </p>

                                                <div className="flex flex-col gap-4 mt-2">
                                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                                        {story.details.map((detail, idx) => (
                                                            <div key={idx} className="bg-background-light dark:bg-black/20 p-2 rounded">
                                                                <p className="text-xs text-gray-500">{detail.label}</p>
                                                                <p className="font-bold text-[#111811] dark:text-white">{detail.value}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <p className="text-[#4b5563] dark:text-gray-300 text-base italic leading-relaxed">
                                                        {story.testimonial}
                                                    </p>

                                                    <div className="flex items-center gap-2 mt-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                                                        <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                                            Read Full Case Study <ChevronRight size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reviews Section with Filter */}
                        <div className="w-full px-4 md:px-10 lg:px-40 py-10 bg-[#f9fafb] dark:bg-[#0c1a0c] flex justify-center border-t border-[#e5e7eb] dark:border-gray-800">
                            <div className="flex flex-col max-w-[960px] flex-1">
                                {/* Filter Bar */}
                                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 px-4">
                                    <h2 className="text-[#111811] dark:text-white text-2xl font-bold">Latest Reviews</h2>

                                    <div className="flex p-1 bg-white dark:bg-[#1a2e1a] rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                                        <button
                                            onClick={() => setActiveFilter('all')}
                                            className={`px-4 py-2 text-sm font-medium rounded ${activeFilter === 'all' ? 'bg-primary text-[#111811] font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'}`}
                                        >
                                            All
                                        </button>
                                        <button
                                            onClick={() => setActiveFilter('residential')}
                                            className={`px-4 py-2 text-sm font-medium rounded ${activeFilter === 'residential' ? 'bg-primary text-[#111811] font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'}`}
                                        >
                                            Residential
                                        </button>
                                        <button
                                            onClick={() => setActiveFilter('commercial')}
                                            className={`px-4 py-2 text-sm font-medium rounded ${activeFilter === 'commercial' ? 'bg-primary text-[#111811] font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'}`}
                                        >
                                            Commercial
                                        </button>
                                    </div>
                                </div>

                                {/* Reviews Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                                    {filteredTestimonials.map((testimonial) => (
                                        <div key={testimonial.id} className="flex flex-col justify-between gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-[#1a2e1a] dark:border-gray-700">
                                            <div>
                                                <div className="flex items-center gap-1 mb-3">
                                                    <div className="flex text-primary">
                                                        {renderStars(testimonial.rating)}
                                                    </div>
                                                    <span className="text-xs text-gray-400 ml-auto">{testimonial.date}</span>
                                                </div>

                                                <p className="text-[#111811] dark:text-gray-200 text-sm leading-relaxed">
                                                    {testimonial.review}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                                                {testimonial.avatar ? (
                                                    <div
                                                        className="size-10 rounded-full bg-gray-200 bg-cover bg-center"
                                                        style={{ backgroundImage: `url('${testimonial.avatar}')` }}
                                                    />
                                                ) : (
                                                    <div className={`size-10 rounded-full ${testimonial.bgColor || 'bg-gray-200'} flex items-center justify-center ${testimonial.textColor || 'text-gray-700'} font-bold text-sm`}>
                                                        {testimonial.icon ? (
                                                            <span className="material-symbols-outlined text-[20px]">{testimonial.icon}</span>
                                                        ) : (
                                                            testimonial.initials
                                                        )}
                                                    </div>
                                                )}

                                                <div>
                                                    <p className="font-bold text-[#111811] dark:text-white text-sm">{testimonial.name}</p>
                                                    <div className="flex items-center gap-1">
                                                        <BadgeCheck size={16} />
                                                        <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500">
                                                            {testimonial.verifiedBusiness ? 'Verified Business' : 'Verified'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center mt-8">
                                    <button className="flex items-center gap-2 text-[#111811] dark:text-white font-bold border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        Load More Reviews <span className="material-symbols-outlined">expand_more</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* CTA Footer */}
                        <div className="w-full flex justify-center bg-[#102210] py-16 px-4">
                            <div className="max-w-[960px] w-full flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl bg-primary p-10 relative overflow-hidden">
                                {/* Abstract Background Pattern */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>

                                <div className="z-10 flex flex-col gap-2 max-w-lg">
                                    <h2 className="text-[#102210] text-3xl font-black leading-tight tracking-tight">
                                        Ready to join the Green Revolution?
                                    </h2>
                                    <p className="text-[#102210]/80 font-medium text-lg">
                                        Get a custom quote for your home or business in less than 24 hours.
                                    </p>
                                </div>

                                <div className="z-10 flex gap-4 flex-col sm:flex-row w-full md:w-auto">
                                    <button className="flex whitespace-nowrap min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#111811] hover:bg-black transition-colors text-white text-base font-bold shadow-lg">
                                        Get Free Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Simple Footer */}
                    <Footer />
                </div>
            </div>
        </>
    );
}