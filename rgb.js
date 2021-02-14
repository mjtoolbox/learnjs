var r = 0;
var g = 0;
var b = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function change() {
  for (r = 0; r < 255; r = r + 10) {
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('welcome').style.color = rgb;
    await sleep(100);
  }
  r = 0;
  for (g = 0; g < 255; g = g + 10) {
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('welcome').style.color = rgb;
    await sleep(100);
  }
  r = 0;
  g = 0;
  for (b = 0; b < 255; b = b + 10) {
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('welcome').style.color = rgb;
    await sleep(100);
  }
  document.getElementById('welcome').style.color = 'black';
  document.getElementById('welcome').innerHTML = 'Done';
}

document.addEventListener('DOMContentLoaded', function () {
  change();
});
