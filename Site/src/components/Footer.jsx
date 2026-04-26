import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary dark:bg-[#0F0A08] text-white/80 transition-colors duration-500">
            {/* Decorative top border */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="section-container py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand */}
                    <div>
                        <span className="font-cinzel text-2xl font-bold text-white tracking-[0.15em]">
                            IBRC
                        </span>
                        <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
                            Igreja Batista Regular do Calvário do Distrito Federal.
                            Pregando a Palavra desde 1984.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-cinzel text-xs tracking-[0.2em] uppercase text-primary mb-6">
                            Navegacao
                        </h4>
                        <div className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Programacoes', path: '/programacoes' },
                                { name: 'Quem Somos', path: '/quem-somos' },
                                { name: 'Contato', path: '/contato' },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-sm text-white/60 hover:text-primary transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Schedule */}
                    <div>
                        <h4 className="font-cinzel text-xs tracking-[0.2em] uppercase text-primary mb-6">
                            Nossos Encontros
                        </h4>
                        <div className="space-y-2 text-sm text-white/60">
                            <p>Quartas-feiras as 20h</p>
                            <p>Sextas-feiras as 19h30</p>
                            <p>Domingos as 9h30 e 19h</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/40 tracking-wide">
                        &copy; {new Date().getFullYear()} Igreja Batista Regular do Calvario. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary/60" />
                        <span className="w-1 h-1 rounded-full bg-primary/40" />
                        <span className="w-1 h-1 rounded-full bg-primary/20" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
