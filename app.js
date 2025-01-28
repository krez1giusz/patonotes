let questionsAmount = 1;
let askedQuestions = new Set();
let selectedSubject;
let questions;


const totalQuestionsDisplay = document.getElementById("totalQuestions");

function selectSubject(subject) { 
    switch (subject) {
        case "tak":
            questions = tak_questions;
            break;
        case "wsi":
            questions = wsi_questions;
            break;
        case "skj":
            questions = skj_questions;
            break;
        case "rbd":
            questions = rbd_questions;
            break;
        default:
            console.error("Invalid subject selected");
            return;
    }
    selectedSubject = subject;
    updateTotalQuestions();
}

function updateTotalQuestions() {
    if (selectedSubject && questions) {
        totalQuestionsDisplay.innerText = `Ilość pytań: ${questions.length}`;
    } else {
        totalQuestionsDisplay.innerText = '';
    }
}

function generateQuestion() {
    if (questions.length === askedQuestions.size) {
        console.log("All questions have been asked.");
        return null;
    }

    let question;
    do {
        question = questions[Math.floor(Math.random() * questions.length)];
    } while (askedQuestions.has(question));

    askedQuestions.add(question);
    return question;
}

function startExam() {
    if (!selectedSubject) {
        console.warn("No subject selected");
        alert("NIE WYBRAŁEŚ PRZEDMIOTU!");
        return;
    }

    askedQuestions.clear();
    clearObjects();

    const mainBox = document.createElement("div");
    mainBox.className = "mainBox";

    const questionInput = document.querySelector("#questionamount");
    questionsAmount = parseInt(questionInput.value, 10) || 1;

    console.log(`Requested Questions: ${questionsAmount}, Available: ${questions.length}`);

    if (questionsAmount > questions.length) {
        questionsAmount = questions.length;
        alert(`Żądasz więcej pytań niż dostępnych. Ustawiono ilość na ${questionsAmount}.`);
    }

    for (let i = 0; i < questionsAmount; i++) {
        const generatedQuestion = generateQuestion();
        if (!generatedQuestion) break; 

        const singleQuestion = document.createElement("div");
        singleQuestion.className = "singleQuestion";

        const questionSpan = document.createElement("span");
        questionSpan.className = "question";
        questionSpan.innerText = `${i + 1}. ${generatedQuestion.pytanie}`;
        singleQuestion.appendChild(questionSpan);
      
        const answersContainer = document.createElement("div");
        answersContainer.className = "answers";

        if (generatedQuestion.imgPath) {
            const image = document.createElement('img');
            image.src = generatedQuestion.imgPath;
            image.alt = "Question Image";
            image.className = "questionImage";
            singleQuestion.appendChild(image);
        }

        for (const odpowiedz of shuffleArray([...generatedQuestion.answers])) {
            const answer = createAnswer(odpowiedz.text, odpowiedz.correct);
            answersContainer.appendChild(answer);
        }

        singleQuestion.appendChild(answersContainer);
        mainBox.appendChild(singleQuestion);
    }

    document.body.appendChild(mainBox);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function clearObjects(){
    const mainBox = document.querySelector('.mainBox');
    if(mainBox){
        mainBox.remove();
    }
}

function createAnswer(text, isCorrect) {
    const answerDiv = document.createElement("div");
    answerDiv.className = "odpowiedz";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.correct = isCorrect;

    const span = document.createElement("span");
    span.innerText = text;

    answerDiv.appendChild(checkbox);
    answerDiv.appendChild(span);

    return answerDiv;
}

function checkQuestions(){
    let totalCorrectAnswers = 0;

    const questionsElements = document.querySelectorAll(".singleQuestion");
    questionsElements.forEach(function(questionElem, index){
        const answers = questionElem.querySelectorAll('input');
        let correctForAnswer = 0;
        let checkedCorrectAnswers = 0;

        answers.forEach(function(input){
            const span = input.nextElementSibling;
        
            if(input.dataset.correct === "1"){
                correctForAnswer++;
            }

            if(input.checked && input.dataset.correct === "1"){
                checkedCorrectAnswers++;
            }

            if(input.checked){
                span.style.color = input.dataset.correct === "1" ? "#03A062" : "red";
            } else {
                if(input.dataset.correct === "1"){
                    span.style.color = "purple";
                }
            }
        });

        if(checkedCorrectAnswers === correctForAnswer){
            totalCorrectAnswers++;
        }
    });

    alert(`LICZBA POPRAWNYCH ODPOWIEDZI: ${totalCorrectAnswers}/${questionsAmount} (${((totalCorrectAnswers / questionsAmount) * 100).toFixed(1)}%)`);
}
