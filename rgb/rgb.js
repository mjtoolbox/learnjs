var r = 0;
var g = 0;
var b = 0;
var counter = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function change() {
  for (counter = 0; counter < 52; counter++) {
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('welcome').style.color = rgb;
    r = r + 5;
    g = g + 5;
    b = b + 5;
    await sleep(100);
  }

  document.getElementById('welcome').style.color = 'black';
  document.getElementById('welcome').innerHTML = 'Done';
}

document.addEventListener('DOMContentLoaded', function () {
  change();
});
