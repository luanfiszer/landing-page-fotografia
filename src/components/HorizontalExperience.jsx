import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sun, Camera, Waves, Heart, Sparkles, Eye } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        icon: Camera,
        color: 'sunset-orange',
        bgColor: 'bg-sunset-orange/10',
        title: 'Olhar de Publicitária',
        description:
            'Formada em publicidade, Raquel traz um olhar estratégico e criativo para cada ensaio.',
    },
    {
        icon: Sun,
        color: 'sun-yellow',
        bgColor: 'bg-sun-yellow/10',
        title: 'Luz Natural Carioca',
        description:
            'Especialista em capturar a luz dourada do Rio. O nascer e o pôr do sol são mágicos.',
    },
    {
        icon: Waves,
        color: 'ocean-blue',
        bgColor: 'bg-ocean-blue/10',
        title: 'Cenários Paradisíacos',
        description:
            'Das praias de Ipanema às ruas coloridas de Santa Teresa, locações escolhidas a dedo.',
    },
    {
        icon: Heart,
        color: 'sunset-orange',
        bgColor: 'bg-sunset-orange/10',
        title: 'Direção Natural',
        description:
            'Não sabe posar? Sem problema! Direção delicada para você se sentir livre.',
    },
    {
        icon: Sparkles,
        color: 'tropical-green',
        bgColor: 'bg-tropical-green/10',
        title: 'Edição Fine Art',
        description:
            'Edição artística exclusiva, com cores vibrantes e acabamento de revista.',
    },
    {
        icon: Eye,
        color: 'ocean-blue',
        bgColor: 'bg-ocean-blue/10',
        title: 'Estética Autêntica',
        description:
            'Cada ensaio reflete a sua personalidade, com a vibe solar do Rio.',
    },
]

const iconColors = {
    'sunset-orange': 'text-sunset-orange',
    'sun-yellow': 'text-sun-yellow',
    'ocean-blue': 'text-ocean-blue',
    'tropical-green': 'text-tropical-green',
}

function HorizontalExperience() {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    useEffect(() => {
        const mm = gsap.matchMedia()

        // Desktop Animation
        mm.add("(min-width: 768px)", () => {
            const pin = gsap.fromTo(
                sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    translateX: "-400vw", // Move enough to show the last section (500vw total - 100vw viewport)
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "3000 top",
                        scrub: 0.6,
                        pin: true,
                        anticipatePin: 1,
                    },
                }
            )
            return () => {
                pin.kill()
            }
        })

        return () => mm.revert()
    }, [])

    return (
        <section className="bg-warm-white relative">
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="flex flex-col md:flex-row w-full md:w-[500vw] h-auto md:h-screen relative items-center"
                >

                    {/* Intro Section */}
                    <div className="w-full md:w-[100vw] h-screen flex flex-col items-center justify-center px-6 shrink-0 sticky top-0 md:static">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-tropical-green/10 text-tropical-green font-[family-name:var(--font-outfit)] font-semibold text-sm tracking-wider uppercase mb-4">
                            A Experiência
                        </span>
                        <h2 className="font-[family-name:var(--font-outfit)] font-black text-5xl md:text-8xl text-deep-brown mb-6 text-center">
                            Por que escolher{' '}
                            <span className="bg-gradient-to-r from-tropical-green to-ocean-blue bg-clip-text text-transparent">
                                Raquel?
                            </span>
                        </h2>
                        <p className="font-[family-name:var(--font-inter)] text-warm-gray text-xl max-w-2xl mx-auto text-center leading-relaxed">
                            Mais que uma fotógrafa, uma diretora criativa. <br />
                            <span className="text-sm uppercase tracking-widest mt-8 block animate-pulse md:hidden">Role para baixo ↓</span>
                            <span className="text-sm uppercase tracking-widest mt-8 hidden md:block animate-pulse">Role para explorar →</span>
                        </p>
                    </div>

                    {/* Features Sections */}
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div key={index} className="w-full md:w-[50vw] h-auto md:h-full flex items-center justify-center px-6 py-12 md:p-10 shrink-0">
                                <div className="bg-white rounded-[40px] p-8 md:p-12 border border-sun-yellow/10 shadow-xl md:shadow-2xl shadow-sun-yellow/5 hover:border-sun-yellow/30 transition-all duration-500 w-full max-w-lg">
                                    <div className={`w-16 h-16 md:w-20 md:h-20 ${feature.bgColor} rounded-3xl flex items-center justify-center mb-6 md:mb-8`}>
                                        <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${iconColors[feature.color]}`} />
                                    </div>
                                    <h3 className="font-[family-name:var(--font-outfit)] font-black text-2xl md:text-3xl text-deep-brown mb-3 md:mb-4 uppercase tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="font-[family-name:var(--font-inter)] text-warm-gray text-base md:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                    {/* Outro Section */}
                    <div className="w-full md:w-[100vw] h-[60vh] md:h-screen flex flex-col items-center justify-center px-6 shrink-0">
                        <h2 className="font-[family-name:var(--font-outfit)] font-black text-4xl md:text-6xl text-deep-brown mb-8 text-center">
                            Pronta para brilhar?
                        </h2>
                        <a href="#contact" className="btn-solar text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6">
                            ☀️ Reservar meu lugar ao sol
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HorizontalExperience
