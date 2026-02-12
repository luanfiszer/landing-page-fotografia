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
import CustomCursor from './components/CustomCursor'
import { useGoldenHour } from './hooks/useGoldenHour'

gsap.registerPlugin(ScrollTrigger)

function App() {
    // Enable Golden Hour mode
    useGoldenHour()

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
        <div className="min-h-screen bg-sand-beige text-deep-brown overflow-x-hidden selection:bg-sun-yellow selection:text-white">
            <CustomCursor />
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
