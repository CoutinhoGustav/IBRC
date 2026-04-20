'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ETAPAS } from '@/constants/etapas';
import Modal from '@/components/Modal';
import Header from '@/components/Header';

// Define types for votes
type VotoEtapa = {
  candidatos: string[][];
  branco: number;
};
type Votos = Record<string, VotoEtapa>;

export default function Urna() {
  const router = useRouter();
  const [etapaAtualIndex, setEtapaAtualIndex] = useState(0);
  const [votos, setVotos] = useState<Votos>({});
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState<string[]>([]);
  const [modalConfirmacaoOpen, setModalConfirmacaoOpen] = useState(false);
  const [modalBrancoOpen, setModalBrancoOpen] = useState(false);
  const [modalFinalizacaoOpen, setModalFinalizacaoOpen] = useState(false);
  const [modalAlertaOpen, setModalAlertaOpen] = useState(false);
  const [mensagemAlerta, setMensagemAlerta] = useState('');
  const [votoEmBranco, setVotoEmBranco] = useState(false);

  const etapa = ETAPAS[etapaAtualIndex];

  // Helper to toggle selection
  const toggleOpcao = (candidato: string) => {
    if (opcoesSelecionadas.includes(candidato)) {
      setOpcoesSelecionadas(prev => prev.filter(c => c !== candidato));
    } else {
      setOpcoesSelecionadas(prev => [...prev, candidato]);
    }
  };

  // Open confirmation modal
  const abrirModalConfirmacao = () => {
    const { minCandidatos, maxCandidatos } = etapa;
    if (opcoesSelecionadas.length < minCandidatos || opcoesSelecionadas.length > maxCandidatos) {
      setMensagemAlerta(`ATENÇÃO! Selecione no máximo até ${maxCandidatos} e no mínimo ${minCandidatos}`);
      setModalAlertaOpen(true);
      return;
    }
    setVotoEmBranco(false);
    setModalConfirmacaoOpen(true);
  };

  // Open white vote modal
  const abrirModalBranco = () => {
    setVotoEmBranco(true);
    setModalBrancoOpen(true);
  };

  // Confirm vote
  const confirmarVoto = () => {
    const novosVotos = { ...votos };
    if (!novosVotos[etapa.nome]) {
      novosVotos[etapa.nome] = { candidatos: [], branco: 0 };
    }

    if (votoEmBranco) {
      novosVotos[etapa.nome].branco++;
    } else {
      novosVotos[etapa.nome].candidatos.push([...opcoesSelecionadas]);
    }

    setVotos(novosVotos);
    localStorage.setItem('votos', JSON.stringify(novosVotos));

    // Close modals
    setModalConfirmacaoOpen(false);
    setModalBrancoOpen(false);
    setOpcoesSelecionadas([]);

    // Next stage
    proximo();
  };

  // Advance stage
  const proximo = () => {
    if (etapaAtualIndex + 1 >= ETAPAS.length) {
      setModalFinalizacaoOpen(true);
    } else {
      setEtapaAtualIndex(prev => prev + 1);
    }
  };

  // Calculate and navigate to results
  const verificarResultado = useCallback(() => {
    const resultado: Record<string, Record<string, number>> = {};

    // Default structure for current votes (or load from state if complete, but state is partial during vote)
    // Actually we should calculate based on what we have in `votos` state

    for (const et of ETAPAS) {
      const votosEtapa = votos[et.nome] || { candidatos: [], branco: 0 };
      resultado[et.nome] = {};

      for (const cand of et.candidatos) {
        // Count occurrences in array of arrays
        const total = votosEtapa.candidatos.reduce((acc, votoArr) => {
          return acc + (votoArr.includes(cand) ? 1 : 0);
        }, 0);
        resultado[et.nome][cand] = total;
      }
      resultado[et.nome]['Voto em Branco'] = votosEtapa.branco;
    }

    const resultadoStr = JSON.stringify(resultado);
    router.push(`/resultado?votos=${encodeURIComponent(resultadoStr)}`);
  }, [votos, router]);

  // Load total votes on mount
  useEffect(() => {
    const saved = localStorage.getItem('votos');
    if (saved) {
      try {
        setVotos(JSON.parse(saved));
      } catch (e) {
        console.error('Erro ao carregar votos do localStorage', e);
      }
    }
  }, []);

  // Restart session for next voter
  const reiniciar = () => {
    setModalFinalizacaoOpen(false);
    setEtapaAtualIndex(0);
    setOpcoesSelecionadas([]);
    setVotoEmBranco(false);
    // REMOVED: setVotos({}) - we want to keep accumulating
    // REMOVED: localStorage.removeItem('votos') - we want to keep accumulating
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      // Numbers 1-9
      if (key >= '1' && key <= '9') {
        const index = parseInt(key, 10) - 1;
        if (etapa.candidatos[index]) {
          toggleOpcao(etapa.candidatos[index]);
        }
      }

      // 0 for Branco
      if (key === '0') {
        abrirModalBranco();
      }

      // Enter for Confirm
      if (key === 'Enter') {
        if (modalAlertaOpen) {
          setModalAlertaOpen(false);
        } else if (modalConfirmacaoOpen || modalBrancoOpen) {
          confirmarVoto();
        } else {
          // If nothing open, try to open confirmation
          abrirModalConfirmacao();
        }
      }

      // Ctrl + R for Results
      if (event.ctrlKey && key === 'r') {
        event.preventDefault();
        verificarResultado();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [etapa, modalConfirmacaoOpen, modalBrancoOpen, modalAlertaOpen, opcoesSelecionadas, confirmarVoto, verificarResultado, toggleOpcao, abrirModalConfirmacao, abrirModalBranco]);
  // Note: deps are complex here due to closures. Standard React pattern might need refs or reducing deps, but for this scale it's fine if we include everything.
  // Actually, to avoid stale closures in event listener, simple deps are best.

  return (
    <div className="min-h-[100dvh] bg-secondary text-mainTxt font-merriweather flex flex-col">
      <Header etapaNome={etapa.nome} />

      {/* Main Content Section */}
      <section className="flex-1 container mx-auto px-2 sm:px-4 pt-2 sm:pt-4 md:pt-8 pb-28 sm:pb-32 md:pb-8 flex flex-col items-center justify-center sm:justify-start">

        <div className="w-full max-w-3xl mx-auto mt-6 sm:mt-0 bg-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 backdrop-blur-sm border border-black/5 shadow-inner">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-4">
            {etapa.candidatos.map((candidato, idx) => {
              const isSelected = opcoesSelecionadas.includes(candidato);
              return (
                <div
                  key={candidato}
                  onClick={() => toggleOpcao(candidato)}
                  className={`
                    group flex items-center p-4 sm:p-4 md:p-4 rounded-xl sm:rounded-xl cursor-pointer transition-all duration-200 border-2
                    ${isSelected
                      ? 'bg-primary/10 border-primary shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-black/5 active:bg-black/10'
                    }
                  `}
                >
                  <div className={`
                    w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 rounded border-2 flex items-center justify-center mr-4 sm:mr-5 md:mr-6 transition-colors flex-shrink-0
                    ${isSelected ? 'bg-primary border-primary' : 'bg-white border-primary/50'}
                  `}>
                    {isSelected && <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 bg-white rounded-sm" />}
                  </div>

                  <span className={`text-xl sm:text-2xl md:text-3xl select-none ${isSelected ? 'text-primary font-bold' : 'text-black'}`}>
                    {candidato}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop buttons — hidden on mobile (shown as sticky bar instead) */}
        <div className="hidden sm:flex mt-8 md:mt-12 flex-col sm:flex-row gap-4 md:gap-12 w-full max-w-2xl justify-center">
          <button
            onClick={abrirModalBranco}
            className="flex-1 bg-brancoBtn text-primary px-8 py-3 md:py-4 rounded-xl text-lg md:text-2xl font-bold hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            Votar em Branco
          </button>
          <button
            onClick={abrirModalConfirmacao}
            className="flex-1 bg-primary text-white px-8 py-3 md:py-4 rounded-xl text-lg md:text-2xl font-bold hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            Confirmar Voto
          </button>
        </div>
      </section>

      {/* Mobile sticky bottom buttons */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-secondary/95 backdrop-blur-md border-t border-black/10 px-3 py-3 flex gap-3 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <button
          onClick={abrirModalBranco}
          className="flex-1 bg-brancoBtn text-primary px-3 py-3 rounded-xl text-sm font-bold active:scale-95 transition-all shadow-md"
        >
          Votar em Branco
        </button>
        <button
          onClick={abrirModalConfirmacao}
          className="flex-1 bg-primary text-white px-3 py-3 rounded-xl text-sm font-bold active:scale-95 transition-all shadow-md"
        >
          Confirmar Voto
        </button>
      </div>

      {/* Footer spacing — only on desktop */}
      <div className="hidden md:block h-10"></div>

      {/* Modals */}
      <Modal
        isOpen={modalConfirmacaoOpen}
        title=""
        message={`Você deseja confirmar o voto para: ${opcoesSelecionadas.join(', ')}`}
        onConfirm={confirmarVoto}
        onCancel={() => setModalConfirmacaoOpen(false)}
      />

      <Modal
        isOpen={modalBrancoOpen}
        title=""
        message={`Você deseja votar em branco para: ${etapa.nome}`}
        onConfirm={confirmarVoto}
        onCancel={() => setModalBrancoOpen(false)}
      />

      <Modal
        isOpen={modalFinalizacaoOpen}
        title="Voto Finalizado!"
        message={
          <>
            Sua votação foi registrada com sucesso. <br /><br />
            A IBRC agradece a sua participação na votação.
          </>
        }
        confirmText="Fechar"
        onConfirm={reiniciar}
        showCancel={false}
      />

      <Modal
        isOpen={modalAlertaOpen}
        title="⚠️ ATENÇÃO"
        message={mensagemAlerta}
        confirmText="Entendi"
        onConfirm={() => setModalAlertaOpen(false)}
        showCancel={false}
      />
    </div>
  );
}
