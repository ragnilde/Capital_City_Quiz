let questions = [];
let wrongAnswersPool = {};
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

const startBtn = document.getElementById('start-btn');
const learnBtn = document.getElementById('learn-btn');
const quizContainer = document.getElementById('quiz-container');
const resultElement = document.getElementById('result');
const questionNumberElement = document.getElementById('current-question-number');
const questionElement = document.getElementById('question');
const questionImageElement = document.getElementById('question-image');
const optionsElement = document.getElementById('options');
const timeLeftElement = document.getElementById('time-left');

startBtn.addEventListener('click', async () => {
    await startQuiz();
});
learnBtn.addEventListener('click', () => window.location.href = 'learn.html');

async function loadJsonData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load JSON data from ${url}`);
    }
    return response.json();
}

async function initializeQuiz() {
    try {
        questions = await loadJsonData('/json/questions.json');
        wrongAnswersPool = await loadJsonData('/json/answers.json');
    } catch (error) {
        console.error('Error initializing quiz:', error);
    }
}

initializeQuiz();

async function startQuiz() {
    await initializeQuiz();

    startBtn.style.display = 'none';
    learnBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    resultElement.style.display = 'none';

    questions = shuffleArray(questions);
    questions = questions.slice(0, 50);

    loadQuestion();
}

function loadQuestion() {
    clearInterval(timerInterval);
    const questionData = questions[currentQuestionIndex];

    questionNumberElement.textContent = currentQuestionIndex + 1;
    questionElement.textContent = questionData.question;

    if (questionData.image) {
        questionImageElement.src = questionData.image;
        questionImageElement.style.display = 'block';
    } else {
        questionImageElement.style.display = 'none';
    }

    const questionType = questionData.type || "default";
    const wrongAnswers = getRandomWrongAnswers(questionData.type, questionData.correctAnswer, 3);
    const answers = [...wrongAnswers];
    answers.splice(Math.floor(Math.random() * (answers.length + 1)), 0, questionData.correctAnswer);

    optionsElement.innerHTML = '';
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = answer;
        button.addEventListener('click', () => handleAnswer(answer, questionData.correctAnswer));
        optionsElement.appendChild(button);
    });

    startTimer();
}

function getRandomWrongAnswers(questionType, correctAnswer, numberOfWrongAnswers) {
    const wrongAnswers = (wrongAnswersPool[questionType] || wrongAnswersPool["default"]).filter(answer => answer !== correctAnswer);
    const selectedWrongAnswers = [];

    while (selectedWrongAnswers.length < numberOfWrongAnswers) {
        const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
        const selectedAnswer = wrongAnswers[randomIndex];
        if (!selectedWrongAnswers.includes(selectedAnswer)) {
            selectedWrongAnswers.push(selectedAnswer);
        }
    }

    return selectedWrongAnswers;
}

function handleAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score += 2;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    let timeLeft = 15;
    timeLeftElement.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                endQuiz();
            }
        }
    }, 1000);
}

function endQuiz() {
    quizContainer.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.querySelector('#score').textContent = score;
    saveHighScore(score);
}

function saveHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem('capitalCityQuiz')) || [];
    highScores.push(score);
    localStorage.setItem('capitalCityQuiz', JSON.stringify(highScores));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}