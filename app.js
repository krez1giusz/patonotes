
var questionsAmount = 1;
let askedQuestions = new Set();
var selectedSubject;
let questions

function selectSubject(subject){ 

    switch (subject) {
    case "tak":
        questions = tak_questions;
        break;
    case "wsi":
        questions = wsi_questions;
        break;
    default:
        console.log("Error");
}
selectedSubject = subject;

}




function generateQuestion() {

    if (questions.length === askedQuestions.size) {
        console.log("All questions have been asked.");
        return;
    }

    let question;
    do {
        question = questions[Math.floor(Math.random() * questions.length)];
    } while (askedQuestions.has(question));

    askedQuestions.add(question);
    return question;
}

function startExam(){
    console.log(selectedSubject)
    if(selectedSubject == undefined){
        console.log("NIE WYBRALES PRZEDMIOTU")
        alert("NIE WYBRAŁEŚ PRZEDMIOTU !")
        return;
    }
    askedQuestions.clear()
    clearObjects()
    const mainBox = document.createElement("div");
    mainBox.className = "mainBox";
    questionsAmount  = document.querySelector("#questionamount").value;
    

    console.log(questionsAmount,questions.length)

    if(questionsAmount > questions.length){
        questionsAmount = questions.length
    }
    

    for(var i = 0; i < questionsAmount; i++){

        const generatedQuestion = generateQuestion();

        const singleQuestion = document.createElement("div");
        singleQuestion.className = "singleQuestion";

        const questionSpan = document.createElement("span");
        questionSpan.className = "question";
        questionSpan.innerText = generatedQuestion.pytanie;
        singleQuestion.appendChild(questionSpan);
  
        const answersContainer = document.createElement("div");
        answersContainer.className = "questions";

        if(generatedQuestion.imgPath != undefined){
            const image = document.createElement('img')
            image.src = generatedQuestion.imgPath;
            singleQuestion.appendChild(image)
        }


        

        for (const odpowiedz of shuffleArray(generatedQuestion.answers)) {
            const answer = createAnswer(odpowiedz.text, odpowiedz.correct)
            answersContainer.appendChild(answer)
        }

        singleQuestion.appendChild(answersContainer);
  
        mainBox.appendChild(singleQuestion);


    
    }


    document.body.appendChild(mainBox);
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function clearObjects(){

    const mainBox = document.querySelector('.mainBox')
    if(mainBox == null){
        return
    }
    mainBox.remove();
    const singleQuestion = document.querySelector('.singleQuestion')
    if(singleQuestion == null){
        return
    }
    singleQuestion.remove();
    const question = document.querySelector('.question')
    if(question == null){
        return
    }
    question.remove();
    const questions = document.querySelector('.questions')
    if(questions == null){
        return
    }
    questions.remove();
    const answer = document.querySelector('.odpowiedz')
    if(answer == null){
        return
    }
    answer.remove();
    const inputs = document.querySelectorAll('input')
    if(inputs == null){
        return
    }
    inputs.forEach(function (input){
        input.remove();
    })
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
    let totalCorrectAnswers = 0

    const ans = document.querySelectorAll(".questions");
    ans.forEach(function(question){
        let correctForAnswer = 0;
        let checkedCorrectAnswers = 0;
        const inputs = question.querySelectorAll('input')
        inputs.forEach(function(input){
            
            const span = input.nextElementSibling;
        
            if(input.dataset.correct == "1"){
                correctForAnswer++;
            }

            if(input.checked && input.dataset.correct == "1"){
                checkedCorrectAnswers++;
            }


            if(input.checked){
                if(input.dataset.correct == "1"){
                    span.style.color = "#03A062"
                } else{
                    span.style.color = "red";
                    
                }
            }else{
                if(input.dataset.correct == "1"){
                    span.style.color = "purple"
                }
            }

        })
        if(checkedCorrectAnswers == correctForAnswer){
            totalCorrectAnswers++
        }


    })

    alert("LICZBA POPRAWNYCH ODPOWIEDZI: "+totalCorrectAnswers+"/"+questionsAmount+"("+(totalCorrectAnswers*100/questionsAmount).toFixed(1)+"%)")
}


