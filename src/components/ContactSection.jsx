import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, MapPin, Phone, Mail, Instagram } from 'lucide-react'

function ContactSection() {
    const titleRef = useRef(null)
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Mensagem enviada com sucesso! ☀️ Entrarei em contato em breve.')
    }

    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sand-beige via-warm-white to-sun-yellow/5" />

            {/* Sun flare decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-[at_top_right] from-sun-yellow/15 via-sunset-orange/5 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial-[at_bottom_left] from-ocean-blue/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-sunset-orange/10 text-sunset-orange font-[family-name:var(--font-outfit)] font-semibold text-sm tracking-wider uppercase mb-4"
                    >
                        Contato
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-[family-name:var(--font-outfit)] font-black text-4xl md:text-6xl text-deep-brown mb-4"
                    >
                        Vamos Criar{' '}
                        <span className="bg-gradient-to-r from-sunset-orange to-sun-yellow bg-clip-text text-transparent">
                            Mágica Juntos?
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-[family-name:var(--font-inter)] text-warm-gray text-lg max-w-xl mx-auto"
                    >
                        Preencha o formulário e vamos planejar o ensaio dos seus sonhos.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-2 flex flex-col gap-8"
                    >
                        <div className="bg-white rounded-3xl p-8 border border-sun-yellow/10 shadow-sm">
                            <h3 className="font-[family-name:var(--font-outfit)] font-bold text-xl text-deep-brown mb-6">
                                Informações
                            </h3>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-sunset-orange/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-sunset-orange" />
                                    </div>
                                    <div>
                                        <p className="font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm">
                                            Localização
                                        </p>
                                        <p className="font-[family-name:var(--font-inter)] text-warm-gray text-sm">
                                            Rio de Janeiro, RJ
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-ocean-blue/10 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-ocean-blue" />
                                    </div>
                                    <div>
                                        <p className="font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm">
                                            WhatsApp
                                        </p>
                                        <p className="font-[family-name:var(--font-inter)] text-warm-gray text-sm">
                                            (21) 97979-1536
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-sun-yellow/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-sun-yellow" />
                                    </div>
                                    <div>
                                        <p className="font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm">
                                            Email
                                        </p>
                                        <p className="font-[family-name:var(--font-inter)] text-warm-gray text-sm">
                                            assessoriaraquelpaiva@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-tropical-green/10 flex items-center justify-center">
                                        <Instagram className="w-5 h-5 text-tropical-green" />
                                    </div>
                                    <div>
                                        <p className="font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm">
                                            Instagram
                                        </p>
                                        <p className="font-[family-name:var(--font-inter)] text-warm-gray text-sm">
                                            @paiva.vision
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick CTA */}
                        <div className="bg-gradient-to-br from-sun-yellow to-sunset-orange rounded-3xl p-8 text-white">
                            <h3 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-3">
                                Prefere WhatsApp? 💬
                            </h3>
                            <p className="font-[family-name:var(--font-inter)] text-white/90 text-sm mb-5 leading-relaxed">
                                Me chama direto no WhatsApp para combinarmos os detalhes do seu ensaio!
                            </p>
                            <a
                                href="https://wa.me/5521979791536"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sunset-orange font-[family-name:var(--font-outfit)] font-bold rounded-full hover:bg-white/90 transition-all duration-300 text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                Chamar no WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-8 md:p-10 border border-sun-yellow/10 shadow-sm"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label className="block font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm mb-2">
                                        Seu Nome
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Como posso te chamar?"
                                        className="solar-input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="seu@email.com"
                                        className="solar-input"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label className="block font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm mb-2">
                                        Telefone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(21) 97979-1536"
                                        className="solar-input"
                                    />
                                </div>
                                <div>
                                    <label className="block font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm mb-2">
                                        Tipo de Ensaio
                                    </label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="solar-input"
                                    >
                                        <option value="">Selecione...</option>
                                        <option value="solo">Ensaio Solo</option>
                                        <option value="casal">Ensaio de Casal</option>
                                        <option value="familia">Ensaio Família</option>
                                        <option value="aniversario">Aniversário</option>
                                        <option value="corporativo">Corporativo</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block font-[family-name:var(--font-outfit)] font-semibold text-deep-brown text-sm mb-2">
                                    Mensagem
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Conte um pouco sobre o ensaio que você sonha... ✨"
                                    rows={5}
                                    className="solar-input resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-solar w-full flex items-center justify-center gap-3 text-lg"
                            >
                                <Send className="w-5 h-5" />
                                Enviar Mensagem Solar ☀️
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
