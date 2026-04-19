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
        let rawVotos: Votos | null = null;

        if (votosEncoded) {
            try {
                // If passed via URL (formatted result) - check if it's already the calculated results
                // Actually the page expects Record<string, Record<string, number>>
                // But verificarResultado passes a JSON.stringify(resultado)
                const parsed = JSON.parse(decodeURIComponent(votosEncoded));
                setResultados(parsed);
                return;
            } catch (e) {
                console.error('Failed to parse votes from URL', e);
            }
        }

        // Fallback or Direct Access: Load from localStorage and calculate
        const saved = localStorage.getItem('votos');
        if (saved) {
            try {
                rawVotos = JSON.parse(saved);
                if (rawVotos) {
                    // Calculate results from raw votes record
                    const calculatedResults: Record<string, Record<string, number>> = {};
                    
                    for (const et of ETAPAS) {
                        const votosEtapa = rawVotos[et.nome] || { candidatos: [], branco: 0 };
                        calculatedResults[et.nome] = {};

                        for (const cand of et.candidatos) {
                            const total = votosEtapa.candidatos.reduce((acc, votoArr) => {
                                return acc + (votoArr.includes(cand) ? 1 : 0);
                            }, 0);
                            calculatedResults[et.nome][cand] = total;
                        }
                        calculatedResults[et.nome]['Voto em Branco'] = votosEtapa.branco;
                    }
                    setResultados(calculatedResults);
                }
            } catch (e) {
                console.error('Failed to parse votes from storage', e);
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
        <div className="min-h-[100dvh] bg-primary text-white px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8 font-merriweather flex flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-secondary mb-4 sm:mb-8 md:mb-12">Resultado da Votação</h1>

            <div className="flex-1 container mx-auto pb-28 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8 pb-4 sm:pb-8">
                    {Object.entries(resultados).map(([etapaNome, etapaResultados]) => (
                        <div key={etapaNome} className="bg-white/10 border border-white/20 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm shadow-xl hover:bg-white/15 transition-all duration-300">
                            <h3 className="text-secondary text-lg sm:text-xl md:text-2xl text-center mb-3 sm:mb-4 font-bold border-b border-white/10 pb-2">{etapaNome}</h3>
                            <ul className="space-y-1.5 sm:space-y-2">
                                {Object.entries(etapaResultados).map(([candidato, votos]) => (
                                    <li key={candidato} className="flex justify-between items-center text-sm sm:text-base md:text-lg">
                                        <span className="opacity-90">{candidato === 'Voto em Branco' ? 'Branco' : candidato}</span>
                                        <span className="font-bold bg-secondary/20 px-2 py-0.5 rounded text-secondary text-sm sm:text-base">{votos}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop buttons */}
            <div className="hidden sm:flex mt-6 md:mt-8 flex-col sm:flex-row justify-center gap-4 md:gap-8 pb-4 sm:pb-8">
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
                <button
                    onClick={() => {
                        if (confirm('ATENÇÃO: Isso irá apagar TODOS os votos permanentemente. Deseja continuar?')) {
                            localStorage.removeItem('votos');
                            setResultados({});
                            router.push('/');
                        }
                    }}
                    className="bg-red-900 border-2 border-red-700 text-white rounded-xl px-8 py-3 md:py-4 text-lg md:text-xl font-bold cursor-pointer hover:bg-red-700 transition-all shadow-lg w-full sm:w-auto"
                >
                    Zerar Urna
                </button>
            </div>

            {/* Mobile sticky bottom buttons */}
            <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 px-3 py-3 flex gap-2 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
                style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
            >
                <button
                    onClick={gerarPDF}
                    className="flex-1 bg-secondary text-primary px-2 py-3 rounded-xl text-xs font-bold active:scale-95 transition-all shadow-md"
                >
                    PDF
                </button>
                <button
                    onClick={voltar}
                    className="flex-1 bg-primary border-2 border-secondary text-secondary px-2 py-3 rounded-xl text-xs font-bold active:scale-95 transition-all shadow-md"
                >
                    Voltar
                </button>
                <button
                    onClick={() => {
                        if (confirm('Zerar todos os votos?')) {
                            localStorage.removeItem('votos');
                            setResultados({});
                            router.push('/');
                        }
                    }}
                    className="flex-1 bg-red-900 text-white px-2 py-3 rounded-xl text-xs font-bold active:scale-95 transition-all shadow-md"
                >
                    Zerar
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
