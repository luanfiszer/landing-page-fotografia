import { Instagram, Mail, Heart } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-brand-text pt-32 pb-16 overflow-hidden border-t border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
                    {/* Brand */}
                    <div className="md:col-span-6">
                        <a href="#hero" className="inline-block mb-10">
                            <span className="font-display font-bold text-4xl text-white tracking-tighter">
                                RAQUEL <span className="text-accent underline decoration-accent/20 underline-offset-8">PAIVA</span>
                            </span>
                        </a>
                        <p className="text-white/40 text-xl font-medium leading-relaxed max-w-md">
                            Curadoria visual e direção de arte sob a luz do Rio. Eternizando sua essência com estética vibrante e alma solar.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3">
                        <h4 className="font-display font-bold text-white mb-10 text-[10px] uppercase tracking-[0.4em]">
                            Navegação
                        </h4>
                        <div className="flex flex-col gap-6">
                            {['Início', 'Portfolio', 'Experiência', 'Depoimentos', 'Contato'].map(
                                (link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                                        className="text-white/30 hover:text-accent transition-colors duration-300 text-sm font-bold uppercase tracking-widest"
                                    >
                                        {link}
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Social */}
                    <div className="md:col-span-3">
                        <h4 className="font-display font-bold text-white mb-10 text-[10px] uppercase tracking-[0.4em]">
                            Social
                        </h4>
                        <div className="flex flex-col gap-8">
                            <a
                                href="https://instagram.com/paiva.vision"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 text-white/30 hover:text-accent transition-colors duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">@paiva.vision</span>
                            </a>
                            <a
                                href="mailto:assessoriaraquelpaiva@gmail.com"
                                className="group flex items-center gap-4 text-white/30 hover:text-accent transition-colors duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">E-mail</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-white/10 text-[10px] uppercase tracking-widest font-display font-bold">
                        © {currentYear} Raquel Paiva • Fotografia Autoral
                    </p>
                    <div className="flex items-center gap-4 text-white/10 text-[10px] uppercase tracking-widest font-display font-bold">
                        <span>Desenvolvido com Rigor Visual</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span>Rio de Janeiro</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
