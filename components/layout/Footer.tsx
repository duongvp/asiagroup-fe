import { Facebook, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-background-light dark:bg-background-dark pt-16 pb-8 px-6 border-t border-gray-200 dark:border-white/5" >
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-foreground">
                        <Image src="/asiagroup_solar.png" alt="Logo" width={286} height={63} style={{ width: "auto", height: "auto" }} />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Empowering homes with clean, renewable energy solutions since 2010.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-foreground mb-4">Services</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                        {['Residential Solar', 'Commercial Solar', 'Battery Storage', 'Maintenance'].map((item) => (
                            <li key={item}>
                                <a className="hover:text-primary transition-colors" href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-foreground mb-4">Company</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                        {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                            <li key={item}>
                                <a className="hover:text-primary transition-colors" href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-foreground mb-4">Connect</h4>
                    <div className="flex gap-4">
                        <a
                            className="size-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            href="#"
                        >

                            <Mail size={18} />
                        </a>
                        <a
                            className="size-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            href="#"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            className="size-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            href="#"
                        >
                            <Phone size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Solar Company. All rights reserved.</p>
                <div className="flex gap-6 text-xs text-gray-500 dark:text-gray-400">
                    <a className="hover:text-primary" href="#">Privacy Policy</a>
                    <a className="hover:text-primary" href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
;