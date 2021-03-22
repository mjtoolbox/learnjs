var btnRock;
var btnScissor;
var btnPaper;
var countObj;
var resultObj;
var scoreObj;
var startObj;
var counterObj;
var score = 0;
var counter = 6;
var botSelection;
var handler;
var userSelection;
document.addEventListener('DOMContentLoaded', function () {
  // Declare DOM objects
  btnRock = document.getElementById('rock'); //0
  btnPaper = document.getElementById('paper'); //2
  btnScissor = document.getElementById('scissor'); //1
  countObj = document.getElementById('count');
  resultObj = document.getElementById('result');
  scoreObj = document.getElementById('score');
  startObj = document.getElementById('start');
  counterObj = document.getElementById('counter');

  // disable them
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissor.disabled = true;

  // Add Listeners
  btnRock.addEventListener('click', getResult);
  btnPaper.addEventListener('click', getResult);
  btnScissor.addEventListener('click', getResult);
  startObj.addEventListener('click', start);

  document.getElementById('myform').onsubmit = startOver;

  if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0);
  }
  // Load from localstorage
  scoreObj.innerHTML = localStorage.getItem('score');

  function updateScore(score) {
    localStorage.setItem('score', score);
    scoreObj.innerHTML = localStorage.getItem('score');
  }

  function start() {
    //hide bring it on
    startObj.style.visibility = 'hidden';
    //enable buttons
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissor.disabled = false;

    //start count
    handler = setInterval(countdown, 1000);
  }

  function countdown() {
    counter--;
    counterObj.innerHTML =
      'Please select your choice in ' + counter + ' seconds!';
    if (counter === 0) {
      clearInterval(handler);

      if (userSelection != null) {
        // disable buttons
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissor.disabled = true;
      } else {
        // If no user selection, display "too slow, you lost"
        btnRock.disabled = false;
        btnPaper.disabled = false;
        btnScissor.disabled = false;
        handler = setInterval(countdown, 1000);
      }
    }
  }

  function startOver() {
    updateScore(0);
    counter = 5;
    startObj.style.visibility = 'visible';
  }

  function getResult(event) {
    randomPicker();
    userSelection = event.target.id;
    console.log('User:' + event.target.id);
    determineWinner(botSelection, userSelection);
    // reset for next round, enable buttons, restart counter
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissor.disabled = false;
    clearInterval(handler);
    counter = 5;
    handler = setInterval(countdown, 1000);
  }

  function randomPicker() {
    botSelection = null;
    let randomNumber = Math.floor(Math.random() * 100) % 3;
    if (randomNumber === 0) {
      botSelection = 'rock';
    } else if (randomNumber === 1) {
      botSelection = 'paper';
    } else {
      botSelection = 'scissor';
    }
    console.log('Bot:' + botSelection);
  }

  // 0, 1, 2, rock, scissor, paper
  // Initial idea is to have 9 conditions, but pre-define winner.
  function determineWinner(bot, user) {
    var result;
    switch (user) {
      case 'rock':
        if (bot === 'scissor') {
          result = 'You win';
          score++;
        } else if (bot === 'rock') {
          result = 'Draw';
        } else {
          result = 'You lost';
          score--;
        }
        break;
      case 'scissor':
        if (bot === 'paper') {
          result = 'You win';
          score++;
        } else if (bot === 'scissor') {
          result = 'Draw';
        } else {
          result = 'You lost';
          score--;
        }
        break;
      case 'paper':
        if (bot === 'rock') {
          result = 'You win';
          score++;
        } else if (bot === 'paper') {
          result = 'Draw';
        } else {
          result = 'You lost';
          score--;
        }
        break;
    }
    console.log('Result : ' + result);
    updateScore(score);
    resultObj.innerHTML = result;
  }
});
