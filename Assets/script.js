var startPage = document.querySelector("#section1");
var timerCount = document.querySelector("#timerCount");
var buttons = document.getElementsByTagName("button");
var startButton = document.querySelector("#startButton");
var selectedButton;
var questions = Array.from(document.querySelectorAll(".questions"));
var questionsIndexNumber = 0;
var pTag = document.getElementsByTagName("p");
var correct = 0;
var wrong = 0; 
var finalScore = document.querySelector(".finalScore");

var timerEl = document.querySelector("#timer");
var timerCount = 75;
var studentName = document.querySelector("#initials");
var summaryPage = document.querySelector(".summary");
var viewScore = document.querySelector("#viewScore");
var scoreBoard = document.querySelector(".scoreBoard");
var recordItem = document.createElement("li");
var clearButton = document.querySelector("#clear");


function startQuiz(){
  viewScore.classList.add("hide");
  finalScore.textContent = 0;
  startPage.classList.add("hide");
  questions[0].classList.remove("hide");
  renderQuestionPage();
}

function renderQuestionPage (){
  timer75();
  for (let i = 1; i < 21; i++) {
    buttons[i].addEventListener("click", function() {
    selectedButton = buttons[i].className;
    buttonCheck();

    });
  }
}

function timer75(){
  timer = setInterval(function() {
    timerEl.textContent = timerCount;
    timerCount--;

    if (selectedButton=="correctAnswer") {
      }
    if (selectedButton=="wrongAnswer") {
      timerCount -= 10;
    }
    if ((timerCount === 0) || (finalScore.textContent==100)) {
      timerEl.textContent ="";
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
  timerCount = 75;
}

function buttonCheck() {
  if(selectedButton=="correctAnswer"){
    correct ++;
    questions[questionsIndexNumber].classList.add("hide");
    if (questionsIndexNumber<4){
      questionsIndexNumber++;
      questions[questionsIndexNumber].classList.remove("hide");
    }
    else{
      questions[questionsIndexNumber].classList.add("hide");
      summaryPage.classList.remove("hide");
    }
    localStorage.setItem("Correct Answer: ", correct);
  }
  else if(selectedButton=="wrongAnswer"){
    wrong ++;
    pTag[questionsIndexNumber].textContent="Wrong!"
    localStorage.setItem("Wrong Answer: ", wrong);
  }

  finalScore.textContent=correct*20;
    if (finalScore.textContent<0){
      finalScore.textContent=0;
    }
}

function endQuiz(){
  questions[questionsIndexNumber].classList.add("hide");
  summaryPage.classList.remove("hide");
  viewScore.classList.remove("hide");

  document.querySelector("#initialButton").addEventListener("click", function() {
    document.querySelector("#scoreList").append(recordItem.textContent = studentName.value + " - " + finalScore.textContent);
    localStorage.setItem("record",recordItem.textContent);
    summaryPage.classList.add("hide");
    scoreBoard.classList.remove("hide");

  });
}

startButton.addEventListener("click", startQuiz);
document.querySelector("#backButton").addEventListener("click", function(){
  scoreBoard.classList.add("hide");
  startPage.classList.remove("hide");
});

viewScore.addEventListener("click", function(){
  scoreBoard.classList.remove("hide");
  startPage.classList.add("hide");
  summaryPage.classList.add("hide");

});

clearButton.addEventListener("click", function(){
  localStorage. clear();
  document.querySelector("#scoreList").innerHTML = "";
});

