var btnRock;
var btnScissor;
var btnPaper;
var countObj;
var resultObj;
var scoreObj;
var score = 0;
var botSelection;
document.addEventListener('DOMContentLoaded', function () {
  // Declare DOM objects
  btnRock = document.getElementById('rock'); //0
  btnPaper = document.getElementById('paper'); //2
  btnScissor = document.getElementById('scissor'); //1
  countObj = document.getElementById('count');
  resultObj = document.getElementById('result');
  scoreObj = document.getElementById('score');

  // Add Listeners
  btnRock.addEventListener('click', getResult);
  btnPaper.addEventListener('click', getResult);
  btnScissor.addEventListener('click', getResult);

  document.getElementById('myform').onsubmit = startOver;

  if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0);
  }
  // Load from localstorage
  scoreObj.innerHTML = localStorage.getItem('score');

  function startOver() {
    localStorage.setItem('score', 0);
    score = localStorage.getItem('score');
  }

  function getResult(event) {
    randomPicker();
    let userSelection = event.target.id;
    console.log('User:' + event.target.id);
    determineWinner(botSelection, userSelection);
    scoreObj.innerHTML = localStorage.getItem('score');
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
    // return botSelection;
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
    localStorage.setItem('score', score);
    resultObj.innerHTML = result;
  }
});
