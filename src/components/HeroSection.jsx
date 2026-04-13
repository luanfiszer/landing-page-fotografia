import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { MapPin } from 'lucide-react'

function HeroSection() {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const badgeRef = useRef(null)
    const scrollRef = useRef(null)
    const bgRef = useRef(null)
    const overlayRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
            const titleSplit = new SplitType(titleRef.current, { types: 'lines,words,chars' })

            // Entrance animation
            tl.from(bgRef.current, { scale: 1.2, duration: 2, ease: 'power2.out' })
                .from(badgeRef.current, { opacity: 0, y: 20, duration: 0.8 }, '-=1.2')
                .from(titleSplit.chars, { opacity: 0, y: 40, stagger: 0.01, duration: 1 }, '-=1')
                .from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.8 }, '-=0.8')
                .from(ctaRef.current.children, { opacity: 0, y: 10, stagger: 0.1, duration: 0.6 }, '-=0.6')

            // Scroll Parallax + Overlay Darkening
            gsap.to(bgRef.current, {
                yPercent: 30,
                scale: 1.1,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            })

            gsap.to(overlayRef.current, {
                backgroundColor: 'rgba(45, 27, 20, 0.8)',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-[100dvh] flex items-center overflow-hidden"
        >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <div 
                    ref={bgRef}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=80')` 
                    }}
                />
                {/* Dynamic Gradient Overlay */}
                <div 
                    ref={overlayRef}
                    className="absolute inset-0 bg-gradient-to-b from-brand-text/40 via-brand-text/20 to-brand-bg z-10 transition-colors duration-500" 
                />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl py-20 lg:py-0">
                    <div ref={badgeRef} className="mb-8 lg:mb-10">
                        <span className="inline-flex items-center gap-2 px-4 lg:px-5 py-1.5 lg:py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-display font-bold text-[9px] lg:text-[10px] uppercase tracking-[0.3em] border border-white/20">
                            <MapPin className="w-3 h-3 text-accent" />
                            Rio de Janeiro, Brasil
                        </span>
                    </div>

                    <h1
                        ref={titleRef}
                        className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] leading-[0.85] lg:leading-[0.8] tracking-tighter text-white mb-10 lg:mb-12 drop-shadow-2xl"
                    >
                        Visão <br />
                        <span className="text-accent">Solar</span>.
                    </h1>

                    <p
                        ref={subtitleRef}
                        className="text-lg sm:text-xl md:text-3xl text-white/80 max-w-[25ch] lg:max-w-[30ch] mb-12 lg:mb-16 leading-tight font-medium drop-shadow-lg"
                    >
                        A luz do Rio encontra sua essência em retratos autorais com estética vibrante.
                    </p>

                    <div
                        ref={ctaRef}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 lg:gap-10"
                    >
                        <a href="#contact" className="btn-premium !bg-accent !text-white !border-none !px-8 lg:!px-10 !py-5 lg:!py-6 text-lg lg:text-xl shadow-2xl shadow-accent/20 text-center">
                            Reservar Ensaio
                        </a>
                        <a
                            href="#portfolio"
                            className="group flex items-center justify-center sm:justify-start gap-4 font-display font-bold text-white uppercase text-[10px] lg:text-xs tracking-widest transition-colors"
                        >
                            Explorar Portfolio
                            <div className="relative hidden sm:flex items-center">
                                <span className="w-12 h-[2px] bg-white group-hover:bg-accent transition-all duration-300 group-hover:w-20" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollRef}
                className="absolute bottom-12 left-6 lg:left-12 flex flex-col items-center gap-4 group z-20"
            >
                <span className="font-display text-[10px] uppercase tracking-[0.4em] text-white/40 [writing-mode:vertical-lr] group-hover:text-accent transition-colors cursor-default">
                    Scroll
                </span>
                <div className="w-[2px] h-16 bg-white/10 group-hover:h-24 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-infinite-scroll" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
