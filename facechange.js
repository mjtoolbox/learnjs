function changeface() {
  document.getElementById('face').src = 'happyface.png';
}

function changeback() {
  document.getElementById('face').src = 'sadface.png';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('face').addEventListener('mouseover', changeface);
  document.getElementById('face').addEventListener('mouseout', changeback);
});

// Below code doesn't work
// document.addEventListener('DOMContentLoaded', function () {
//   document.addEventListener('mouseover', changeface);
//   document.addEventListener('mouseout', changeback);
// });

// document.getElementById('face').addEventListener('mouseover', function () {
//   document.getElementById('face').src = 'happyface.png';
// });

// document.getElementById('face').addEventListener('mouseout', function () {
//   document.getElementById('face').src = 'sadface.png';
// });
