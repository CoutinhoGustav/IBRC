let currentPlayer = '';
let players = { player1: '', player2: '' };
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let currentSymbol = 'X';

let questions = [
    {
        question: "Qual é a capital da França?",
        correct_answer: "Paris",
        incorrect_answers: ["Londres", "Berlim", "Madri"]
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        correct_answer: "Júpiter",
        incorrect_answers: ["Marte", "Terra", "Saturno"]
    },
    // Adicione mais perguntas conforme necessário
];

// Iniciar o jogo após o nome dos jogadores serem inseridos
function startGame() {
    players.player1 = document.getElementById("player1").value;
    players.player2 = document.getElementById("player2").value;

    if (!players.player1 || !players.player2) {
        alert("Por favor, insira os nomes dos dois jogadores!");
        return;
    }

    // Exibe regras e sorteia quem começa
    showRules();
    let starter = Math.random() < 0.5 ? 'player1' : 'player2';
    currentPlayer = players[starter];
    document.getElementById('messagebox').innerHTML = `Regras: O jogador que acertar a pergunta preenche o espaço.<br><b>${currentPlayer}</b> começa o jogo!`;
    setupBoard();
}

// Mostra as regras do jogo
function showRules() {
    alert("Regras:\nCada vez que você escolher uma célula, responderá uma pergunta.\nSe acertar, poderá marcar a célula, caso contrário, o próximo jogador terá a chance.");
}

// Configura o tabuleiro de jogo
function setupBoard() {
    document.getElementById("playerForm").style.display = "none";
    document.getElementById("board").style.display = "grid";
    let boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';  // Limpa o tabuleiro anterior

    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = i;
        cell.addEventListener('click', () => handleMove(i));
        boardDiv.appendChild(cell);
    }
}

// Lidar com jogadas
function handleMove(cellIndex) {
    if (!gameActive || board[cellIndex]) return;  // Verifica se o jogo está ativo e se a célula está vazia

    // Pega uma pergunta antes de preencher a célula
    fetchQuestion(cellIndex);
}

// Usa perguntas locais em vez de chamar a API
function fetchQuestion(cellIndex) {
    if (questions.length === 0) {
        console.error("Nenhuma pergunta disponível.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * questions.length);
    let question = questions[randomIndex];
    showQuestion(question, cellIndex); // Exibe a pergunta
}

// Exibe a pergunta e opções de múltipla escolha
function showQuestion(question, cellIndex) {
    let questionBox = document.getElementById("questionBox");
    questionBox.style.display = "block";
    let correctAnswer = question.correct_answer;
    let options = [...question.incorrect_answers, correctAnswer].sort(() => Math.random() - 0.5);  // Embaralha as opções

    let questionHTML = `<p>${question.question}</p>`;
    options.forEach(option => {
        questionHTML += `<button onclick="checkAnswer('${option}', '${correctAnswer}', ${cellIndex})">${option}</button>`;
    });

    questionBox.innerHTML = questionHTML;
}

// Verifica se a resposta está correta
function checkAnswer(selectedAnswer, correctAnswer, cellIndex) {
    if (selectedAnswer === correctAnswer) {
        fillCell(cellIndex);  // Preenche a célula
        document.getElementById("questionBox").style.display = "none";
    } else {
        alert("Resposta incorreta! A vez passa ao próximo jogador.");
        switchPlayer();
    }
}

// Preenche a célula com o símbolo do jogador atual
function fillCell(cellIndex) {
    board[cellIndex] = currentSymbol;
    document.getElementById(cellIndex).innerHTML = currentSymbol;

    if (checkWin()) {
        gameActive = false;
        document.getElementById('messagebox').innerHTML = `Parabéns, ${currentPlayer}! Você venceu!`;
    } else if (board.every(cell => cell)) {
        document.getElementById('messagebox').innerHTML = `O jogo terminou em empate!`;
    } else {
        switchPlayer();
    }
}

// Alterna entre os jogadores
function switchPlayer() {
    currentSymbol = currentSymbol === 'X' ? 'O' : 'X';
    currentPlayer = currentPlayer === players.player1 ? players.player2 : players.player1;
    document.getElementById('messagebox').innerHTML = `Agora é a vez de <b>${currentPlayer}</b>`;
}

// Verifica se alguém venceu
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentSymbol);
    });
}