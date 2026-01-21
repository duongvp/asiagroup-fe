'use client';

import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Eye, EyeIcon, Hammer, Handshake, Leaf, Target, Users } from 'lucide-react';

export default function AboutUs() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <Head>
                <title>About Us - Solar Company</title>
                <meta name="description" content="We are leading the transition to renewable energy for homes and businesses. Since 2010, we've been turning sunlight into savings and sustainability." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
                    .fill-1 { font-variation-settings: 'FILL' 1; }
                `}</style>
            </Head>

            <div className={`${isDarkMode ? 'dark' : ''}`}>
                <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-x-hidden">
                    {/* Navigation */}
                    <Header />

                    {/* Main Content Wrapper */}
                    <main className="flex flex-1 flex-col">
                        {/* Hero Section */}
                        <section className="relative flex min-h-[480px] flex-col justify-center overflow-hidden bg-cover bg-center py-20 px-4" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSolHzstLwrqsA27416p-A7gycFncsav51ZmHewj8ZbP5foPUJHPdCV9Oju6DHwMo9w4Vqfk8s_N01YYFwGITfXBVmWWmXwKveI9_WsE6hrdWqGuYLOyDN4YxeiCXgYxBWk8tybatbSyfMElMof7-c92tbDDJ6uFPylJpmMF5Lr3mokyrYTWLYy9uaDObKIvfnIH-1zqhpbmYLuLS9Ul3056jvRaSYQvo0QEx7kFokXnEFjvSZdezddM2UkHcEir5iP43727DadNw")' }}>
                            <div className="flex flex-col max-w-[960px] mx-auto w-full text-center">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl mb-6">
                                    Powering a Brighter Future
                                </h1>
                                <h2 className="text-white text-base font-normal leading-relaxed max-w-2xl mx-auto md:text-lg opacity-90">
                                    We are leading the transition to renewable energy for homes and businesses. Since 2010, we've been turning sunlight into savings and sustainability.
                                </h2>
                                <div className="mt-8">
                                    <button className="inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-green-600 hover:bg-green-700 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                                        <span>Explore Our Story</span>
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Introduction Section */}
                        <section className="px-4 py-16 lg:px-40 bg-white dark:bg-background-dark">
                            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1">
                                    <h2 className="text-[#111418] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">Who We Are</h2>
                                    <div className="w-16 h-1 bg-green-500 rounded-full mb-6"></div>
                                    <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-relaxed mb-4">
                                        We are a team of honest, local, and expert engineers dedicated to making solar energy accessible and affordable. Since our founding, we have been committed to transparency and long-term quality for every homeowner and business we serve.
                                    </p>
                                    <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-relaxed">
                                        Our philosophy is simple: clean energy shouldn't be complicated. We handle everything from the initial survey to the final switch-on, ensuring a seamless transition to a greener lifestyle.
                                    </p>
                                </div>
                                <div className="flex-1 w-full">
                                    <div
                                        className="aspect-video w-full rounded-xl overflow-hidden bg-gray-200"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHTBCrB_UfLFysAlhH7i-ncuHfi6z1Sa3xUi7UcpW93u1s2dMrjiyA6JcCMhA2tWiPa7RRtOTKioc-EBypM3dZXNwbiKjfIg7B4xg7GEHoHJsCYe41acd2AaB69m-VP2WHVKdbvyG3EuBaUQ7S2_ueZWKtd8PgnU8qnAbFs8N-3RcpdA5yid0gS3pBXXPMNuXbE9puhf5F2Bw5-XZbFlX9_Diatu-SV5eXrwPmcZxGh8yQB0WQrkZ4awFNokXk0cUw09xX1TGKc-Y')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    ></div>
                                </div>
                            </div>
                        </section>

                        {/* Mission & Vision Section */}
                        <section className="px-4 py-16 lg:px-40 bg-background-light dark:bg-gray-900/50">
                            <div className="max-w-[960px] mx-auto">
                                <div className="flex flex-col gap-10">
                                    <div className="text-center max-w-[720px] mx-auto">
                                        <h2 className="text-[#111418] dark:text-white text-[32px] font-bold leading-tight tracking-[-0.015em]">Our Purpose</h2>
                                        <p className="text-gray-500 dark:text-gray-400 mt-2">Driving the world towards a sustainable energy future.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Mission Card */}
                                        <div className="flex flex-col gap-4 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                                <Target size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight mb-2">Our Mission</h3>
                                                <p className="text-[#637288] dark:text-gray-400 text-sm font-normal leading-relaxed">
                                                    To empower communities by making solar technology accessible, affordable, and reliable for every roof.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Vision Card */}
                                        <div className="flex flex-col gap-4 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                                <EyeIcon size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight mb-2">Our Vision</h3>
                                                <p className="text-[#637288] dark:text-gray-400 text-sm font-normal leading-relaxed">
                                                    A world powered 100% by clean, renewable resources, creating a healthier planet for future generations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Core Values */}
                        <section className="px-4 py-16 lg:px-40 bg-white dark:bg-background-dark">
                            <div className="max-w-[960px] mx-auto">
                                <h2 className="text-[#111418] dark:text-white text-[28px] font-bold leading-tight mb-10 text-center">Core Values</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Value 1 */}
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                            <Leaf size={28} />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">Sustainability</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Commitment to green practices in everything we do.</p>
                                    </div>

                                    {/* Value 2 */}
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                            <Handshake size={28} />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">Integrity</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Honest pricing and transparent communication.</p>
                                    </div>

                                    {/* Value 3 */}
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                            <Hammer />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">Quality</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Using only tier-1 equipment built to last decades.</p>
                                    </div>

                                    {/* Value 4 */}
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                            <Users size={28} />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">Community</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Supporting local jobs and giving back.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="w-full bg-primary py-16 text-white">
                            <div className="max-w-[960px] mx-auto px-4 lg:px-40 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-4xl lg:text-5xl font-black mb-2">15+</div>
                                    <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-4xl lg:text-5xl font-black mb-2">5k+</div>
                                    <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">Installations</div>
                                </div>
                                <div>
                                    <div className="text-4xl lg:text-5xl font-black mb-2">20k</div>
                                    <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">Tons CO₂ Saved</div>
                                </div>
                                <div>
                                    <div className="text-4xl lg:text-5xl font-black mb-2">100%</div>
                                    <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">Satisfaction</div>
                                </div>
                            </div>
                        </section>

                        {/* Team Section */}
                        <section className="px-4 py-20 lg:px-40 bg-background-light dark:bg-background-dark">
                            <div className="max-w-[960px] mx-auto">
                                <div className="flex flex-col gap-2 mb-10">
                                    <h2 className="text-[#111418] dark:text-white text-[28px] font-bold leading-tight">Meet Our Experts</h2>
                                    <p className="text-gray-500 dark:text-gray-400">The passionate people behind the panels.</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Member 1 */}
                                    <div className="flex flex-col gap-4">
                                        <div className="aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden relative">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxOkzpzygLf_sYyksAXXJ3TNguRbu8rVYk3SnPXcOD4JcE8ZxzArEwTBpxtyk8D2abSijSEo94tphozs2mFy1IGLxDfd4gCe0fQoViNByzt0UvOrM8aMa56mNEvbAoIgfFlS6McJdqfd3U6h7oQWfZOZcVJhFArZur-h5BCTftXkLmvnT7M26uAcRUXBM1yttncNvg8HJSupbGiJYAcBEe6kZ_SG0Kzty4yoZ9lGvw8LSFKG5Cdx6b3z4iXc1GlaXWLGrwO9mlafo')" }}
                                            ></div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#111418] dark:text-white">John Carter</h3>
                                            <p className="text-sm text-primary font-medium">CEO &amp; Founder</p>
                                        </div>
                                    </div>

                                    {/* Member 2 */}
                                    <div className="flex flex-col gap-4">
                                        <div className="aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden relative">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZlCzWV6eVgx0Wq-yIEG5K3gZYRzuv3zVPXY_THmEToEE18Mc_F5KZB0BgV5OVyhpDijSiakvmGMvQKiSpXnhJZp7U7R-gKtFcGJh2K5qVQ2K0RcjaObhOhb87-VCjTYUP1MIQc6JpgfDE-h6or5vHkhl4On2cQnngWHtciB4PNn_H0JlZQOudX3o5Z9McrQjkMjvnCF7KbTpm9nWVyp0ZsXYrv6bF_qUqxH4Tiu4n_zH1TkFkAvAjqU6BRAeZ6Fan3NQhAcQ3yM')" }}
                                            ></div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#111418] dark:text-white">Sarah Jenkins</h3>
                                            <p className="text-sm text-primary font-medium">Head of Engineering</p>
                                        </div>
                                    </div>

                                    {/* Member 3 */}
                                    <div className="flex flex-col gap-4">
                                        <div className="aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden relative">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsIBY4beeN_t1eyg6J0yD5yWXNKO8z1FKgWqHeQ7J7WqJKQRrEnN9hhWO-ab-j7gzQw8CLWLNzmSt1ff1It-60HMKkpDACp0Po22zUoFOSFsJRnnDDOsIgtY9sd0WRFBKsocDidmJ4fH2VYJeLpMrAKtYiGHcvpU6v09b9FJDWPXBsb4AdnsiufKd-dPkr1nmJuLPqwwOJZnneAMoNhOzoD75-8aKp61YidcCFbiXJloSQZl5IH-isumoL7-bj61Fx_YylGyzyIUg')" }}
                                            ></div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#111418] dark:text-white">Michael Ross</h3>
                                            <p className="text-sm text-primary font-medium">Operations Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="px-4 py-20 bg-white dark:bg-background-dark">
                            <div className="max-w-[960px] mx-auto rounded-2xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary opacity-95"></div>
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQPHOq3KnHg2aenuZ4GhtX_rYX-FSE4Wbhu3aaEezjka4je0_SLF2SVhGhT1O4kaaSC1H47Jps_avVrozmHoqeeLtK4mQDtnwpVx8TlpwUb-TNzEVG5vWwdn05G2FEBMTOsj9oPLIuz2KhCeeWkyymqd0yGig12obl-XPHQdJQaysxfzcdRiPHyUpu0uEmpQ4bFPLZ3QTStGGhUCe04w7I8lnC-HpgKrDFQ2IbuDzADl9KobCVBB3qjC12Aq3QK2u8TvrBalGNueg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                                ></div>
                                <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 lg:p-16 gap-6">
                                    <h2 className="text-white text-3xl lg:text-4xl font-black leading-tight">Ready to switch to solar?</h2>
                                    <p className="text-blue-100 text-base max-w-lg">Get a free consultation and customized quote for your home or business today. Join the green revolution.</p>
                                    <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1">
                                        Get Your Free Quote
                                    </button>
                                </div>
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