var time;
var timeInMin;
var timeInHr;
var intrvl;
var hours;
var minutes;
var seconds;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('Timer').addEventListener('click', ready);
});

function ready() {
  // When everything is loaded, do something
  time = document.getElementById('1').value;
  localStorage.set("time", time);
  document.getElementById('Timer').innerHTML = localStorage.get("time");
  intrvl = setInterval(calculateHourly, 1000);
  document.getElementById('Timer').disabled = true;
}

function count() {
  if (time > 0) {
    time--;
    timeInMin = (time - (time % 60)) / 60;
    time = time % 60;
    timeInHr = (timeInMin - (timeInMin % 60)) / 60;
    timeInMin = timeInMin % 60;
    document.getElementById('2').innerHTML =
      'Time Remaining: ' + timeInHr + 'h, ' + timeInMin + 'm, ' + time + 's';
  } else {
    document.getElementById('2').innerHTML = 'Time Is Up.';
    clearInterval(intrvl);
    document.getElementById('Timer').disabled = false;
  }
}

function calculateHourly() {
  if (time > 0) {
    time--;
    hours = Math.floor(time / 60 / 60);
    minutes = Math.floor(time / 60) - hours * 60;
    seconds = time % 60;
    document.getElementById('2').innerHTML =
      'Time Remaining: ' + hours + 'h, ' + minutes + 'm, ' + seconds + 's';
  } else {
    document.getElementById('2').innerHTML = 'Time Is Up.';
    clearInterval(intrvl);
    document.getElementById('Timer').disabled = false;
  }
}
