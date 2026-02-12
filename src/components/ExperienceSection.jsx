import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sun, Camera, Waves, Heart, Sparkles, Eye } from 'lucide-react'

const features = [
    {
        icon: Camera,
        color: 'sunset-orange',
        bgColor: 'bg-sunset-orange/10',
        title: 'Olhar de Publicitária',
        description:
            'Formada em publicidade, Raquel traz um olhar estratégico e criativo para cada ensaio. Cada foto é pensada para contar a sua história.',
    },
    {
        icon: Sun,
        color: 'sun-yellow',
        bgColor: 'bg-sun-yellow/10',
        title: 'Luz Natural Carioca',
        description:
            'Especialista em capturar a luz dourada do Rio. O nascer e o pôr do sol são suas ferramentas favoritas para criar magia.',
    },
    {
        icon: Waves,
        color: 'ocean-blue',
        bgColor: 'bg-ocean-blue/10',
        title: 'Cenários Paradisíacos',
        description:
            'Das praias de Ipanema às ruas coloridas de Santa Teresa, cada locação é escolhida a dedo para o seu ensaio.',
    },
    {
        icon: Heart,
        color: 'sunset-orange',
        bgColor: 'bg-sunset-orange/10',
        title: 'Direção Natural',
        description:
            'Não sabe posar? Sem problema! Raquel dirige cada momento com delicadeza para que você se sinta natural e livre.',
    },
    {
        icon: Sparkles,
        color: 'tropical-green',
        bgColor: 'bg-tropical-green/10',
        title: 'Edição Fine Art',
        description:
            'Cada foto passa por uma edição artística exclusiva, com cores vibrantes e acabamento de revista de moda.',
    },
    {
        icon: Eye,
        color: 'ocean-blue',
        bgColor: 'bg-ocean-blue/10',
        title: 'Estética Autêntica',
        description:
            'Nada de fotos genéricas. Cada ensaio reflete a sua personalidade, com a vibe solar e descontraída do Rio.',
    },
]

const iconColors = {
    'sunset-orange': 'text-sunset-orange',
    'sun-yellow': 'text-sun-yellow',
    'ocean-blue': 'text-ocean-blue',
    'tropical-green': 'text-tropical-green',
}

function ExperienceSection() {
    const titleRef = useRef(null)
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' })

    return (
        <section id="experience" className="relative py-24 md:py-32 bg-warm-white overflow-hidden">
            {/* Top Wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,50 L1440,80 L0,80 Z"
                        fill="#FDF6EC"
                    />
                </svg>
            </div>

            {/* Decorative elements */}
            <div className="organic-blob w-96 h-96 bg-tropical-green top-1/4 -right-48" />
            <div className="organic-blob w-72 h-72 bg-sun-yellow bottom-1/4 -left-36" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-tropical-green/10 text-tropical-green font-[family-name:var(--font-outfit)] font-semibold text-sm tracking-wider uppercase mb-4"
                    >
                        A Experiência
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-[family-name:var(--font-outfit)] font-black text-4xl md:text-6xl text-deep-brown mb-6"
                    >
                        Por que escolher{' '}
                        <span className="bg-gradient-to-r from-tropical-green to-ocean-blue bg-clip-text text-transparent">
                            Raquel?
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-[family-name:var(--font-inter)] text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Mais que uma fotógrafa, uma diretora criativa que transforma momentos em obras de arte
                        com a energia solar do Rio de Janeiro.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const ref = useRef(null)
                        const isInView = useInView(ref, { once: true, margin: '-50px' })
                        const IconComponent = feature.icon

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                                className="group bg-white rounded-3xl p-8 border border-sun-yellow/10 hover:border-sun-yellow/30 transition-all duration-500 hover:shadow-xl hover:shadow-sun-yellow/5 hover:-translate-y-1"
                            >
                                <div
                                    className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <IconComponent className={`w-7 h-7 ${iconColors[feature.color]}`} />
                                </div>
                                <h3 className="font-[family-name:var(--font-outfit)] font-bold text-xl text-deep-brown mb-3">
                                    {feature.title}
                                </h3>
                                <p className="font-[family-name:var(--font-inter)] text-warm-gray leading-relaxed text-[0.95rem]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
