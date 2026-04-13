import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sun, Camera, Waves, Heart, Sparkles, Eye } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        icon: Camera,
        title: 'Olhar de Publicitária',
        description:
            'Formada em publicidade, Raquel traz um olhar estratégico e criativo para capturar sua melhor versão.',
    },
    {
        icon: Sun,
        title: 'Luz Natural Carioca',
        description:
            'Especialista em capturar a luz dourada do Rio. O nascer e o pôr do sol são nossos maiores aliados.',
    },
    {
        icon: Waves,
        title: 'Cenários Icônicos',
        description:
            'Das praias de Ipanema às ruas históricas, locações escolhidas para elevar sua estética.',
    },
    {
        icon: Heart,
        title: 'Direção Delicada',
        description:
            'Nossa direção garante que você se sinta livre e autêntica, mesmo sem experiência em posar.',
    },
    {
        icon: Sparkles,
        title: 'Edição Fine Art',
        description:
            'Tratamento de imagem exclusivo que valoriza as cores quentes e a textura natural da pele.',
    },
    {
        icon: Eye,
        title: 'Estética Vibrante',
        description:
            'Cada ensaio é uma obra de arte que reflete sua personalidade com a alma solar do Rio.',
    },
]

function HorizontalExperience() {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    useEffect(() => {
        const mm = gsap.matchMedia()

        mm.add("(min-width: 768px)", () => {
            const pin = gsap.fromTo(
                sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    translateX: "-400vw",
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "2500 top",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    },
                }
            )
            return () => pin.kill()
        })

        return () => mm.revert()
    }, [])

    return (
        <section className="bg-brand-bg relative overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
            
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="flex flex-col md:flex-row w-full md:w-[500vw] items-center"
                >

                    {/* Intro Section */}
                    <div className="w-full md:w-[100vw] min-h-[70vh] md:h-screen flex flex-col items-start justify-center px-6 md:px-24 py-20 md:py-0 shrink-0">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-display font-bold text-[10px] uppercase tracking-widest border border-accent/20 mb-8">
                            Nossa Experiência
                        </span>
                        <h2 className="font-display font-bold text-5xl md:text-9xl text-brand-text mb-8 tracking-tighter leading-[0.85]">
                            O Toque <br />
                            <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Raquel Paiva</span>.
                        </h2>
                        <p className="text-brand-text/60 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
                            Criamos uma jornada visual onde a luz do sol abraça sua história, transformando momentos em memórias editoriais.
                        </p>
                    </div>

                    {/* Features Sections */}
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div key={index} className="w-full md:w-[50vw] h-auto md:h-screen flex items-center justify-center p-6 md:p-12 shrink-0">
                                <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 border border-brand-text/5 hover:border-accent/40 shadow-xl shadow-brand-text/5 transition-all duration-700 w-full md:h-[60vh] flex flex-col justify-center gap-6 md:gap-8 group">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-brand-bg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                                    </div>
                                    <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-text tracking-tight uppercase leading-none">
                                        {feature.title}
                                    </h3>
                                    <p className="text-brand-text/50 text-base md:text-xl leading-snug font-medium max-w-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                    {/* Outro Section */}
                    <div className="w-full md:w-[100vw] min-h-[60vh] md:h-screen flex flex-col items-center justify-center px-6 py-20 md:py-0 shrink-0">
                        <h2 className="font-display font-bold text-5xl md:text-8xl text-brand-text mb-12 text-center tracking-tighter leading-[0.85]">
                            Pronta para brilhar <br />
                            <span className="text-accent underline decoration-accent/20 underline-offset-8 font-bold italic">sob o sol?</span>
                        </h2>
                        <a href="#contact" className="btn-premium px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl shadow-2xl shadow-accent/20 !bg-accent !text-white !border-none w-full md:w-auto text-center">
                            Falar com a Raquel
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HorizontalExperience
