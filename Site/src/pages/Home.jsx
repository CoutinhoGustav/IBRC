import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const slides = [
        { src: "/img/hero-img.png", alt: "IBRC Vista Exterior" },
        { src: "/img/IMG-20220807-WA0000.jpg", alt: "Nossa Congregacao" },
        { src: "/img/slide 4.jpeg", alt: "Comunidade IBRC" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="transition-colors duration-500">
            {/* ── Hero: Full-viewport immersive ── */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Carousel */}
                <div className="absolute inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${index === currentSlide
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-110'
                                }`}
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

                {/* Decorative corner accents */}
                <div className="absolute top-24 left-8 md:left-16 w-16 h-16 border-t border-l border-primary/40" />
                <div className="absolute bottom-24 right-8 md:right-16 w-16 h-16 border-b border-r border-primary/40" />

                {/* Content */}
                <div className="relative z-10 text-center text-white max-w-4xl px-6">
                    <div className="gold-divider-center mb-8 opacity-0 animate-fade-in-slow" />
                    <h1 className="font-cinzel text-4xl sm:text-5xl md:text-7xl font-semibold mb-6 tracking-wide opacity-0 animate-fade-up leading-tight">
                        Sejam Bem-Vindos
                    </h1>
                    <p className="font-cinzel text-primary text-lg sm:text-xl md:text-2xl tracking-[0.2em] uppercase mb-8 opacity-0 animate-fade-up-delay-1">
                        Igreja Batista Regular do Calvário
                    </p>
                    <p className="font-outfit text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up-delay-2">
                        Uma família da fé comprometida com a sã doutrina, o ensino expositivo
                        das Escrituras e o fortalecimento mútuo em amor desde 1984.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up-delay-3">
                        <Link to="/quem-somos" className="btn-primary">
                            Conheça Nossa História
                        </Link>
                        <Link to="/programacoes" className="btn-outline border-white/40 text-white hover:bg-white hover:text-charcoal">
                            Nossas Programações
                        </Link>
                    </div>
                </div>

                {/* Carousel indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Slide ${index + 1}`}
                            className={`h-[2px] rounded-full transition-all duration-700 ${index === currentSlide
                                ? 'bg-primary w-12'
                                : 'bg-white/30 w-6 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-scroll-hint">
                    <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
                    </svg>
                </div>
            </section>

            {/* ── Welcome Section ── */}
            <section className="section-padding bg-cream dark:bg-[#18120E] transition-colors duration-500">
                <div className="section-container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="gold-divider-center mb-8" />
                        <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug text-balance">
                            Uma comunidade de fé e{' '}
                            <span className="text-primary">esperança</span>
                        </h2>
                        <p className="text-warm-gray dark:text-[#9B8E82] text-lg leading-relaxed mb-12">
                            Somos a Igreja Batista Regular do Calvário do Distrito Federal, localizada em Ceilândia.
                            Desde 1984, temos sido um lugar de acolhimento, ensino bíblico e comunhão para todas as idades.
                        </p>

                        {/* Schedule Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { day: 'Quarta', time: '20h', label: 'Culto de Oração' },
                                { day: 'Sexta', time: '19h30', label: 'Mocidade' },
                                { day: 'Domingo', time: '9h30', label: 'Escola Bíblica' },
                                { day: 'Domingo', time: '19h', label: 'Culto Evangelístico' },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group p-6 bg-white dark:bg-[#241C16] rounded-sm border border-parchment dark:border-[#2E241D] hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-card-hover"
                                >
                                    <p className="font-cinzel text-xs tracking-[0.15em] uppercase text-primary mb-2">
                                        {item.day}
                                    </p>
                                    <p className="font-cinzel text-2xl font-semibold mb-2">
                                        {item.time}
                                    </p>
                                    <p className="font-outfit text-xs text-warm-gray dark:text-[#9B8E82] tracking-wide">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-secondary dark:bg-[#0F0A08]" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

                <div className="relative z-10 section-container text-center">
                    <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-primary mb-6">
                        Venha nos visitar
                    </p>
                    <h2 className="font-cinzel text-3xl md:text-5xl font-semibold text-white mb-8 leading-snug text-balance">
                        Estamos de braços abertos para receber você e sua família
                    </h2>
                    <div className="gold-divider-center mb-10" />
                    <Link to="/contato" className="btn-primary">
                        Entre em Contato
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
