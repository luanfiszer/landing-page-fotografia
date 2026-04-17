import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Camera, Aperture } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const photos = [
    {
        src: '/images/IMG_3073.jpeg',
        location: 'Ipanema, RJ',
        iso: '200',
        fstop: 'f/4.0',
        span: 'md:col-span-4 md:row-span-2',
        position: 'object-center'
    },
    {
        src: '/images/IMG_3069.jpeg',
        location: 'Ipanema, RJ',
        iso: '100',
        fstop: 'f/8.0',
        span: 'md:col-span-8 md:row-span-1',
        position: 'object-center'
    },
    {
        src: '/images/IMG_3062.jpeg',
        location: 'Lapa, RJ',
        iso: '400',
        fstop: 'f/2.8',
        span: 'md:col-span-4 md:row-span-1',
        position: 'object-top'
    },
    {
        src: '/images/IMG_3061.jpeg',
        location: 'Copacabana, RJ',
        iso: '800',
        fstop: 'f/2.0',
        span: 'md:col-span-4 md:row-span-1',
        position: 'object-center'
    },
    {
        src: '/images/IMG_3081.jpeg',
        location: 'Ipanema, RJ',
        iso: '400',
        fstop: 'f/1.8',
        span: 'md:col-span-4 md:row-span-2',
        position: 'object-[30%]'
    },
    {
        src: '/images/IMG_3067.jpeg',
        location: 'Ipanema, RJ',
        iso: '200',
        fstop: 'f/4.0',
        span: 'md:col-span-4 md:row-span-1',
        position: 'object-center'
    },
    {
        src: '/images/IMG_3068.jpeg',
        location: 'Copacabana, RJ',
        iso: '100',
        fstop: 'f/5.6',
        span: 'md:col-span-8 md:row-span-1',
        position: 'object-center'
    },
    {
        src: '/images/IMG_3075.jpeg',
        location: 'Ipanema, RJ',
        iso: '400',
        fstop: 'f/2.8',
        span: 'md:col-span-4 md:row-span-1',
        position: 'object-[25%]'
    },
]

function PortfolioSection() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const gridRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title reveal
            gsap.from(titleRef.current.children, {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                }
            })

            // Grid items reveal - using fromTo for absolute visibility
            const items = gsap.utils.toArray(gridRef.current.children)
            gsap.fromTo(items, 
                { opacity: 0, scale: 0.95, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 90%',
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="portfolio" className="relative py-40 bg-brand-bg overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Section Title */}
                <div ref={titleRef} className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-display font-bold text-[10px] uppercase tracking-[0.3em] border border-accent/20 mb-8">
                            Curadoria Autoral
                        </span>
                        <h2 className="font-display font-bold text-6xl md:text-8xl text-brand-text mb-8 tracking-tighter leading-[0.85]">
                            Fragmentos de <br />
                            <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Luz Real</span>.
                        </h2>
                    </div>
                    <p className="text-brand-text/60 text-xl max-w-[30ch] leading-tight font-medium md:mb-4">
                        Uma curadoria de momentos onde a técnica encontra a alma, capturando a essência vibrante do Rio.
                    </p>
                </div>

                <div 
                    ref={gridRef} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[400px]"
                >
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-[3rem] bg-brand-text/5 shadow-sm transition-all duration-700 will-change-transform ${photo.span}`}
                        >
                            <img
                                src={photo.src}
                                alt={`Ensaio em ${photo.location}`}
                                className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out ${photo.position}`}
                            />
                            
                            {/* Improved Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-text/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Metadata Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                <div className="flex items-center gap-3 text-accent font-display text-[11px] font-bold uppercase tracking-[0.4em] mb-4">
                                    <MapPin className="w-4 h-4" />
                                    {photo.location}
                                </div>
                                
                                <div className="h-[1px] w-full bg-white/10 mb-8 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-bold">Metadata</span>
                                        <div className="flex items-center gap-5">
                                            <div className="flex items-center gap-2 text-white font-display font-medium text-xl">
                                                <Camera className="w-5 h-5 text-accent" />
                                                {photo.iso} ISO
                                            </div>
                                            <div className="flex items-center gap-2 text-white font-display font-medium text-xl">
                                                <Aperture className="w-5 h-5 text-accent" />
                                                {photo.fstop}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white/20 group-hover:text-accent transition-colors duration-500">
                                        <Aperture className="w-6 h-6 animate-spin-slow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Background Aesthetic */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    )
}

export default PortfolioSection
