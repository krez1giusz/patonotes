/***********************************
 * Zmodyfikowany kod trybu BULLET
 * (wersja z quizem wielokrotnego wyboru)
 ***********************************/

// Globalne zmienne dla trybu nauki i testu
let bulletModeActive = false;
let learningFlashcards = [];  // Fiszki wybrane do nauki (ładowane z JSON lub osadzone)
let testFlashcards = [];      // Pula fiszek do testu (losowo wybrana z nauki – połowa)
let currentTestIndex = 0;
let testScore = 0;
let totalTestQuestions = 0;

// Załóżmy, że fiszki ładujesz z pliku JSON lub masz je w zmiennej globalnej.
// Możesz np. wczytać plik JSON przy użyciu fetch(), lub osadzić je tutaj.
// Dla przykładu – poniżej przykładowe dane (możesz zastąpić je zawartością z flashcards.json):
let lectureFlashcards = [];

lectureFlashcards = flash_cards
  
/**
 * Czyści zawartość kontenera (element o id "bulletQuestionContainer")
 */
function clearBulletContainer() {
  const container = document.getElementById("bulletQuestionContainer");
  if (container) {
    container.innerHTML = "";
  }
}

/**
 * Faza nauki: użytkownik wpisuje liczbę fiszek i przegląda je.
 */
function startBulletMode() {
  if (!selectedSubject) {
    alert("Najpierw wybierz przedmiot!");
    return;
  }
  bulletModeActive = true;
  clearBulletContainer();
  
  // Pobierz liczbę fiszek wpisaną przez użytkownika
  let numFlashcards = parseInt(document.getElementById("questionamount").value, 10);
  if (!numFlashcards || numFlashcards < 1) {
    alert("Wprowadź prawidłową liczbę fiszek!");
    return;
  }
  if (numFlashcards > lectureFlashcards.length) {
    numFlashcards = lectureFlashcards.length;
    alert(`Maksymalna liczba dostępnych fiszek to ${lectureFlashcards.length}.`);
  }
  
  // Wybieramy losowo fiszki z pełnej puli
  learningFlashcards = shuffleArray([...lectureFlashcards]).slice(0, numFlashcards);
  
  // Wyświetlamy fiszki do nauki
  displayLearningFlashcards();
}

/**
 * Wyświetla wszystkie fiszki do nauki.
 * Każda fiszka pokazuje pytanie i przycisk "Pokaż odpowiedź".
 * Na końcu pojawia się przycisk "Nauka skończona", który przełącza do fazy testu.
 */
function displayLearningFlashcards() {
  const container = document.getElementById("bulletQuestionContainer");
  container.innerHTML = "";
  
  learningFlashcards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "flashcard";
    
    const questionEl = document.createElement("p");
    questionEl.className = "flashcard-question";
    questionEl.innerText = `${index + 1}. ${card.pytanie}`;
    cardDiv.appendChild(questionEl);
    
    const answerEl = document.createElement("p");
    answerEl.className = "flashcard-answer";
    answerEl.innerText = card.odpowiedz;
    answerEl.style.display = "none";
    cardDiv.appendChild(answerEl);
    
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Pokaż odpowiedź";
    toggleBtn.onclick = function() {
      if (answerEl.style.display === "none") {
        answerEl.style.display = "block";
        toggleBtn.innerText = "Ukryj odpowiedź";
      } else {
        answerEl.style.display = "none";
        toggleBtn.innerText = "Pokaż odpowiedź";
      }
    };
    cardDiv.appendChild(toggleBtn);
    
    container.appendChild(cardDiv);
  });
  
  // Przycisk przejścia do testu
  const finishBtn = document.createElement("button");
  finishBtn.innerText = "Nauka skończona";
  finishBtn.onclick = startBulletTest;
  container.appendChild(finishBtn);
}

/**
 * Faza testu – losowo wybieramy połowę z nauczonych fiszek.
 * Następnie dla każdego pytania generowany jest quiz wielokrotnego wyboru.
 */
function startBulletTest() {
  if (learningFlashcards.length < 2) {
    alert("Za mało fiszek do przeprowadzenia testu.");
    return;
  }
  const testCount = Math.floor(learningFlashcards.length / 2);
  testFlashcards = shuffleArray([...learningFlashcards]).slice(0, testCount);
  
  currentTestIndex = 0;
  testScore = 0;
  totalTestQuestions = testFlashcards.length;
  
  clearBulletContainer();
  loadBulletTestQuestion();
}

/**
 * Generuje opcje odpowiedzi dla danego pytania.
 * W tablicy opcji znajduje się poprawna odpowiedź oraz trzy losowo dobrane niepoprawne.
 */
function generateOptions(card) {
  const correct = card.odpowiedz;
  let pool = [];
  // Zbieramy odpowiedzi z pełnej puli, pomijając poprawną
  lectureFlashcards.forEach(c => {
    if (c.odpowiedz !== correct) {
      pool.push(c.odpowiedz);
    }
  });
  pool = shuffleArray([...pool]);
  let distractors = pool.slice(0, 3);
  // Jeśli nie ma wystarczająco, uzupełniamy przykładowymi tekstami
  while (distractors.length < 3) {
    distractors.push("Niepoprawna odpowiedź " + (distractors.length + 1));
  }
  let options = [correct, ...distractors];
  options = shuffleArray(options);
  return options;
}

/**
 * Wyświetla kolejne pytanie testowe w formie quizu wielokrotnego wyboru.
 */
function loadBulletTestQuestion() {
  const container = document.getElementById("bulletQuestionContainer");
  container.innerHTML = "";
  
  if (currentTestIndex >= totalTestQuestions) {
    // Koniec testu – wyświetl wynik
    const resultEl = document.createElement("p");
    resultEl.innerText = `Test zakończony: ${testScore} poprawnych odpowiedzi na ${totalTestQuestions} pytań.`;
    container.appendChild(resultEl);
    
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Powtórz cykl";
    restartBtn.onclick = function() {
      clearBulletContainer();
      bulletModeActive = false;
    };
    container.appendChild(restartBtn);
    return;
  }
  
  const card = testFlashcards[currentTestIndex];
  const questionEl = document.createElement("p");
  questionEl.className = "flashcard-test-question";
  questionEl.innerText = `${currentTestIndex + 1}. ${card.pytanie}`;
  container.appendChild(questionEl);
  
  // Wygeneruj opcje odpowiedzi
  const options = generateOptions(card);
  
  // Utwórz formularz z radiobuttonami
  const form = document.createElement("form");
  options.forEach((option, idx) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(option));
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  });
  container.appendChild(form);
  
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "Sprawdź odpowiedź";
  checkBtn.onclick = function(e) {
    e.preventDefault();
    const selected = form.querySelector('input[name="option"]:checked');
    if (!selected) {
      alert("Wybierz odpowiedź!");
      return;
    }
    const feedback = document.createElement("p");
    if (selected.value === card.odpowiedz) {
      feedback.innerText = "Poprawna odpowiedź!";
      testScore++;
    } else {
      feedback.innerText = "Błędna odpowiedź. Poprawna odpowiedź: " + card.odpowiedz;
    }
    container.appendChild(feedback);
    
    // Blokujemy formularz
    form.querySelectorAll("input[name='option']").forEach(radio => radio.disabled = true);
    checkBtn.disabled = true;
    
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Następne pytanie";
    nextBtn.onclick = function() {
      currentTestIndex++;
      loadBulletTestQuestion();
    };
    container.appendChild(nextBtn);
  };
  container.appendChild(checkBtn);
}
