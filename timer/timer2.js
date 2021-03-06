var counter;
var handler = setInterval(countdown, 1000);
var displayCounter;
var startCounter;
var startbtn;

// Set up
function start() {
  counter = startCounter.value;
  displayCounter.innerHTML = counter;

  //clear input text and disable button
  startCounter.value = '';
  startCounter.style.visibility = 'hidden';
  startbtn.style.visibility = 'hidden';
}

// Count down
function countdown() {
  if (counter != null) {
    counter--;
    displayCounter.innerHTML = counter;
    if (counter === 0) {
      playAudio();
      clearInterval(handler);
      startCounter.style.visibility = 'visible';
      startbtn.style.visibility = 'visible';
    }
  }
}

// Play audio
function playAudio() {
  var audio = new Audio('bells.mp3');
  audio.play();
}

document.addEventListener('DOMContentLoaded', function () {
  displayCounter = document.getElementById('counter');
  startCounter = document.getElementById('time');
  startbtn = document.getElementById('start');
  startbtn.addEventListener('click', start);
});
