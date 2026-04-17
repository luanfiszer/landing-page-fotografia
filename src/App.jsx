import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PortfolioSection from './components/PortfolioSection'
import HorizontalExperience from './components/HorizontalExperience'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {

    useEffect(() => {
        // Only initialize Lenis on desktop/large screens (>= 1024px)
        // Mobile browsers handle smooth scrolling natively and better on touch
        if (window.innerWidth < 1024) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="min-h-[100dvh] bg-brand-bg text-brand-text overflow-x-hidden selection:bg-accent selection:text-white font-sans">
            {/* Grain Overlay - Optimized for mobile by using standard opacity and no complex blend modes if possible */}
            <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] md:mix-blend-overlay"></div>
            
            <Navbar />
            <main>
                <HeroSection />
                <PortfolioSection />
                <HorizontalExperience />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}

export default App
