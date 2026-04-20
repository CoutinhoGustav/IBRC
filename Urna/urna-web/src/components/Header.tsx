'use client';

import Image from 'next/image';

interface HeaderProps {
    etapaNome: string;
}

export default function Header({ etapaNome }: HeaderProps) {
    return (
        <header className="w-full bg-primary/95 md:bg-white/10 backdrop-blur-md border-b border-black/10 md:border-white/20 px-4 py-3 md:py-6 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">

                {/* Logo & Title Section */}
                <div className="flex items-center gap-3 md:gap-4 group">
                    <div className="relative w-9 h-9 md:w-16 md:h-16 md:-mt-4 transition-transform duration-500 group-hover:scale-110 shrink-0">
                        <div className="absolute inset-0 bg-secondary rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <Image
                            src="/ico/ibrc.ico"
                            alt="Logo IBRC"
                            width={160}
                            height={160}
                            className="relative w-full h-auto drop-shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[15px] md:text-3xl text-white md:text-primary font-black tracking-tight leading-none">
                            Urna IBRC
                        </h1>
                        <span className="text-[9px] md:text-xs text-white/50 md:text-primary/60 font-bold uppercase tracking-[0.18em] mt-0.5 md:mt-1">
                            Urna Digital
                        </span>
                    </div>
                </div>

                {/* Cargo Badge - Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="h-10 w-[1px] bg-primary/20"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-primary/40 font-bold uppercase tracking-wider mb-1">Etapa Atual</span>
                        <div className="bg-primary text-secondary px-6 py-2 rounded-full font-bold text-xl shadow-lg border border-secondary/20 flex items-center gap-3">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                            {etapaNome}
                        </div>
                    </div>
                </div>

                {/* Cargo Badge - Mobile */}
                <div className="md:hidden flex flex-col items-end gap-0.5">
                    <span className="text-white/40 text-[8px] font-bold uppercase tracking-widest leading-none">Etapa</span>
                    <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse shrink-0"></span>
                        <span className="text-white text-[11px] font-bold tracking-tight truncate max-w-[110px]">
                            {etapaNome}
                        </span>
                    </div>
                </div>

            </div>
        </header>
    );
}
