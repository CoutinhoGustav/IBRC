import React, { useState, useEffect } from 'react';
import ProtectedImage from '../components/ProtectedImage';

const Home = () => {
    const slides = [
        { src: "/img/hero-img.png", alt: "IBRC Vista Exterior" },
        { src: "/img/slide_1.png", alt: "Nossa Congregação" },
        { src: "/img/slide 4.jpeg", alt: "Comunidade IBRC" }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="min-h-screen transition-colors duration-300">
            <section className="section-content !items-start !py-12 md:!py-32">
                {/* Content */}
                <div className="flex-1 text-center md:text-left animate-hero-content z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 md:ml-3 leading-tight">
                        Sejam Bem-Vindos à <span className="text-secondary dark:text-primary">IBRC!</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 md:ml-3 leading-relaxed text-justify opacity-90 max-w-xl">
                        Somos a Igreja Batista Regular do Calvário do Distrito Federal. Uma comunidade dedicada ao ensino fiel das Escrituras e à comunhão mútua.
                        <br /><br />
                        Programações: Quartas-Feiras às 20H, Sextas-Feiras às 19H30 e Domingo às 9H30 e 19H.
                    </p>
                    <div className="flex justify-center md:justify-start md:ml-3">
                        <button className="btn-primary px-10 py-4 text-xl">
                            Saiba Mais
                        </button>
                    </div>
                </div>

                {/* Hero Carousel */}
                <div className="flex-1 w-full max-w-xl flex justify-center items-center relative animate-hero-content">
                    <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden shadow-2xl border-4 border-primary dark:border-secondary">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <ProtectedImage
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}

                        {/* Carousel Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary scale-125' : 'bg-white opacity-50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-20 blur-3xl rounded-full -z-10 anima-pulse"></div>
                </div>
            </section>


        </div>
    );
};

export default Home;
