import React, { useState, useEffect } from 'react';
import ProtectedImage from '../components/ProtectedImage';

const Programacoes = () => {
    const [isIdOpen, setIsModalOpen] = useState(false);

    const schedules = [
        { title: "Culto de Oração", day: "Quarta-Feira", time: "20H" },
        { title: "Mocidade", day: "Sextas-Feira", time: "18H" },
        { title: "Escola Bíblica Dominical", day: "Domingo", time: "9H30" },
        { title: "Culto Evangelístico", day: "Domingo", time: "19H" },
    ];

    const slides = [
        { src: "/img/slide_1.png", alt: "Programação 1" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.15.jpeg", alt: "Programação 2" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.16.jpeg", alt: "Programação 3" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.17.jpeg", alt: "Programação 4" },
    ];

    const additionalSchedules = [
        { title: "Aulas de Flauta", day: "Domingo", time: "17H" },
        { title: "União Masculina e Feminina", day: "Último Sábado do Mês", time: "19H" },
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
            <section className="section-content !items-start !pt-16 !pb-20 md:!pt-24 md:!pb-32">
                {/* Content */}
                <div className="flex-1 animate-hero-content px-4 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
                        Nossas <span className="text-secondary dark:text-primary">Programações</span>
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                        {schedules.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-secondary p-8 rounded-[30px] shadow-btn border-l-4 border-primary transition-all hover:scale-[1.03] duration-300 hover:shadow-xl"
                            >
                                <h3 className="text-2xl font-bold dark:text-primary mb-3">{item.title}</h3>
                                <p className="text-lg opacity-80 font-medium">{item.day}</p>
                                <p className="text-primary font-bold text-xl">{item.time}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed max-w-2xl text-justify">
                        Acompanhe nossas atividades semanais e participe conosco. Estamos de braços abertos para receber você e sua família em nossos cultos e estudos.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary px-10 py-4 text-lg shadow-lg"
                        >
                            Saiba Mais
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="flex-1 w-full max-w-xl flex justify-center items-center relative animate-hero-content mt-16 md:mt-0">
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
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-10 blur-3xl rounded-full -z-10"></div>
                </div>
            </section>

            {/* Information Modal */}
            {isIdOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white dark:bg-secondary w-full max-w-3xl rounded-[40px] shadow-2xl relative animate-in zoom-in-95 duration-300">
                        <div className="p-8 md:p-10">
                            <h2 className="text-3xl font-bold mb-8 text-center leading-tight">
                                Outras <span className="text-primary">Atividades</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {additionalSchedules.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white dark:bg-secondary p-6 rounded-[25px] shadow-btn border-l-4 border-primary transition-all hover:scale-[1.03] duration-300 hover:shadow-xl opacity-0 animate-hero-content"
                                        style={{
                                            animationDelay: `${(idx + 1) * 150}ms`,
                                            animationFillMode: 'forwards'
                                        }}
                                    >
                                        <h3 className="text-xl font-bold dark:text-primary mb-2">{item.title}</h3>
                                        <p className="text-md opacity-80 font-medium">{item.day}</p>
                                        <p className="text-primary font-bold text-lg">{item.time}</p>
                                    </div>
                                ))}

                            </div>

                            <div className="mt-10 flex justify-center">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn-primary px-10 py-3 rounded-full shadow-lg"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            )}
        </div>
    );
};

export default Programacoes;
