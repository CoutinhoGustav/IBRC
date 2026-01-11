'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import jsPDF from 'jspdf';
import { ETAPAS } from '@/constants/etapas';

// Allow client-side search params reading
export const dynamic = 'force-dynamic';

type VotoEtapa = {
    candidatos: string[][];
    branco: number;
};
type Votos = Record<string, VotoEtapa>;

function ResultadoContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [resultados, setResultados] = useState<Record<string, Record<string, number>> | null>(null);

    useEffect(() => {
        const votosEncoded = searchParams.get('votos');
        if (votosEncoded) {
            try {
                const parsed = JSON.parse(decodeURIComponent(votosEncoded));
                setResultados(parsed);
            } catch (e) {
                console.error('Failed to parse votes', e);
            }
        }
    }, [searchParams]);

    const gerarPDF = () => {
        if (!resultados) return;

        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text('Resultado da Votação', 15, 20);

        let y = 30;
        doc.setFontSize(12);

        Object.entries(resultados).forEach(([etapaNome, etapaResultados]) => {
            // Check if we need new page
            if (y > 270) {
                doc.addPage();
                y = 20;
            }

            doc.setFont('helvetica', 'bold');
            doc.text(etapaNome, 15, y);
            y += 7;

            doc.setFont('helvetica', 'normal');
            Object.entries(etapaResultados).forEach(([candidato, votos]) => {
                const label = candidato === 'Voto em Branco' ? `Branco: ${votos} votos` : `${candidato}: ${votos} votos`;
                doc.text(`- ${label}`, 20, y);
                y += 6;
            });
            y += 5; // Spacing between stages
        });

        doc.save('resultado_votacao.pdf');
    };

    const voltar = () => {
        router.push('/');
    };

    if (!resultados) {
        return <div className="text-center p-10 text-xl">Carregando resultados ou nenhum voto encontrado...</div>;
    }

    return (
        <div className="min-h-screen bg-primary text-white p-4 md:p-8 font-merriweather flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-8 md:mb-12">Resultado da Votação</h1>

            <div className="flex-1 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-8">
                    {Object.entries(resultados).map(([etapaNome, etapaResultados]) => (
                        <div key={etapaNome} className="bg-white/10 border border-white/20 p-5 md:p-6 rounded-2xl backdrop-blur-sm shadow-xl hover:bg-white/15 transition-all duration-300">
                            <h3 className="text-secondary text-xl md:text-2xl text-center mb-4 font-bold border-b border-white/10 pb-2">{etapaNome}</h3>
                            <ul className="space-y-2">
                                {Object.entries(etapaResultados).map(([candidato, votos]) => (
                                    <li key={candidato} className="flex justify-between items-center text-base md:text-lg">
                                        <span className="opacity-90">{candidato === 'Voto em Branco' ? 'Branco' : candidato}</span>
                                        <span className="font-bold bg-secondary/20 px-2 py-0.5 rounded text-secondary">{votos}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 md:gap-8 pb-8">
                <button
                    onClick={gerarPDF}
                    className="bg-secondary text-primary border-none rounded-xl px-8 py-3 md:py-4 text-lg md:text-xl font-bold cursor-pointer hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg w-full sm:w-auto"
                >
                    Gerar PDF
                </button>
                <button
                    onClick={voltar}
                    className="bg-primary border-2 border-secondary text-secondary rounded-xl px-8 py-3 md:py-4 text-lg md:text-xl font-bold cursor-pointer hover:bg-secondary hover:text-primary transition-all shadow-lg w-full sm:w-auto"
                >
                    Voltar para a Urna
                </button>
            </div>
        </div>
    );
}

export default function Resultado() {
    return (
        <Suspense fallback={<div className="text-white text-center p-10">Carregando...</div>}>
            <ResultadoContent />
        </Suspense>
    );
}
