
let bulletModeActive = false;
let currentBulletQuestion = null;
const LEARN_THRESHOLD = 5; 


function getLearnedStats() {
    const key = `learnedStats_${selectedSubject}`;
    return JSON.parse(localStorage.getItem(key)) || {};
}

function saveLearnedStats(stats) {
    const key = `learnedStats_${selectedSubject}`;
    localStorage.setItem(key, JSON.stringify(stats));
}

function resetLearnedQuestions() {
    if (!selectedSubject) {
        alert("Wybierz przedmiot!");
        return;
    }
    localStorage.removeItem(`learnedStats_${selectedSubject}`);
    updateLearnedStatsDisplay();
}


function updateLearnedStatsDisplay() {
    if (!selectedSubject) return;
    const stats = getLearnedStats();

    const learnedCount = Object.values(stats).filter(count => count >= LEARN_THRESHOLD).length;
    const learnedStatsDiv = document.getElementById("learnedStats");
    learnedStatsDiv.innerText = `Nauczone pytania: ${learnedCount}`;
}


function startBulletMode() {
    if (!selectedSubject || !questions) {
        alert("Najpierw wybierz przedmiot!");
        return;
    }
    bulletModeActive = true;

    clearObjects();
    document.getElementById("bulletQuestionContainer").innerHTML = "";
    document.getElementById("bulletFeedback").innerText = "";
    loadBulletQuestion();
    updateLearnedStatsDisplay();
}


function stopBulletMode() {
    bulletModeActive = false;
    const bulletContainer = document.getElementById("bulletQuestionContainer");
    bulletContainer.innerHTML = "";
    document.getElementById("bulletFeedback").innerText = "";
}


function loadBulletQuestion() {
    const bulletContainer = document.getElementById("bulletQuestionContainer");
    bulletContainer.innerHTML = ""; // czyścimy poprzednie pytanie
    document.getElementById("bulletFeedback").innerText = "";
    

    const learnedStats = getLearnedStats();
    

    const availableQuestions = questions.filter(q => {
        const key = q.pytanie;
        return !learnedStats[key] || learnedStats[key] < LEARN_THRESHOLD;
    });
    
    if (availableQuestions.length === 0) {
        bulletContainer.innerHTML = "<p>Wszystkie pytania zostały już nauczone!</p>";
        return;
    }
    

    currentBulletQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    

    const singleQuestion = document.createElement("div");
    singleQuestion.className = "singleQuestion";
    
    const questionSpan = document.createElement("span");
    questionSpan.className = "question";
    questionSpan.innerText = currentBulletQuestion.pytanie;
    singleQuestion.appendChild(questionSpan);
    

    if (currentBulletQuestion.imgPath) {
        const image = document.createElement('img');
        image.src = currentBulletQuestion.imgPath;
        image.alt = "Question Image";
        image.className = "questionImage";
        singleQuestion.appendChild(image);
    }
    

    const answersContainer = document.createElement("div");
    answersContainer.className = "answers";
    
    for (const odpowiedz of shuffleArray([...currentBulletQuestion.answers])) {
        const answer = createAnswer(odpowiedz.text, odpowiedz.correct);
        answersContainer.appendChild(answer);
    }
    
    singleQuestion.appendChild(answersContainer);
    bulletContainer.appendChild(singleQuestion);

    const checkButton = document.createElement("button");
    checkButton.innerText = "SPRAWDŹ ODPOWIEDŹ";
    checkButton.onclick = checkBulletAnswer;
    bulletContainer.appendChild(checkButton);
}

function checkBulletAnswer() {
    const bulletContainer = document.getElementById("bulletQuestionContainer");
    const feedbackDiv = document.getElementById("bulletFeedback");
    const answers = bulletContainer.querySelectorAll(".singleQuestion input");
    let correctCount = 0;
    let totalCorrect = 0;
    
    answers.forEach(function(input) {
        const span = input.nextElementSibling;
        if (input.dataset.correct === "1") {
            totalCorrect++;
        }
        if (input.checked && input.dataset.correct === "1") {
            correctCount++;
        }

        if (input.checked) {
            span.style.color = input.dataset.correct === "1" ? "#03A062" : "red";
        } else {
            if (input.dataset.correct === "1") {
                span.style.color = "purple";
            }
        }
    });
    

    if (correctCount === totalCorrect) {
        feedbackDiv.innerText = "Poprawna odpowiedź!";
        updateLearnedProgress(currentBulletQuestion);
    } else {
        feedbackDiv.innerText = "Błędna odpowiedź. Spróbuj ponownie.";
    }
    

    if (!bulletContainer.querySelector("button:nth-of-type(2)")) {
        const nextButton = document.createElement("button");
        nextButton.innerText = "Następne pytanie";
        nextButton.onclick = loadBulletQuestion;
        bulletContainer.appendChild(nextButton);
    }
}

function updateLearnedProgress(question) {
    const learnedStats = getLearnedStats();
    const key = question.pytanie;
    learnedStats[key] = (learnedStats[key] || 0) + 1;
    saveLearnedStats(learnedStats);
    updateLearnedStatsDisplay();
}
