import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-4 group">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent/20">
                        <img
                            src="/images/logo.jpg"
                            alt="Raquel Paiva"
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                        />
                    </div>
                    <div>
                        <span className="font-display font-bold text-lg text-brand-text tracking-tight block leading-none">
                            Raquel <span className="text-accent underline decoration-accent/20 underline-offset-2">Paiva</span>
                        </span>
                        <span className="text-[10px] font-display text-brand-gray uppercase tracking-[0.3em] block leading-none mt-1">
                            Fine Art Vision
                        </span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-display text-sm font-semibold text-brand-text/60 hover:text-accent transition-colors duration-300 relative group/link"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/link:w-full" />
                            </a>
                        ))}
                    </div>
                    <a href="#contact" className="btn-premium !py-2.5 !px-6 text-sm">
                        Agendar Ensaio
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-brand-text p-2"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-0 top-0 left-0 w-full h-screen bg-brand-bg z-40 flex flex-col p-8 md:hidden"
                >
                    <div className="flex justify-between items-center mb-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/20">
                                <img src="/images/logo.jpg" alt="Raquel Paiva" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-display font-bold text-lg text-brand-text tracking-tighter">RAQUEL PAIVA</span>
                        </div>
                        <button onClick={() => setMobileOpen(false)} className="text-brand-text p-2">
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-8">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setMobileOpen(false)}
                                className="font-display text-5xl font-bold text-brand-text tracking-tighter"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <a 
                            href="#contact" 
                            onClick={() => setMobileOpen(false)}
                            className="btn-premium w-full py-6 text-center text-xl !bg-accent !text-white !border-none"
                        >
                            Agendar Ensaio
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}

export default Navbar
