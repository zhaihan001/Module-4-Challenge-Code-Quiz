var startPage = document.querySelector("#section1");
var timerCount = document.querySelector("#timerCount");
var buttons = document.getElementsByTagName("button");
var correctSelection = document.getElementsByClassName("correctAnswer");
var wrongSelection = document.getElementsByClassName("wrongAnswer");
var startButton = document.querySelector("#startButton");
var questions = Array.from(document.querySelectorAll(".questions"));
var questionsIndexNumber = 0;
var pTag = document.getElementsByTagName("p");

var correct = 0;
var wrong = 0; 
var finalScore = document.querySelector(".start-button");
var chosenItem = "";
var iscorrect = false;
var timer;

function startQuiz(){
  startPage.classList.add("hide");
  questions[0].classList.remove("hide");
  renderQuestionPage();
}

function renderQuestionPage (){
  for (let i = 1; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
    buttonsCheck(this, i);
    });
  }
}

function buttonsCheck(buttons, i) {
  console.log(i);
  console.log(buttons.className);
  if(buttons.className==="correctAnswer"){
    correct ++;
    questions[questionsIndexNumber].classList.add("hide");
    questionsIndexNumber++;
    questions[questionsIndexNumber].classList.remove("hide");
    pTag.textContent="Correct!"
    localStorage.setItem("Correct Answer: ", correct);
  }
  else if(buttons.className==="wrongAnswer"){
    wrong ++;
    pTag.textContent="Wrong!"
    localStorage.setItem("Wrong Answer: ", wrong);
    return renderQuestionPage();
  }
    // finalScore.textContent=(correct*20-wrong*20);
}

// function timer(){

// }

// function answerCorrect(){

// }

// function answerWrong(){

// }


startButton.addEventListener("click", startQuiz);



// // Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// function renderBlanks(){
//   chosenWord = words[Math.floor(Math.random()*words.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   wordBlank.textContent = blanksLetters.join(" ");
// }

// function startTimer() {
//   timerCount = 10;
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;

//     if (isWin && timerCount > 0) {
//       clearInterval(timer);
//       winGame();
//       }
//     if (timerCount === 0) {
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }
// // Updates win count on screen and sets win count to client storage
// // function setWins() {
// //   win.textContent = winCounter;
// //   localStorage.setItem("winCount", winCounter);
// // }

// // Updates lose count on screen and sets lose count to client storage
// // function setLosses() {
// //   lose.textContent = loseCounter;
// //   localStorage.setItem("loseCount", loseCounter);
// // }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }
// 
