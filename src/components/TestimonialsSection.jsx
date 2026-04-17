import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Rebecca Corrêa',
        role: 'Ensaio de Aniversário',
        quote:
            'Raquel capturou exatamente a vibe que eu queria. As fotos ficaram naturais e cheias de vida. Me senti extremamente confiante durante todo o processo no Rio.',
        initials: 'RC',
        rating: 5,
    },
    {
        name: 'Sarah Souza',
        role: 'Ensaio de Casal',
        quote:
            'Eu e meu noivo estávamos super nervosos, mas a Raquel nos deixou tão à vontade que esquecemos da câmera. O resultado superou nossas expectativas.',
        initials: 'SS',
        rating: 5,
    },
    {
        name: 'Carol Ferreira',
        role: 'Ensaio Solo',
        quote:
            'A melhor fotógrafa que já conheci. Ela sabe exatamente como usar a luz natural para criar aquela estética autoral que eu estava buscando.',
        initials: 'CF',
        rating: 5,
    },
    {
        name: 'Jayna Vieira',
        role: 'Ensaio de Família',
        quote:
            'Raquel conseguiu fotografar meus filhos correndo na praia com uma naturalidade incrível. As fotos registram momentos espontâneos e reais.',
        initials: 'JV',
        rating: 5,
    },
]

function TestimonialsSection() {
    const titleRef = useRef(null)
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' })

    return (
        <section id="testimonials" className="relative py-20 md:py-40 bg-brand-bg overflow-hidden">
            {/* Solar Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Section Header - Right Aligned (Asymmetric) */}
                <div ref={titleRef} className="flex flex-col items-end text-right mb-12 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-display font-bold text-[10px] uppercase tracking-widest border border-accent/20 mb-8"
                    >
                        Depoimentos Reais
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: 30 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display font-bold text-6xl md:text-8xl text-brand-text mb-8 tracking-tighter leading-[0.85]"
                    >
                        Histórias sob <br />
                        <span className="text-accent underline decoration-accent/20 underline-offset-8">o Sol</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-brand-text/60 text-xl max-w-[40ch] leading-tight font-medium"
                    >
                        A jornada capturada sob a lente de Raquel Paiva através dos olhos de quem viveu a experiência.
                    </motion.p>
                </div>

                {/* Testimonials Grid - Asymmetric Stagger */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => {
                        const ref = useRef(null)
                        const isInView = useInView(ref, { once: true, margin: '-50px' })

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`p-10 rounded-[3rem] bg-white border border-brand-text/5 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 shadow-sm will-change-transform ${
                                    index % 2 !== 0 ? 'md:mt-16' : ''
                                }`}
                            >
                                <div>
                                    <Quote className="w-10 h-10 text-accent/10 mb-8" />
                                    <p className="text-brand-text/70 leading-snug mb-12 text-lg font-medium">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center font-display font-bold text-lg shadow-lg shadow-accent/20">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-brand-text text-xl leading-none mb-1">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-accent font-display font-bold text-[10px] uppercase tracking-widest">
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
