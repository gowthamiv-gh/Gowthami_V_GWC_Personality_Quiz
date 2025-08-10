/*Add your JavaScript here*/
var tuffScore = 0;
var untuffScore = 0;

var qCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", updtUS);
q1a2.addEventListener("click", updtTS);
q2a1.addEventListener("click", updtTS);
q2a2.addEventListener("click", updtUS);
q3a1.addEventListener("click", updtTS);
q3a2.addEventListener("click", updtUS);

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

function updtUS() {
  untuffScore += 1;
  qCount += 1;

  console.log("qCount = " + qCount + "untuffScore = " + untuffScore);

  if (qCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}



function updtTS() {
  tuffScore += 1;
  qCount += 1;

  console.log("qCount = " + qCount + "tuffScore = " + tuffScore);

  if (qCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if (tuffScore >= 2) {
    console.log("You are a tuff person!");
    document.getElementById("result").innerHTML = "You are a tuff person!";
    resetScores();
  } else  {
    console.log("You are an Un-tuff person");
    document.getElementById("result").innerHTML = "You are an un-tuff person!";
    resetScores();
  }
}

function resetScores() {
  tuffScore = 0;
  untuffScore = 0;
  qCount = 0;
}

function restartQuiz() {
  window.location.reload();
}