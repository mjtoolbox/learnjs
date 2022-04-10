var r = 0;
var g = 0;
var b = 0;
var counter = 0;

setInterval(change, 500);

function change() {
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.getElementById('welcome').style.color = rgb;
  r = r + 10;
  g = g + 10;
  b = b + 10;
}

document.addEventListener('DOMContentLoaded', function () {
  change();
});
