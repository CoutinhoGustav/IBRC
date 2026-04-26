import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

const QuemSomos = () => {
    const slides = [
        { src: "/img/slide_1.png", alt: "Fundacao IBRC" },
        { src: "/img/slide 4.jpeg", alt: "Nossa Historia 1" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.21.jpeg", alt: "Nossa Historia 2" },
        { src: "/img/WhatsApp Image 2024-06-28 at 15.08.22.jpeg", alt: "Nossa Historia 3" },
    ];

    const beliefs = [
        {
            title: "Na Biblia",
            text: "Cremos que a Biblia e a Palavra de Deus, inspirada, inerrante e a unica regra infalivel de fe e pratica para todos os cristaos.",
            verse: "2 Timoteo 3:16",
        },
        {
            title: "Em Jesus Cristo",
            text: "Cremos que Jesus Cristo e o Filho de Deus, que morreu por nossos pecados e ressuscitou para nossa justificacao e salvacao de todo aquele que cre.",
            verse: "Romanos 10:9",
        },
        {
            title: "Na Igreja",
            text: "Cremos que a Igreja e o corpo de Cristo atuando no mundo, com a missao de fazer discipulos em todas as nacoes e testemunhar o Seu amor.",
            verse: "Mateus 28:19",
        },
    ];

    return (
        <div className="min-h-screen transition-colors duration-500">
            {/* Hero Header */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary dark:bg-[#0F0A08] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />

                <div className="relative z-10 section-container">
                    <div className="gold-divider mb-6 opacity-0 animate-fade-up" />
                    <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 opacity-0 animate-fade-up-delay-1">
                        Nossa{' '}
                        <span className="text-primary">Historia</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl opacity-0 animate-fade-up-delay-2">
                        Mais de 40 anos de fe, ensino e comunhao em Ceilandia.
                    </p>
                </div>
            </section>

            {/* Story + Carousel */}
            <section className="section-padding bg-cream dark:bg-[#18120E] transition-colors duration-500">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Carousel */}
                        <div className="relative order-1 lg:order-1">
                            <ImageCarousel
                                slides={slides}
                                className="rounded-sm shadow-gold-lg border border-parchment dark:border-[#2E241D]"
                            />
                            <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
                        </div>

                        {/* Story */}
                        <div className="order-2 lg:order-2 space-y-8">
                            <div>
                                <div className="gold-divider mb-6" />
                                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                                    Uma caminhada de{' '}
                                    <span className="text-primary">fe</span>
                                </h2>
                            </div>

                            <p className="text-warm-gray dark:text-[#9B8E82] text-lg leading-relaxed">
                                A Igreja Batista Regular do Calvario do Distrito Federal tem raizes
                                profundas na comunidade de Ceilandia. Nossa caminhada comecou em
                                meados de 1984, fruto da dedicacao e fe do irmao Juraci e sua familia.
                            </p>

                            <p className="text-warm-gray dark:text-[#9B8E82] leading-relaxed">
                                As primeiras reunioes, simples e repletas de proposito, aconteciam
                                nas salas das casas da vizinhanca, unindo pessoas em oracao e louvor.
                            </p>

                            {/* Pull Quote */}
                            <blockquote className="relative p-8 bg-white dark:bg-[#241C16] border-l-[3px] border-primary rounded-sm shadow-card">
                                <p className="font-cinzel text-lg md:text-xl font-medium leading-relaxed text-secondary dark:text-primary italic">
                                    "No ano de 1985, recebemos a bencao de um terreno para fundarmos
                                    nossa sede academica e espiritual."
                                </p>
                                <p className="mt-4 text-sm text-warm-gray dark:text-[#9B8E82]">
                                    Desde entao, este local tornou-se um farol de esperanca e ensino
                                    biblico, realizando atividades para criancas, jovens e adultos.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beliefs Section */}
            <section className="section-padding bg-parchment dark:bg-[#1A1410] transition-colors duration-500">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-primary mb-4">
                            Nossos Fundamentos
                        </p>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                            No que <span className="text-primary">Cremos</span>
                        </h2>
                        <div className="gold-divider-center mb-6" />
                        <p className="text-warm-gray dark:text-[#9B8E82] text-lg max-w-2xl mx-auto">
                            Nossa fe esta alicercada nos principios biblicos fundamentais que
                            norteiam nossas acoes e nossa comunidade.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {beliefs.map((belief, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white dark:bg-[#241C16] p-8 rounded-sm border border-parchment dark:border-[#2E241D] shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Top accent */}
                                <div className="absolute top-0 left-8 right-8 h-[2px] bg-primary/30 group-hover:bg-primary transition-colors duration-300" />

                                <div className="pt-4">
                                    <span className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase text-primary/60 mb-4">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="font-cinzel text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                                        {belief.title}
                                    </h3>
                                    <p className="text-warm-gray dark:text-[#9B8E82] leading-relaxed mb-6">
                                        {belief.text}
                                    </p>
                                    <p className="font-cinzel text-xs tracking-[0.1em] text-primary/60 italic">
                                        {belief.verse}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuemSomos;
