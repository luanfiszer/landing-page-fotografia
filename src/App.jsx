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
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
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
            {/* Grain Overlay */}
            <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
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
