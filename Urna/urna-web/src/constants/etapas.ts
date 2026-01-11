export interface Etapa {
    nome: string;
    minCandidatos: number;
    maxCandidatos: number;
    candidatos: string[];
}

export const ETAPAS: Etapa[] = [
    { nome: 'Diácono', minCandidatos: 1, maxCandidatos: 5, candidatos: ['1.Alexandro', '2.Ari', '3.Cavalcante', '4.Edvaldo', '5.Phillip Thércio'] },
    { nome: 'Tesoureiro', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Alexandro'] },
    { nome: 'Secretário de Finanças', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Marvin'] },
    { nome: 'Secretaria', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Priscilla', '2.Yngrid'] },
    { nome: 'Superintendente', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Phillip Thércio'] },
    { nome: 'Secretário da EBD', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Naum'] },
    { nome: 'Comissão de Exames de Contas', minCandidatos: 1, maxCandidatos: 4, candidatos: ['1.Ariadna', '2.Elisangela', '3.France', '4.Sônia'] }
];
