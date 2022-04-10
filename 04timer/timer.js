var counter;
var handler = setInterval(countdown, 1000);

function start() {
  counter = document.getElementById('time').value;
  document.getElementById('counter').innerHTML = counter;

  //clear input text and disable button
  document.getElementById('time').value = '';
  document.getElementById('time').style.visibility = 'hidden';
  document.getElementById('start').style.visibility = 'hidden';
  console.log(counter);
}

function countdown() {
  if (counter != null) {
    counter--;
    document.getElementById('counter').innerHTML = counter;
    if (counter === 0) {
      playAudio();
      clearInterval(handler);
      document.getElementById('time').style.visibility = 'visible';
      document.getElementById('start').style.visibility = 'visible';
    }
  }
}

function playAudio() {
  var audio = new Audio('bells.mp3');
  audio.play();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('start').addEventListener('click', start);
});
