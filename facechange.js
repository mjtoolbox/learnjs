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
