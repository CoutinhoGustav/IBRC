import React, { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';

const Programacoes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const schedules = [
        { title: "Culto de Oracao", day: "Quarta-Feira", time: "20H", description: "Momento de comunhao em oracao, buscando a presenca de Deus juntos." },
        { title: "Mocidade", day: "Sexta-Feira", time: "18H", description: "Encontro dinamico para jovens com louvor, estudo e comunhao." },
        { title: "Escola Biblica Dominical", day: "Domingo", time: "9H30", description: "Estudo sistematico das Escrituras para todas as faixas etarias." },
        { title: "Culto Evangelistico", day: "Domingo", time: "19H", description: "Celebracao e proclamacao da Palavra com louvor e adoracao." },
    ];

    const slides = [
        { src: "/img/slide_1.png", alt: "Programacao 1" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.15.jpeg", alt: "Programacao 2" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.16.jpeg", alt: "Programacao 3" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.17.jpeg", alt: "Programacao 4" },
    ];

    const additionalSchedules = [
        { title: "Aulas de Flauta", day: "Domingo", time: "17H" },
        { title: "Uniao Masculina e Feminina", day: "Ultimo Sabado do Mes", time: "19H" },
    ];

    return (
        <div className="min-h-screen transition-colors duration-500">
            {/* Hero Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary dark:bg-[#0F0A08] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
                <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />

                <div className="relative z-10 section-container">
                    <div className="gold-divider mb-6 opacity-0 animate-fade-up" />
                    <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 opacity-0 animate-fade-up-delay-1">
                        Nossas{' '}
                        <span className="text-primary">Programacoes</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl opacity-0 animate-fade-up-delay-2">
                        Acompanhe nossas atividades semanais e participe conosco.
                    </p>
                </div>
            </section>

            {/* Schedule Grid + Carousel */}
            <section className="section-padding bg-cream dark:bg-[#18120E] transition-colors duration-500">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Schedule Cards */}
                        <div className="space-y-5">
                            {schedules.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative p-7 bg-white dark:bg-[#241C16] border border-parchment dark:border-[#2E241D] rounded-sm transition-all duration-300 hover:border-primary/40 shadow-card hover:shadow-card-hover"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    {/* Gold accent line */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/30 group-hover:bg-primary transition-colors duration-300 rounded-l-sm" />

                                    <div className="flex items-start justify-between gap-4">
                                        <div className="pl-4">
                                            <h3 className="font-cinzel text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-warm-gray dark:text-[#9B8E82] text-sm leading-relaxed mb-3">
                                                {item.description}
                                            </p>
                                            <p className="font-outfit text-xs tracking-[0.1em] uppercase text-warm-gray dark:text-[#9B8E82]">
                                                {item.day}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-right">
                                            <span className="font-cinzel text-2xl font-bold text-primary">
                                                {item.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn-outline w-full mt-4 text-center"
                            >
                                Outras Atividades
                            </button>
                        </div>

                        {/* Carousel */}
                        <div className="relative">
                            <ImageCarousel
                                slides={slides}
                                className="rounded-sm shadow-gold-lg border border-parchment dark:border-[#2E241D]"
                            />
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-cream dark:bg-[#241C16] w-full max-w-2xl rounded-sm shadow-2xl animate-scale-in border border-parchment dark:border-[#2E241D]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8 md:p-10">
                            <div className="gold-divider-center mb-6" />
                            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                                Outras <span className="text-primary">Atividades</span>
                            </h2>

                            <div className="space-y-4">
                                {additionalSchedules.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between p-6 bg-white dark:bg-[#18120E] border border-parchment dark:border-[#2E241D] rounded-sm"
                                    >
                                        <div>
                                            <h3 className="font-cinzel text-lg font-semibold mb-1">{item.title}</h3>
                                            <p className="text-sm text-warm-gray dark:text-[#9B8E82]">{item.day}</p>
                                        </div>
                                        <span className="font-cinzel text-xl font-bold text-primary">{item.time}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn-primary"
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
