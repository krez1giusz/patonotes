//generateQuestion();
var questionsAmount = 1;
let askedQuestions = new Set();
function generateQuestion() {
    // let element = questions[1]
    // console.log(element.pytanie+ " PYTANIE")
    // console.log(questions.length+ " DLUGOSC TABLICY Z PYTANIAMI")
    // console.log(usedQuestions.length+ " DRUGA TABLICA")

    
    // console.log(usedQuestions[element] + " BEFORE")
    // usedQuestions[element] = true;
    // console.log(usedQuestions[element] + " AFTER")

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
    askedQuestions.clear()
    clearObjects()
    const mainBox = document.createElement("div");
    mainBox.className = "mainBox";
    const checkButton = document.createElement("button");
        checkButton.className = 'controlBtn',
        checkButton.onclick = checkQuestions,
        checkButton.innerText = "SPRAWDŹ TEST"
        mainBox.appendChild(checkButton)

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
    
        for (const odpowiedz of generatedQuestion.answers) {
            const answer = createAnswer(odpowiedz.text, odpowiedz.correct)
            answersContainer.appendChild(answer)
        }

        singleQuestion.appendChild(answersContainer);
  
        mainBox.appendChild(singleQuestion);


    
    }


    document.body.appendChild(mainBox);
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
    let correctAnswers = 0;

    var answers = document.querySelectorAll(".odpowiedz");

    answers.forEach(function(answer){
        const input = answer.querySelector('input');
        const span = answer.querySelector('span')
        console.log(input.dataset.correct,input.checked)
        if(input.checked){
            if(input.dataset.correct == "1"){
                correctAnswers++
                span.style.color = "green";
            } else if(isCorrect >= 2){
                correctAnswers--;
             } else{
                span.style.color = "red";
                
            }
        }else{
            if(input.dataset.correct == "1"){
                span.style.color = "purple"
            }
        }
    })

    alert("WYNIK: "+correctAnswers)

    // var elements = document.querySelectorAll(".odpowiedz");



    
    // let correctAnswers = 0;
    // for( var i = 0; elements[i]; ++i){
    //     const input = elements[i].querySelector("input");
    //     const span = elements[i].querySelector("span");
    //     console.log(input.checked, input.dataset.correct);

    //     if(input.checked && input.dataset.correct){
    //         correctAnswers++;
    //         span.style.color = "green";
    //     }


    //     // console.log(elements[i].querySelector('input').checked);
    //     // if(elements[i].checked) {
    //     //     if(elements[i].querySelector('input').correct){
    //     //         correctAnswers++;
    //     //         elements[i].querySelector('span').style.color = "green";
    //     //     }else{
    //     //         // elements[i].
    //     //     }
    //     // }else{
    //     //     if(elements[i].querySelector('input').correct){
    //     //         elements[i].querySelector('input').checked;
    //     //     }
    //     // }

    // }
    // //alert("POPRAWNE ODPOWIEDZI: "+correctAnswers);

}


