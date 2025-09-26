import { Dribbble, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { ReactNode } from "react"

export function MainLayout({ children }: { children: ReactNode }) {
    const navs = [
        {
            id: 1,
            href: '#works',
            title: 'WORKS',
        },
        {
            id: 2,
            href: '#about',
            title: 'ABOUT',
        },
        {
            id: 3,
            href: '#awards',
            title: 'AWARDS',
        }
    ]

    const socials = [
        {
            title: 'facebook',
            icon: <Facebook />
        },
        {
            title: 'youtube',
            icon: <Youtube />
        },
        {
            title: 'twitter',
            icon: <Twitter />
        }
    ]
    return (
        <div className="min-h-screen bg-[#FF5A52] text-white">
            {/* header  */}
            <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
                <a href="/" className="flex items-center gap-2">
                    <div className="bg-white text-[#FF5A52] px-3 py-1 rounded font-bold text-lg">OK</div>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-white rounded-full opacity-60" />
                        ))}
                    </div>
                </a>

                {/* navigations  */}
                <nav className="hidden md:flex items-center gap-8">
                    {navs.map(nav => (
                        <a key={nav.id} href={nav.href} className="hover:opacity-80 transition-opacity">
                            {nav.title}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {socials.map(social => (
                        <div key={social.title} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:border-2 hover:border-amber-300 transition-colors">
                            {social.icon}
                        </div>
                    ))}
                </div>
            </header>

            {children}

            <footer className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            You can find
                            <br />
                            me here:
                        </h3>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                                <Instagram className="w-6 h-6" />
                            </div>
                            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                <Twitter className="w-6 h-6" />
                            </div>
                            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                                <span className="text-xl font-bold">t</span>
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Facebook className="w-6 h-6" />
                            </div>
                            <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center">
                                <Dribbble className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="bg-white text-[#FF5A52] px-3 py-1 rounded font-bold text-lg">OK</div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-white rounded-full opacity-60" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white/20">
                    <nav className="flex gap-8 mb-4 md:mb-0">
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            WORKS
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            ABOUT
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            AWARDS
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            CONTACTS
                        </a>
                    </nav>
                    <p className="text-sm opacity-60">© 2023 Oskar Kadera. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
