'use client';

import Image from 'next/image';

interface HeaderProps {
    etapaNome: string;
}

export default function Header({ etapaNome }: HeaderProps) {
    return (
        <header className="w-full bg-primary/95 md:bg-white/10 backdrop-blur-md border-b border-black/10 md:border-white/20 px-4 py-3 md:py-6 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                {/* Logo & Title Section */}
                <div className="flex items-center gap-4 group">
                    <div className="relative w-10 h-10 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110">
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
                        <h1 className="text-xl md:text-3xl text-white md:text-primary font-black tracking-tighter leading-none">
                            Urna IBRC
                        </h1>
                        <span className="text-[10px] md:text-xs text-secondary md:text-primary/60 font-bold uppercase tracking-[0.2em] mt-1 hidden md:block">
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

                {/* Cargo Title - Mobile (Centered) */}
                <div className="md:hidden text-center">
                    <span className="text-secondary/80 text-xs font-bold uppercase tracking-widest block mb-1">Cargo</span>
                    <h2 className="text-white text-xl font-bold tracking-tight">
                        {etapaNome}
                    </h2>
                </div>
            </div>
        </header>
    );
}
