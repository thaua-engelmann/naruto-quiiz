// Start Quiz;
const startQuizFront = document.querySelector('.start-quiz .front');

// Info box;
const infoBoxTitle = document.querySelector('.info-box-title h3');

const ruleOne = document.querySelector('.info-box li:nth-child(1)');
const ruleTwo = document.querySelector('.info-box li:nth-child(2)');
const ruleThree = document.querySelector('.info-box li:nth-child(3)');
const ruleFour = document.querySelector('.info-box li:nth-child(4)');
const ruleFive = document.querySelector('.info-box li:nth-child(5)');

// Quiz Box;
const quizTimer = document.querySelector('.timer-text');
const totalQuestions = document.querySelector('.total-questions');

// Result Box;
const ResultMessage = document.querySelector('.result-box-text');

// Changing the language of the page;
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

if (window.location.hash) {
    if (window.location.hash === '#ptBr') {
        // Start Quiz;
        startQuizFront.innerHTML = "Começar Quiz!";

        // Info Box;
        infoBoxTitle.textContent = "Algumas regras do Quiz *";
        ruleOne.innerHTML = "1. Você terá apenas <span>15 segundos</span> para responder cada questão.";
        ruleTwo.innerHTML = "2. Uma vez selecionada a resposta, não poderá ser desfeito.";
        ruleThree.innerHTML = "3. Você não poderá selecionar nenhuma opção uma vez que o tempo acabar.";
        ruleFour.innerHTML = "4. Você não poderá sair do Quiz enquanto estiver jogando.";
        ruleFive.innerHTML = "5. Você receberá pontos conforme seus acertos.";

        exitBtn.innerHTML = "Sair";
        continueBtn.innerHTML = "Continuar";

        // Quiz Box;
        questions[0].question = "Qual o nome do Nove Caudas?";
        questions[1].question = "Como era chamado o plano final de Obito/Madara?";
        questions[2].question = "Qual o nome da espada do Zabuza?";
        questions[3].question = "Quantas vezes o Naruto falhou no teste de graduação na academia?";
        questions[3].options = [
            "Uma vez",
            "Quatro vezes",
            "Duas vezes",
            "Três vezes"
        ];
        questions[3].answer = "Três vezes";
        questions[4].question = "Qual o nome dado ao líder da Vila da Água? (kirigakure)?"
        questions[5].question = "Quem destes abaixo possui Kekkei Tōta?";
        questions[6].question = "Qual o nome do protagonista no primeiro livro de Jiraiya — O Conto de um Ninja Destemido?";
        questions[7].question = "Como o pai de Kakashi era chamado?";
        questions[7].options = [
            "Cachorro Branco",
            "Canino Branco",
            "Leão Branco",
            "Passáro Branco",
        ];
        questions[7].answer = "Canino Branco";
        questions[8].question = "Quem disse ao Naruto que se ele roubasse o Pergaminho Proibido, ele passaria no exame?";
        questions[9].question = "Qual era o nome do primeiro parceiro do Itachi na Akatsuki?";

        quizText.innerHTML = "Tempo";

        nextBtn.innerHTML = "Próxima Questão";

        // Result Box;
        ResultMessage.innerHTML = "Você completou o Quiz! E...";
        quitQuiz.innerHTML = "Sair do Quiz";
        restartQuiz.innerHTML = "Reiniciar Quiz";
    }
}

// Language Menu;
const languageMenu = document.querySelector('.language-menu');
const languages = document.querySelector('.language-list');

languageMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Two handle clickers at the same time — this one and the window one. Here's a bug because it can't handle two at once. So we need to stop one for the another occur;
    languages.classList.add('show');
});

// If user clicks anywhere on the page, closes language menu;
window.addEventListener('click', (e) => {
    if (e.target !== languageMenu) {
        languages.classList.remove('show')
    }
})