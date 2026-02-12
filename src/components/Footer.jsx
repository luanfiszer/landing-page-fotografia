import { Sun, Instagram, Mail, Heart } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-deep-brown overflow-hidden">
            {/* Top decorative wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C360,80 720,0 1080,60 C1260,30 1380,50 1440,20 L1440,0 L0,0 Z"
                        fill="#FDF6EC"
                    />
                </svg>
            </div>

            {/* Gradient accent line */}
            <div className="h-1 bg-gradient-to-r from-sun-yellow via-sunset-orange to-ocean-blue" />

            <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <a href="#hero" className="flex items-center gap-2 mb-4">
                            <Sun className="w-8 h-8 text-sun-yellow" />
                            <span className="font-[family-name:var(--font-outfit)] font-bold text-2xl text-white tracking-tight">
                                Raquel<span className="text-sunset-orange">Paiva</span>
                            </span>
                        </a>
                        <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm leading-relaxed max-w-xs">
                            Fotógrafa e diretora criativa capturando a essência solar do Rio de Janeiro.
                            Cada clique é uma celebração de luz e vida.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-[family-name:var(--font-outfit)] font-bold text-white mb-6 text-lg">
                            Navegação
                        </h4>
                        <div className="flex flex-col gap-3">
                            {['Início', 'Portfolio', 'Experiência', 'Depoimentos', 'Contato'].map(
                                (link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                                        className="font-[family-name:var(--font-inter)] text-white/50 hover:text-sun-yellow transition-colors duration-300 text-sm"
                                    >
                                        {link}
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Social / Contact */}
                    <div>
                        <h4 className="font-[family-name:var(--font-outfit)] font-bold text-white mb-6 text-lg">
                            Conecte-se
                        </h4>
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://instagram.com/paiva.vision"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/50 hover:text-sunset-orange transition-colors duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="font-[family-name:var(--font-inter)] text-sm">@paiva.vision</span>
                            </a>
                            <a
                                href="mailto:assessoriaraquelpaiva@gmail.com"
                                className="flex items-center gap-3 text-white/50 hover:text-sun-yellow transition-colors duration-300"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="font-[family-name:var(--font-inter)] text-sm">assessoriaraquelpaiva@gmail.com</span>
                            </a>
                        </div>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-sun-yellow to-sunset-orange text-white font-[family-name:var(--font-outfit)] font-bold text-sm hover:shadow-lg hover:shadow-sunset-orange/30 transition-all duration-300"
                        >
                            ☀️ Agendar Ensaio
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-[family-name:var(--font-inter)] text-white/30 text-sm">
                        © {currentYear} Raquel Paiva Fotografia. Todos os direitos reservados.
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-white/30 text-xs flex items-center gap-1">
                        Feito com <Heart className="w-3 h-3 text-sunset-orange fill-sunset-orange" /> e luz solar no Rio de Janeiro
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
