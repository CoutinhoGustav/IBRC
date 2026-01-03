const etapas = [
  { nome: 'Diácono', minCandidatos: 1, maxCandidatos: 5, candidatos: ['1.Alexandro', '2.Ari', '3.Cavalcante', '4.Edvaldo', '5.Phillip Thércio'] },
  { nome: 'Tesoureiro', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Alexandro'] },
  { nome: 'Secretário de Finanças', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Marvin'] },
  { nome: 'Secretaria', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Priscilla', '2.Yngrid'] },
  { nome: 'Superintendente', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Phillip Thércio'] },
  { nome: 'Secretário da EBD', minCandidatos: 1, maxCandidatos: 1, candidatos: ['1.Naum'] },
  { nome: 'Comissão de Exames de Contas', minCandidatos: 1, maxCandidatos: 4, candidatos: ['1.Ariadna', '2.Elisangela', '3.France', '4.Sônia'] }
];

let etapaAtual = 0;
let votos = JSON.parse(localStorage.getItem('votos')) || {};

// Função para exibir as opções de votação
function exibirOpcoes() {
  const etapa = etapas[etapaAtual];
  document.getElementById('etapa').innerText = `Cargo: ${etapa.nome}`;
  const opcoesContainer = document.getElementById('opcoes');
  opcoesContainer.innerHTML = '';
  etapa.candidatos.forEach((candidato, index) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = candidato;
    checkbox.className = 'option';
    checkbox.id = `candidato${index + 1}`;
    opcoesContainer.appendChild(checkbox);
    const label = document.createElement('label');
    label.textContent = candidato;
    opcoesContainer.appendChild(label);
    opcoesContainer.appendChild(document.createElement('br'));
  });
}

// Função para abrir o modal de confirmação
function abrirModal() {
  const opcoesSelecionadas = Array.from(document.querySelectorAll('.option:checked')).map(input => input.value);
  const etapa = etapas[etapaAtual];
  if (opcoesSelecionadas.length < etapa.minCandidatos || opcoesSelecionadas.length > etapa.maxCandidatos) {
    alert(`ATENÇÃO! Selecione no máximo até ${etapa.maxCandidatos}`);
    return;
  }
  document.getElementById('confirmacaoMensagem').innerText = `Você deseja confirmar o voto para: ${opcoesSelecionadas.join(', ')}`;
  document.getElementById('ConfirmarcaoModal').style.display = 'block'; // Exibe o modal de confirmação
}

// Função para abrir o modal de voto em branco
function abrirModalBranco() {
  const etapa = etapas[etapaAtual];
  document.getElementById('confirmacaoMensagem').innerText = `Você deseja votar em branco para: ${etapa.nome}`;
  document.getElementById('ConfirmarcaoModal').style.display = 'block'; // Exibe o modal de confirmação
}

// Função para confirmar o voto e avançar
function confirmarVoto() {
  const opcoesSelecionadas = Array.from(document.querySelectorAll('.option:checked')).map(input => input.value);
  const etapa = etapas[etapaAtual];
  if (!votos[etapa.nome]) {
    votos[etapa.nome] = { candidatos: [], branco: 0 };
  }
  if (opcoesSelecionadas.length > 0) {
    votos[etapa.nome].candidatos.push(opcoesSelecionadas);
  } else {
    votos[etapa.nome].branco++; // Conta o voto em branco
  }
  localStorage.setItem('votos', JSON.stringify(votos)); // Armazenar votos no LocalStorage
  fecharModal();
  proximo();
}

// Função para fechar o modal de confirmação
function fecharModal() {
  document.getElementById('ConfirmarcaoModal').style.display = 'none'; // Oculta o modal de confirmação
}

// Função para avançar para a próxima etapa
function proximo() {
  etapaAtual++;
  if (etapaAtual === etapas.length) {
    mostrarModalFinalizacao(); // Exibe o modal de finalização
  } else {
    exibirOpcoes(); // Chama imediatamente para a próxima etapa
  }
}

// Função para exibir o modal de finalização
function mostrarModalFinalizacao() {
  document.getElementById('finalizacaoModal').style.display = 'block'; // Exibe o modal de finalização
}

// Função para fechar o modal de finalização e reiniciar a votação
function fecharModalFinalizacao() {
  document.getElementById('finalizacaoModal').style.display = 'none'; // Fecha o modal de finalização
  etapaAtual = 0; // Reseta a etapa para o início
  exibirOpcoes(); // Exibe novamente as opções da primeira etapa
}

// Função para verificar o resultado
function verificarResultado() {
  const resultado = calcularResultado();
  const resultadoStr = JSON.stringify(resultado);
  window.location.href = `resultado.html?votos=${encodeURIComponent(resultadoStr)}`;
}

// Função para calcular os resultados
function calcularResultado() {
  const resultado = {};
  for (const etapa of etapas) {
    const votosEtapa = votos[etapa.nome] || { candidatos: [], branco: 0 };
    resultado[etapa.nome] = {};
    for (const candidato of etapa.candidatos) {
      resultado[etapa.nome][candidato] = votosEtapa.candidatos.reduce((total, voto) => total + (voto.includes(candidato) ? 1 : 0), 0);
    }
    resultado[etapa.nome]['Voto em Branco'] = votosEtapa.branco;
  }
  return resultado;
}

// Evento para verificar Ctrl + R
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'r') {
    event.preventDefault(); // Impede a ação padrão de recarregar a página
    verificarResultado(); // Chama a função de verificar resultado
  }
});

// Evento para capturar teclas numéricas e Enter
document.addEventListener('keydown', function(event) {
  const key = event.key; // Pega a tecla pressionada

  // Verifica se a tecla pressionada é um número de 1 a 9
  if (key >= '1' && key <= '9') {
    const checkboxes = document.querySelectorAll('.option');
    const index = parseInt(key, 10) - 1; // Converte para índice (base 0)

    // Marca ou desmarca a caixa correspondente ao número
    if (checkboxes[index]) {
      checkboxes[index].checked = !checkboxes[index].checked;
    }
  }

  // Verifica se a tecla pressionada é "0" (voto em branco)
  if (key === '0') {
    abrirModalBranco(); // Abre o modal de voto em branco
  }

  // Verifica se a tecla pressionada é "Enter" para confirmar
  if (key === 'Enter') {
    // Verifica se o modal está aberto
    const modalAberto = document.getElementById('ConfirmarcaoModal').style.display === 'block';
    if (modalAberto) {
      confirmarVoto(); // Confirma o voto se o modal estiver aberto
    } else {
      abrirModal(); // Abre o modal de confirmação de voto
    }
  }
});

// Evento para fechar o modal de finalização ao clicar no botão
document.getElementById('fecharModalFinalizacao').addEventListener('click', fecharModalFinalizacao);

// Chamada inicial para exibir a primeira etapa
exibirOpcoes();