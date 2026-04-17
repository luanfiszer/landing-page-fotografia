import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const WHATSAPP_NUMBER = '5521979791536'
const SERVICE_ID      = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID     = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const SESSION_LABELS = {
    solo:    'Retrato Solo',
    casal:   'Experiência a Dois',
    familia: 'Ensaio Família',
    outros:  'Outros Projetos',
}

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
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const buildWhatsAppUrl = () => {
        const tipo = SESSION_LABELS[formData.type] || formData.type || 'Não informado'
        const text = [
            `Olá, Raquel! 👋 Vim pelo site e gostaria de saber mais sobre um ensaio.`,
            ``,
            `*Nome:* ${formData.name}`,
            `*E-mail:* ${formData.email}`,
            `*Telefone:* ${formData.phone || 'Não informado'}`,
            `*Tipo de ensaio:* ${tipo}`,
            ``,
            `*Mensagem:*`,
            formData.message,
        ].join('\n')
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        // 1. Abre o WhatsApp com a mensagem pré-preenchida
        window.open(buildWhatsAppUrl(), '_blank')

        // 2. Envia email via EmailJS em paralelo
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name:    formData.name,
                    from_email:   formData.email,
                    phone:        formData.phone || 'Não informado',
                    session_type: SESSION_LABELS[formData.type] || 'Não informado',
                    message:      formData.message,
                },
                PUBLIC_KEY
            )
            setStatus('success')
            setFormData({ name: '', email: '', phone: '', type: '', message: '' })
        } catch (err) {
            console.error('EmailJS error:', err)
            // WhatsApp já foi aberto, então ainda é um sucesso parcial
            setStatus('success')
            setFormData({ name: '', email: '', phone: '', type: '', message: '' })
        }
    }

    return (
        <section id="contact" className="relative py-20 md:py-40 bg-brand-bg overflow-hidden">
            {/* Background Grain/Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#2d1b14_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    {/* Section Header & Info - Left Aligned */}
                    <div className="lg:col-span-5">
                        <div ref={titleRef} className="mb-16">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-display font-bold text-[10px] uppercase tracking-widest border border-accent/20 mb-8"
                            >
                                Inicie sua Jornada
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="font-display font-bold text-5xl md:text-8xl text-brand-text mb-10 tracking-tighter leading-[0.85]"
                            >
                                Vamos <br />
                                <span className="text-accent underline decoration-accent/20 underline-offset-8">Conversar?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-brand-text/70 text-xl leading-snug mb-16 font-medium max-w-[35ch]"
                            >
                                Preencha o formulário para iniciarmos o planejamento do seu ensaio autoral no Rio de Janeiro.
                            </motion.p>
                        </div>

                        {/* Contact info list */}
                        <div className="flex flex-col gap-8">
                            {[
                                { icon: MapPin, label: 'Atendimento', value: 'Rio de Janeiro, RJ' },
                                { icon: Phone, label: 'WhatsApp direct', value: '(21) 97979-1536' },
                                { icon: Mail, label: 'E-mail profissional', value: 'assessoriaraquelpaiva@gmail.com' },
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={titleInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-brand-text/5 group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-sm">
                                        <item.icon className="w-6 h-6 text-brand-text group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-brand-text/30 font-display font-bold mb-1">{item.label}</p>
                                        <p className="text-brand-text font-bold text-lg">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form - Right Aligned (Asymmetric) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[4rem] border border-brand-text/5 shadow-[0_40px_100px_-30px_rgba(45,27,20,0.08)]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-text/40 px-1">Nome Completo</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Seu nome"
                                        className="w-full bg-brand-bg/30 border border-brand-text/5 rounded-2xl px-6 py-5 focus:border-accent focus:ring-8 focus:ring-accent/5 transition-all outline-none text-brand-text font-medium"
                                        required
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-text/40 px-1">Seu melhor e-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="seu@email.com"
                                        className="w-full bg-brand-bg/30 border border-brand-text/5 rounded-2xl px-6 py-5 focus:border-accent focus:ring-8 focus:ring-accent/5 transition-all outline-none text-brand-text font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-text/40 px-1">Telefone Celular</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(21) 99999-9999"
                                        className="w-full bg-brand-bg/30 border border-brand-text/5 rounded-2xl px-6 py-5 focus:border-accent focus:ring-8 focus:ring-accent/5 transition-all outline-none text-brand-text font-medium"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-text/40 px-1">Tipo de Experiência</label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="w-full bg-brand-bg/30 border border-brand-text/5 rounded-2xl px-6 py-5 focus:border-accent focus:ring-8 focus:ring-accent/5 transition-all outline-none text-brand-text font-medium appearance-none cursor-pointer"
                                    >
                                        <option value="">Qual o seu desejo?</option>
                                        <option value="solo">Retrato Solo</option>
                                        <option value="casal">Experiência a Dois</option>
                                        <option value="familia">Ensaio Família</option>
                                        <option value="outros">Outros Projetos</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-display font-bold uppercase tracking-widest text-brand-text/40 px-1">Sua Mensagem</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Conte-me um pouco sobre você e o que deseja eternizar..."
                                    rows={4}
                                    className="w-full bg-brand-bg/30 border border-brand-text/5 rounded-2xl px-6 py-5 focus:border-accent focus:ring-8 focus:ring-accent/5 transition-all outline-none text-brand-text font-medium resize-none shadow-inner"
                                    required
                                />
                            </div>

                            {/* Status messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-5 rounded-2xl bg-green-50 border border-green-200 text-green-700 font-medium"
                                >
                                    <CheckCircle className="w-5 h-5 shrink-0" />
                                    Mensagem enviada! A Raquel entrará em contato em breve. 🌟
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-600 font-medium"
                                >
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    Algo deu errado. Tente novamente ou entre em contato pelo WhatsApp.
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="btn-premium w-full py-6 text-xl group shadow-[0_20px_50px_rgba(249,115,22,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <span className="flex items-center justify-center gap-4">
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle className="w-6 h-6" />
                                            Enviado com sucesso!
                                        </>
                                    ) : (
                                        <>
                                            Solicitar Disponibilidade
                                            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Accent Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    )
}

export default ContactSection
