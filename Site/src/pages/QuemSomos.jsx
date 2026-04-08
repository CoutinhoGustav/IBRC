import React, { useState, useEffect } from 'react';
import ProtectedImage from '../components/ProtectedImage';

const QuemSomos = () => {
    const slides = [
        { src: "/img/slide_1.png", alt: "Fundação IBRC" },
        { src: "/img/slide 4.jpeg", alt: "Nossa História 1" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.21.jpeg", alt: "Nossa História 2" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.22.jpeg", alt: "Nossa História 3" },
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
            <section className="section-content !items-center !pt-16 !pb-20 md:!pt-24 md:!pb-32">
                {/* Story Content */}
                <div className="flex-1 animate-hero-content order-2 md:order-1 px-4 lg:px-8">

                    <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                        Nossa <span className="text-secondary dark:text-primary">História</span>
                    </h1>

                    <div className="text-lg md:text-xl space-y-8 text-justify leading-relaxed opacity-90 max-w-2xl">
                        <p className="font-medium text-lg leading-relaxed border-l-4 border-primary pl-6">
                            A Igreja Batista Regular do Calvário do Distrito Federal tem raízes profundas na comunidade de Ceilândia.
                        </p>

                        <p>
                            Nossa caminhada começou em meados de 1984, fruto da dedicação e fé do irmão Juraci e sua família. As primeiras reuniões, simples e repletas de propósito, aconteciam nas salas das casas da vizinhança, unindo pessoas em oração e louvor.
                        </p>

                        <div class="bg-gray-50 dark:bg-secondary/20 p-8 rounded-[30px]  border border-gray-100 border-[#C5A57D] shadow-sm transition-all hover:shadow-md">
                            <p className="italic font-medium text-secondary dark:text-primary mb-4 text-xl">
                                "No ano de 1985, recebemos a benção de um terreno para fundarmos nossa sede acadêmica e espiritual."
                            </p>
                            <p className="text-sm opacity-70">
                                Desde então, este local tornou-se um farol de esperança e ensino bíblico, realizando atividades para crianças, jovens e adultos, sempre comprometidos com a Palavra de Deus.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visual Timeline / Carousel */}
                <div className="flex-1 w-full max-w-xl flex justify-center items-center relative animate-hero-content order-1 md:order-2 mb-12 md:-mt-12">
                    <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-4 border-primary dark:border-secondary transition-all hover:scale-[1.02] duration-500">
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
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-8' : 'bg-white opacity-50 hover:opacity-100'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary opacity-10 blur-3xl rounded-full -z-10"></div>
                </div>
            </section>

            {/* Our Beliefs Section */}
            <section className="bg-gray-50 dark:bg-secondary/40 py-16 md:py-24 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-hero-content">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            No que <span className="text-secondary dark:text-primary">Cremos</span>
                        </h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto">
                            Nossa fé está alicerçada nos princípios bíblicos fundamentais que norteiam nossas ações e nossa comunidade.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Belief Card 1 */}
                        <div className="bg-white dark:bg-secondary p-8 rounded-[30px] shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-4 dark:text-primary">Na Bíblia</h3>
                            <p className="opacity-80 text-justify">
                                Cremos que a Bíblia é a Palavra de Deus, inspirada, inerrante e a única regra infalível de fé e prática para todos os cristãos.
                            </p>
                        </div>
                        {/* Belief Card 2 */}
                        <div className="bg-white dark:bg-secondary p-8 rounded-[30px] shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 delay-100">
                            <h3 className="text-2xl font-bold mb-4 dark:text-primary">Em Jesus Cristo</h3>
                            <p className="opacity-80 text-justify">
                                Cremos que Jesus Cristo é o Filho de Deus, que morreu por nossos pecados e ressuscitou para nossa justificação e salvação de todo aquele que crê.
                            </p>
                        </div>
                        {/* Belief Card 3 */}
                        <div className="bg-white dark:bg-secondary p-8 rounded-[30px] shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 delay-200">
                            <h3 className="text-2xl font-bold mb-4 dark:text-primary">Na Igreja</h3>
                            <p className="opacity-80 text-justify">
                                Cremos que a Igreja é o corpo de Cristo atuando no mundo, com a missão de fazer discípulos em todas as nações e testemunhar o Seu amor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuemSomos;
