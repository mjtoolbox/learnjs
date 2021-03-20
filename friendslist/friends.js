var friends = ['Alan', 'John', 'Hector', 'Tom', 'Boris'];
var index = 0;

function prev() {
  index--;
  if (index < 0) {
    index = 0;
  }
  document.getElementById('name').innerHTML = friends[index];
}

function next() {
  index++;
  if (index > friends.length - 1) {
    index = friends.length - 1;
  }
  document.getElementById('name').innerHTML = friends[index];
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('name').innerHTML = friends[index];
  document.getElementById('prev').addEventListener('click', prev);
  document.getElementById('next').addEventListener('click', next);
});
