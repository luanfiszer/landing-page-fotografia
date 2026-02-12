import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ChevronDown, MapPin } from 'lucide-react'

function HeroSection() {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const badgeRef = useRef(null)
    const scrollRef = useRef(null)
    const bgRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

            // Split text using SplitType
            const titleSplit = new SplitType(titleRef.current, { types: 'lines,words,chars' })

            tl.from(bgRef.current, {
                scale: 1.2,
                duration: 2.5,
                ease: 'power2.out'
            })
                .from(badgeRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8
                }, '-=1.8')
                .from(titleSplit.chars, {
                    opacity: 0,
                    y: 100,
                    rotateX: -90,
                    stagger: 0.02,
                    duration: 0.8,
                }, '-=1.5')
                .from(subtitleRef.current, {
                    opacity: 0,
                    y: 30,
                    duration: 1
                }, '-=0.8')
                .from(ctaRef.current.children, {
                    opacity: 0,
                    y: 20,
                    stagger: 0.2,
                    duration: 0.8
                }, '-=0.6')
                .from(scrollRef.current, {
                    opacity: 0,
                    duration: 1
                }, '-=0.4')

            // Floating animation for sun flare
            gsap.to('.sun-flare-animated', {
                x: '20px',
                y: '20px',
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    ref={bgRef}
                    src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=80"
                    alt="Fotografia vibrante do Rio de Janeiro"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sand-beige/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-sun-yellow/10 via-transparent to-sunset-orange/10" />
            </div>

            {/* Sun Flare Effect */}
            <div className="sun-flare-animated absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_top_right] from-sun-yellow/20 via-sunset-orange/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div ref={badgeRef}>
                    <span className="inline-block px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sunset-orange font-[family-name:var(--font-outfit)] font-semibold text-sm tracking-wider uppercase mb-6 border border-sun-yellow/20">
                        <MapPin className="inline-block w-4 h-4 mr-2 -mt-1" />
                        Rio de Janeiro, Brasil
                    </span>
                </div>

                <h1
                    ref={titleRef}
                    className="font-[family-name:var(--font-outfit)] font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.15)] perspective-[1000px] break-words"
                    style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
                >
                    Sua Essência, na Vibe Solar do Rio.
                </h1>

                <p
                    ref={subtitleRef}
                    className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                >
                    Ensaios fotográficos com alma carioca e estética vibrante por{' '}
                    <strong className="text-sun-yellow-light">Raquel Paiva</strong>.
                </p>

                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="btn-solar text-lg">
                        ☀️ Agendar meu Ensaio Solar
                    </a>
                    <a
                        href="#portfolio"
                        className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-[family-name:var(--font-outfit)] font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                        Ver Portfolio
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollRef}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="animate-bounce">
                    <ChevronDown className="w-8 h-8 text-white/60" />
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,50 1440,40 L1440,100 L0,100 Z"
                        fill="#FDF6EC"
                    />
                </svg>
            </div>
        </section>
    )
}

export default HeroSection
