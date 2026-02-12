import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const photos = [
    { src: '/images/502384149_18404199847105503_1538263550173533133_n.jpg', width: 9, height: 16, location: 'Resende, RJ', iso: '100', fstop: 'f/8.0', shutter: '1/200' },
    { src: '/images/548924295_1995910624563765_2432624860547887782_n.jpg', width: 9, height: 16, location: 'Iguaba Grande, RJ', iso: '200', fstop: 'f/4.0', shutter: '1/500' },
    { src: '/images/549828836_18419332501105503_501138226348757160_n.jpg', width: 4, height: 3, location: 'Aterro do Flamengo, RJ', iso: '400', fstop: 'f/2.8', shutter: '1/1000' },
    { src: '/images/553355470_18420160678105503_5472667598786832043_n.jpg', width: 4, height: 3, location: 'Praia da Joatinga, RJ', iso: '50', fstop: 'f/11', shutter: '1/60' },
    { src: '/images/587876238_18432206857105503_1258831775249206120_n.jpg', width: 3, height: 4, location: 'Ipanema, RJ', iso: '800', fstop: 'f/1.8', shutter: '1/50' },
    { src: '/images/589004906_18432206917105503_6478607421801332213_n.jpg', width: 3, height: 4, location: 'Praia do Pepê, Barra da Tijuca', iso: '100', fstop: 'f/5.6', shutter: '1/250' },
    { src: '/images/627675207_18442375864105503_3735472153034728000_n.jpg', width: 3, height: 4, location: 'Escadaria Selarón, Lapa', iso: '400', fstop: 'f/2.0', shutter: '1/400' },
    { src: '/images/628082706_18442375855105503_6809800093599802379_n.jpg', width: 3, height: 4, location: 'Escadaria Selarón, Lapa', iso: '1600', fstop: 'f/2.8', shutter: '1/125' },
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
                y: 50,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                }
            })

            // Grid items reveal
            const items = gridRef.current.children
            gsap.from(items, {
                opacity: 0,
                y: 100,
                scale: 0.9,
                stagger: 0.1,
                duration: 1.2,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 85%',
                }
            })

            // Parallax effect on images
            gsap.utils.toArray('.portfolio-img').forEach((img) => {
                gsap.to(img, {
                    y: -40,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    }
                })
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="portfolio" className="relative py-24 md:py-32 bg-sand-beige overflow-hidden">
            {/* Decorative Blobs */}
            <div className="organic-blob w-80 h-80 bg-ocean-blue top-20 -left-40" />
            <div className="organic-blob w-60 h-60 bg-sun-yellow bottom-20 -right-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Title */}
                <div ref={titleRef} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-blue/10 text-ocean-blue font-[family-name:var(--font-outfit)] font-semibold text-sm tracking-wider uppercase mb-4">
                        Portfolio
                    </span>
                    <h2 className="font-[family-name:var(--font-outfit)] font-black text-4xl md:text-6xl text-deep-brown mb-4">
                        Gema{' '}
                        <span className="bg-gradient-to-r from-ocean-blue to-tropical-green bg-clip-text text-transparent">
                            Carioca
                        </span>
                    </h2>
                    <p className="font-[family-name:var(--font-inter)] text-warm-gray text-lg max-w-xl mx-auto">
                        Cada clique conta uma história de luz, cor e alma carioca com a vibe do Rio.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="portfolio-item group cursor-none relative overflow-hidden rounded-2xl bg-warm-gray/5"
                            data-lens-hover="true"
                            data-iso={photo.iso}
                            data-fstop={photo.fstop}
                            data-shutter={photo.shutter}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={photo.src}
                                    alt={`Ensaio fotográfico em ${photo.location}`}
                                    className="portfolio-img w-full h-full object-cover scale-110"
                                    style={{ aspectRatio: `${photo.width}/${photo.height}` }}
                                />
                            </div>
                            <div className="portfolio-overlay flex flex-col items-center justify-end pb-8 px-4">
                                <div className="flex items-center justify-center gap-2 text-white font-[family-name:var(--font-outfit)] font-semibold text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full">
                                    <MapPin className="w-4 h-4 flex-shrink-0" />
                                    <span className="text-center truncate">{photo.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection
