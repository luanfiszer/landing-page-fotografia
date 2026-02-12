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
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-2 group">
                    <Sun className="w-8 h-8 text-sun-yellow transition-transform duration-500 group-hover:rotate-180" />
                    <span className="font-[family-name:var(--font-outfit)] font-bold text-xl text-deep-brown tracking-tight">
                        Raquel<span className="text-sunset-orange">Paiva</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-[family-name:var(--font-inter)] text-sm font-medium text-deep-brown/70 hover:text-sunset-orange transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-sun-yellow after:to-sunset-orange after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="btn-solar text-sm !py-3 !px-6">
                        Agendar Ensaio
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-deep-brown p-2"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass-nav border-t border-sun-yellow/10"
                >
                    <div className="px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="font-[family-name:var(--font-inter)] text-base font-medium text-deep-brown/80 hover:text-sunset-orange transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" className="btn-solar text-center text-sm mt-2">
                            Agendar Ensaio
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}

export default Navbar
