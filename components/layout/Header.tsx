import Image from "next/image";

export default function Header() {
    const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

    const toggleDarkMode = () => {
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark');
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md dark:bg-background-dark/90 border-b border-gray-200 dark:border-white/10">
            <div className="flex items-center justify-between px-6 py-4 max-w-[1280px] mx-auto">
                <div className="flex items-center gap-3 text-foreground">
                    <Image src="/asiagroup_solar.png" alt="Logo" width={286} height={58} style={{ width: "auto", height: "auto" }} />
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex items-center gap-8">
                        <a className="text-foreground text-sm font-semibold hover:text-primary transition-colors" href="#">
                            Residential
                        </a>
                        <a className="text-foreground text-sm font-semibold hover:text-primary transition-colors" href="#">
                            Commercial
                        </a>
                        <a className="text-foreground text-sm font-semibold hover:text-primary transition-colors" href="#">
                            About
                        </a>
                        <a className="text-foreground text-sm font-semibold hover:text-primary transition-colors" href="#">
                            Contact
                        </a>
                    </nav>
                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-green-400 transition-colors text-primary-foreground text-sm font-bold shadow-sm hover:shadow-md">
                        <span className="truncate">Get a Quote</span>
                    </button>
                </div>

                {/* Mobile Menu Icon & Dark Mode Toggle */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={toggleDarkMode}
                        className="text-foreground p-2"
                    >
                        <span className="material-symbols-outlined">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <button className="text-foreground">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}