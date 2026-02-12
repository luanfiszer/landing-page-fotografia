import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Rebecca Corrêa',
        role: 'Ensaio de Aniversário',
        quote:
            'Raquel capturou exatamente a vibe que eu queria! As fotos ficaram tão naturais e cheias de vida. Me senti uma deusa na praia de Ipanema! 🌊',
        avatar: '🧡',
        rating: 5,
    },
    {
        name: 'Sarah Souza',
        role: 'Ensaio de Casal',
        quote:
            'Eu e meu noivo estávamos super nervosos, mas a Raquel nos deixou tão à vontade que esquecemos da câmera. O resultado? Fotos dignas de capa de revista!',
        avatar: '💛',
        rating: 5,
    },
    {
        name: 'Carol Ferreira',
        role: 'Ensaio Solo',
        quote:
            'A melhor fotógrafa do Rio, sem dúvida! Ela sabe exatamente como usar a luz natural carioca pra criar aquela mágica que só o Rio tem. Amei cada foto!',
        avatar: '🌺',
        rating: 5,
    },
    {
        name: 'Jayna Vieira',
        role: 'Ensaio de Família',
        quote:
            'Raquel conseguiu fotografar meus filhos correndo na praia com uma naturalidade incrível. As fotos parecem saídas de um filme. Emoção pura!',
        avatar: '🌻',
        rating: 5,
    },
]

function TestimonialsSection() {
    const titleRef = useRef(null)
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' })

    return (
        <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
            {/* Colorful wave background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sun-yellow/5 via-warm-white to-ocean-blue/5" />

            {/* Top decorative wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C480,0 960,100 1440,40 L1440,0 L0,0 Z"
                        fill="#FFFDF9"
                    />
                </svg>
            </div>

            {/* Decorative blobs */}
            <div className="organic-blob w-80 h-80 bg-sun-yellow top-20 right-10" />
            <div className="organic-blob w-60 h-60 bg-ocean-blue bottom-20 left-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-sun-yellow/10 text-sun-yellow font-[family-name:var(--font-outfit)] font-semibold text-sm tracking-wider uppercase mb-4"
                    >
                        Depoimentos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-[family-name:var(--font-outfit)] font-black text-4xl md:text-6xl text-deep-brown mb-4"
                    >
                        O que dizem{' '}
                        <span className="bg-gradient-to-r from-sun-yellow to-sunset-orange bg-clip-text text-transparent">
                            sobre mim
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-[family-name:var(--font-inter)] text-warm-gray text-lg max-w-xl mx-auto"
                    >
                        Histórias reais de clientes que viveram a experiência solar.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => {
                        const ref = useRef(null)
                        const isInView = useInView(ref, { once: true, margin: '-50px' })

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                                className="testimonial-card relative"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6">
                                    <Quote className="w-8 h-8 text-sun-yellow/20" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-sun-yellow fill-sun-yellow"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="font-[family-name:var(--font-inter)] text-deep-brown/80 leading-relaxed mb-6 text-[0.95rem]">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">{testimonial.avatar}</span>
                                    <div>
                                        <h4 className="font-[family-name:var(--font-outfit)] font-bold text-deep-brown">
                                            {testimonial.name}
                                        </h4>
                                        <p className="font-[family-name:var(--font-inter)] text-warm-gray text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
