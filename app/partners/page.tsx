'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function PartnersAndCertifications() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <Head>
                <title>SolarTech - Partners &amp; Certifications</title>
                <meta name="description" content="We collaborate with industry leaders and adhere to the strictest global standards to ensure your energy independence is safe, efficient, and long-lasting." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
                <style>{`
                    .fill-1 { font-variation-settings: 'FILL' 1; }
                `}</style>
            </Head>

            <div className={`${isDarkMode ? 'dark' : ''}`}>
                <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#111811] dark:text-white">
                    {/* Navbar */}
                    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e8e5] bg-white/90 backdrop-blur-md px-6 py-4 dark:border-[#2a3c2a] dark:bg-background-dark/90 md:px-10">
                        <div className="flex items-center gap-4">
                            <div className="size-8 text-primary">
                                <span className="material-symbols-outlined text-4xl">solar_power</span>
                            </div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111811] dark:text-white">SolarTech</h2>
                        </div>

                        <div className="hidden flex-1 justify-end gap-8 md:flex">
                            <nav className="flex items-center gap-9">
                                <a className="text-sm font-medium leading-normal text-[#111811] hover:text-primary dark:text-white dark:hover:text-primary" href="#">
                                    Home
                                </a>
                                <a className="text-sm font-medium leading-normal text-[#111811] hover:text-primary dark:text-white dark:hover:text-primary" href="#">
                                    Solutions
                                </a>
                                <a className="text-sm font-medium leading-normal text-[#111811] hover:text-primary dark:text-white dark:hover:text-primary" href="#">
                                    Projects
                                </a>
                                <a className="text-sm font-bold leading-normal text-primary" href="#">
                                    Partners
                                </a>
                                <a className="text-sm font-medium leading-normal text-[#111811] hover:text-primary dark:text-white dark:hover:text-primary" href="#">
                                    Contact
                                </a>
                            </nav>

                            <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-[#111811] transition-colors hover:bg-primary/90">
                                <span className="truncate">Get a Quote</span>
                            </button>
                        </div>

                        <div className="flex items-center md:hidden">
                            <button
                                onClick={toggleDarkMode}
                                className="mr-4 text-[#111811] dark:text-white"
                            >
                                <span className="material-symbols-outlined">
                                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                                </span>
                            </button>
                            <button className="text-[#111811] dark:text-white">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </header>

                    <main className="flex flex-1 flex-col">
                        {/* Hero Section */}
                        <section className="@container w-full">
                            <div className="w-full bg-cover bg-center bg-no-repeat py-20 md:py-32" data-alt="Solar panels reflecting sunlight with a green energy overlay" style={{ backgroundImage: 'linear-gradient(rgba(16, 34, 16, 0.7) 0%, rgba(16, 34, 16, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBdSlG0XOSrGQjSm9IU5NR_m0luVDAOZLgazeRbl4r7rRwutxUyIFVwKnbAK5VMG2GsCVOGAVpQeHAx4Yd-csSM351PXuCHig1plSKQZZWK42PMZmegv5WzAgRoUIZapPxtht18UCXTrmSyQ1lZ6ftWjT7_Hf7ehIv0UwfGAsUOAHC3V7ZGQ_-B2HTRP3J6aWiTF25LszYfbI0ie5gVAUgYgczLuf784KZrupzhAd5SWhTzfJYhqjTG1RmwyoR7VQpqI8XMKwBLV4")' }}>
                                <div className="mx-auto flex max-w-[960px] flex-col gap-6 px-4 text-center md:px-10">
                                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white md:text-5xl lg:text-6xl">
                                        Building a Sustainable Future<br />with World-Class Partners
                                    </h1>
                                    <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-gray-200">
                                        We collaborate with industry leaders and adhere to the strictest global standards to ensure your energy independence is safe, efficient, and long-lasting.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Stats Bar */}
                        <section className="w-full border-b border-[#e5e8e5] bg-white dark:border-[#2a3c2a] dark:bg-background-dark">
                            <div className="mx-auto flex max-w-[960px] flex-wrap justify-center gap-4 px-4 py-8 md:justify-between md:px-10">
                                <div className="flex min-w-[140px] flex-col items-center gap-1 text-center">
                                    <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-[#111811] dark:text-white">10+</p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Years Experience</p>
                                </div>

                                <div className="h-16 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

                                <div className="flex min-w-[140px] flex-col items-center gap-1 text-center">
                                    <span className="material-symbols-outlined text-4xl text-primary">solar_power</span>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-[#111811] dark:text-white">500+</p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Projects Completed</p>
                                </div>

                                <div className="h-16 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

                                <div className="flex min-w-[140px] flex-col items-center gap-1 text-center">
                                    <span className="material-symbols-outlined text-4xl text-primary">workspace_premium</span>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-[#111811] dark:text-white">100%</p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Certified Quality</p>
                                </div>

                                <div className="h-16 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

                                <div className="flex min-w-[140px] flex-col items-center gap-1 text-center">
                                    <span className="material-symbols-outlined text-4xl text-primary">group</span>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-[#111811] dark:text-white">50+</p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Trusted Partners</p>
                                </div>
                            </div>
                        </section>

                        {/* Technology Partners Section */}
                        <section className="w-full py-16">
                            <div className="mx-auto flex max-w-[960px] flex-col px-4 md:px-10">
                                <div className="mb-10 text-center">
                                    <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-[#111811] dark:text-white">Technology Partners</h2>
                                    <p className="mt-3 text-gray-500 dark:text-gray-400">Leading innovators in solar panels, inverters, and battery storage.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                    {/* Partner 1 */}
                                    <div className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-[#e5e8e5] bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-[#2a3c2a] dark:bg-[#1a2c1a]">
                                        <img className="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert" data-alt="Company logo placeholder abstract hexagon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIdlSoWSUib2B8GLHmZyLN2Dhu7APCi8enMQrq1WCkSKge-txbj9BDzw8jzxQBTaNSxqPlGWW3Fr0Xjq6gnCzfmXU7rb-CZqYXQpguJxsol_ba9dJ4i8U3Hc20YPHzVnHUeI-_0vL3FOd7vYF5Q6Y3XJ5t6QKF6SF6aBd9ocVATSR4sbgdBdKuws4lQoWypAVl34N46zHgbshyGt2uNbj0erMEagDDCpYQBfgNXFGgYGUmRcIXkS2MEMJ8ZxbdiJISj2zV1SxM3-U" alt="SunCore Systems Logo" />
                                        <p className="mt-4 text-sm font-semibold text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white">SunCore Systems</p>
                                    </div>

                                    {/* Partner 2 */}
                                    <div className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-[#e5e8e5] bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-[#2a3c2a] dark:bg-[#1a2c1a]">
                                        <img className="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert" data-alt="Company logo placeholder minimal triangle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhCTW8HyKeWqMP0pRqh8IjdN72n4UcWk_DTAv3a5Rh9OxdauPTEL5lMcvr0EHs2Z4__TxwDa2mHDuvANxKXGt3Ev4yYlUOKgdqp6M34xTopAAr7d12xoHAPzJsA6i9mFjq_qdf2_4gGzcf6oKaoNjOjT_Mbl54mVLNi1AER6yWX19MZ_t2tRVOkThoO_S64F8TrMmgV70OuLv-OhMmGp1rAZ_c9nLtJ7Abe43E25kImXO9f0lxJzMZSdEmsI9_rAdtkD8-otYNmss" alt="VoltMax Tech Logo" />
                                        <p className="mt-4 text-sm font-semibold text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white">VoltMax Tech</p>
                                    </div>

                                    {/* Partner 3 */}
                                    <div className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-[#e5e8e5] bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-[#2a3c2a] dark:bg-[#1a2c1a]">
                                        <img className="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert" data-alt="Company logo placeholder solar wave" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfEMLnQ_1niasSinKGH3MDkciEgF4QlUkwDqGMLWhHyCougO_fTMEcpdK5pc6sbASbqKZjJ--8kZzOeY_OeVoIj3ygs4hWNZY-12yFZ_C-KIF3u9sICnyn6-XMUOWOFg_pApAXpOxRONU3uLzvHPQNYbH2Tnv4vfUimJLkthi3IAGYIujFi52pZ2DGjQHPcAazxCmVRqDRpuugyd0E9xf3M8pRAxi159D-uWYbv6y_w26i3b4g9nEYm2TZYcSTTxTCNRoA7xWRs50" alt="EcoCells Logo" />
                                        <p className="mt-4 text-sm font-semibold text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white">EcoCells</p>
                                    </div>

                                    {/* Partner 4 */}
                                    <div className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-[#e5e8e5] bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-[#2a3c2a] dark:bg-[#1a2c1a]">
                                        <img className="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert" data-alt="Company logo placeholder energy circle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjD_KedVK6ZuGtwNbCWqFZltls2A5eh-MeSVXNS2sUA5_sNtbJ377t0qnOnbVinfXUMLNb8P37kDlAaN1tUJfN7wOc0A5G4ApCSrgHP6AAjIP1CxqNA9_xfD5Z4rfbR2DNs_u6VgCNnwsXonw2DNHDXdio8bJ3Rq-VhlYpA3XvVBXqSih661Tbpeo3A3Hi3Qql0PQE3c4dAbGjgE8t5DfFYWDiJdsfrU8crUxM2CJTw_U1gmF08x1R_LGpnIdfwB37pJ52y09bBH4" alt="Invertix Logo" />
                                        <p className="mt-4 text-sm font-semibold text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white">Invertix</p>
                                    </div>

                                    {/* Partner 5 */}
                                    <div className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-[#e5e8e5] bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-[#2a3c2a] dark:bg-[#1a2c1a]">
                                        <img className="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert" data-alt="Company logo placeholder leaf tech" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc2u1CvqKcgNugZPFQ3O4XnhD3xtZEhMa8leE3B4y3n7Clda8os4QlbXIdE-_x6-Ix7nJnT5YmxLAPWofydX2MANAgkCKzmIcvcG2bEBz28WQX6VJuhYpYvdCZBRLG62-r9r77bs0CPncoZpl-8QQP4UEaBxtyBvqHx5OIlg8Iixv2ioU1G-lYWdptMJB6sH9bNalfdW55s1kEwBUobXlz0TWTz7c189mbr-EM0I_2j0RTz60JhSfzCcR8wUPilKS5mw6GzW0bWgs" alt="GreenGrid Logo" />
                                        <p className="mt-4 text-sm font-semibold text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white">GreenGrid</p>
                                    </div>

                                    {/* Partner 6 */}
                                    <div className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-[#e5e8e5] bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-[#2a3c2a] dark:bg-[#1a2c1a]">
                                        <img className="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert" data-alt="Company logo placeholder future power" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtwrsW9tVlutdrj1sFwIFkAuLLYvq8H67KzphkP5TRwTzW4fc_3FvZDu7GApBNK8JyCPJDDHARfxW_aYfiYSyf4g5Rs-Rw5kNvGQ5magfaewoA14Yni4KUEbtIMDTyyOJN-J3tXBDtFOljQg_fhwiAHfNsQE8CrwN7nFYZiFcP_5LMjnT91Cp1UeP7jtilSYD7_Jzs6Y8AXY27iDWqbH6j_6nRPM92NKCB4uypPx2ICtbVMS5WZYUHzS3PikIp9OHkYBjvwvh_tQA" alt="Lumina Solar Logo" />
                                        <p className="mt-4 text-sm font-semibold text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white">Lumina Solar</p>
                                    </div>

                                    {/* Partner 7 */}
                                    <div className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-[#e5e8e5] bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-[#2a3c2a] dark:bg-[#1a2c1a]">
                                        <img className="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert" data-alt="Company logo placeholder ray bolt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt_Cc3uIup-JWt-MBO7yUOYFOdHHoFzLMXbsQ29ZGR2U6Pj128z1QG4QZ0JmhaEOVU5_Nh1k6v4STj7amFhiKLqzq4HTNz-kv8IeSu_o1y6aX9jQu61cPlkV_mgHt--W0AxaUnNQSCoBpPDBPcsHTQyV-NAU2S54MSS6aCeakz55LUZ8dUFqxiAphIyCXHpygxDiXOjLhcEjG478JOw_uV4yvjy_fAlr0Mr1-qTsYJc-vWXCHpu6oP8JKkXyaf_u-5qFGOAkmaPHM" alt="Helios Logo" />
                                        <p className="mt-4 text-sm font-semibold text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white">Helios</p>
                                    </div>

                                    {/* Partner 8 */}
                                    <div className="group flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-[#e5e8e5] bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-[#2a3c2a] dark:bg-[#1a2c1a]">
                                        <img className="h-12 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:invert" data-alt="Company logo placeholder abstract sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkNJQ8RjtKi5hE15-OSWjL1_VP6WVPeyS81UZzNPP5KSXdV7M0lD3J19A4OqFKYxwhOHhmwK6dRbd5ENlsnDbH6dJo1zRi3WXJ7XHW-16A68gwQJPpjy-g_VUh9t8JuVgqtWUc5UE9pKn4klyXj-gGVZLj7OZLcUrnEvuXM5nMHx-FOyw-BpBKmnuSJ5ZcflPVLpy7WPKqw0OS3UqWJ94_xIQbcWSFNwUdC98-Xy3cASSC6Sg3S4AkrjY084aWzwE9aq_F2EU2ETU" alt="RayForce Logo" />
                                        <p className="mt-4 text-sm font-semibold text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white">RayForce</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Industry Certifications Section */}
                        <section className="w-full bg-[#f0f4f0] py-16 dark:bg-[#1a2c1a]">
                            <div className="mx-auto flex max-w-[960px] flex-col px-4 md:px-10">
                                <div className="mb-10 flex flex-col items-center text-center">
                                    <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-[#111811] dark:text-white">Industry Certifications</h2>
                                    <p className="mt-3 max-w-lg text-gray-500 dark:text-gray-300">Our commitment to quality, safety, and environmental responsibility is verified by international standards bodies.</p>
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    {/* Cert 1 */}
                                    <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm dark:bg-background-dark">
                                        <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                            <span className="material-symbols-outlined text-4xl">verified</span>
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-[#111811] dark:text-white">ISO 9001:2015</h3>
                                        <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">Quality Management Systems Certified for consistent service.</p>
                                    </div>

                                    {/* Cert 2 */}
                                    <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm dark:bg-background-dark">
                                        <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                            <span className="material-symbols-outlined text-4xl">eco</span>
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-[#111811] dark:text-white">ISO 14001</h3>
                                        <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">Environmental Management for sustainable operations.</p>
                                    </div>

                                    {/* Cert 3 */}
                                    <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm dark:bg-background-dark">
                                        <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                                            <span className="material-symbols-outlined text-4xl">safety_check</span>
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-[#111811] dark:text-white">TUV Rheinland</h3>
                                        <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">Safety and Quality Standards for solar PV components.</p>
                                    </div>

                                    {/* Cert 4 */}
                                    <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm dark:bg-background-dark">
                                        <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                                            <span className="material-symbols-outlined text-4xl">bolt</span>
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-[#111811] dark:text-white">CE Certified</h3>
                                        <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">European Conformity for health, safety, and environmental protection.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Trusted By / Clients Section */}
                        <section className="w-full py-16">
                            <div className="mx-auto flex max-w-[960px] flex-col px-4 md:px-10">
                                <div className="mb-8 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-[#111811] dark:text-white">Trusted By Industry Leaders</h2>
                                    <a className="hidden text-sm font-bold text-primary hover:underline md:block" href="#">View all case studies</a>
                                </div>

                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                                    {/* Client 1 */}
                                    <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 p-4 grayscale transition-all hover:bg-white hover:grayscale-0 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <span className="text-xl font-bold text-gray-400 dark:text-gray-500">NEXUS</span>
                                    </div>

                                    {/* Client 2 */}
                                    <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 p-4 grayscale transition-all hover:bg-white hover:grayscale-0 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <span className="text-xl font-bold text-gray-400 dark:text-gray-500">GlobalBuild</span>
                                    </div>

                                    {/* Client 3 */}
                                    <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 p-4 grayscale transition-all hover:bg-white hover:grayscale-0 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <span className="text-xl font-bold text-gray-400 dark:text-gray-500">EcoMarts</span>
                                    </div>

                                    {/* Client 4 */}
                                    <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 p-4 grayscale transition-all hover:bg-white hover:grayscale-0 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <span className="text-xl font-bold text-gray-400 dark:text-gray-500">CityGrid</span>
                                    </div>

                                    {/* Client 5 */}
                                    <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 p-4 grayscale transition-all hover:bg-white hover:grayscale-0 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <span className="text-xl font-bold text-gray-400 dark:text-gray-500">FarmsInc</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-center md:hidden">
                                    <a className="text-sm font-bold text-primary hover:underline" href="#">View all case studies</a>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="w-full bg-background-light py-20 dark:bg-background-dark">
                            <div className="mx-auto flex max-w-[960px] flex-col items-center gap-6 px-4 text-center md:px-10">
                                <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.033em] text-[#111811] dark:text-white md:text-4xl">
                                    Ready to switch to solar?
                                </h2>
                                <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                    Partner with a certified expert today. We handle everything from consultation to installation and ongoing support.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-8 text-base font-bold leading-normal tracking-[0.015em] text-[#111811] transition-colors hover:bg-primary/90">
                                        Start Your Project
                                    </button>
                                    <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-[#dbe6db] bg-transparent px-8 text-base font-bold leading-normal tracking-[0.015em] text-[#111811] transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">
                                        Contact Sales
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>

                    <footer className="flex flex-col gap-6 border-t border-[#e5e8e5] px-10 py-10 dark:border-[#2a3c2a]">
                        <div className="mx-auto flex w-full max-w-[960px] flex-col gap-6">
                            <div className="flex flex-wrap items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-8 text-primary">
                                        <span className="material-symbols-outlined text-4xl">solar_power</span>
                                    </div>
                                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111811] dark:text-white">SolarTech</h2>
                                </div>

                                <div className="flex flex-wrap gap-8 text-sm font-medium text-[#111811] dark:text-gray-300">
                                    <a className="hover:text-primary" href="#">Privacy Policy</a>
                                    <a className="hover:text-primary" href="#">Terms of Service</a>
                                    <a className="hover:text-primary" href="#">Support</a>
                                </div>

                                <div className="flex gap-4 text-[#111811] dark:text-white">
                                    <a className="transition-colors hover:text-primary" href="#">
                                        {/* Social Icon Placeholder */}
                                        <span className="material-symbols-outlined">public</span>
                                    </a>
                                    <a className="transition-colors hover:text-primary" href="#">
                                        {/* Social Icon Placeholder */}
                                        <span className="material-symbols-outlined">mail</span>
                                    </a>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 SolarTech. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}