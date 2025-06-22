let startTime;
let endTime;
let currentDelay = 1500; // default delay
let currentSizeRange = [80, 150]; // default size
let levelSettings = {
  easy: { delay: [1000, 2000], size: [80, 150] },
  medium: { delay: [800, 1600], size: [60, 120] },
  hard: { delay: [600, 1200], size: [50, 100] },
  extreme: { delay: [400, 800], size: [40, 80] },
  impossible: { delay: [200, 600], size: [30, 60] }
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeShapeAppear() {
  const shape = document.getElementById('shape');
  const top = Math.random() * (window.innerHeight - 150);
  const left = Math.random() * (window.innerWidth - 150);
  const size = Math.random() * (currentSizeRange[1] - currentSizeRange[0]) + currentSizeRange[0];

  shape.style.top = top + 'px';
  shape.style.left = left + 'px';
  shape.style.width = size + 'px';
  shape.style.height = size + 'px';
  shape.style.backgroundColor = getRandomColor();
  shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
  shape.style.display = 'block';

  startTime = Date.now();
}

function appearAfterDelay() {
  const delay = Math.random() * (currentDelay[1] - currentDelay[0]) + currentDelay[0];
  setTimeout(makeShapeAppear, delay);
}

document.getElementById('shape').onclick = function() {
  this.style.display = 'none';
  endTime = Date.now();
  const reactionTime = (endTime - startTime) / 1000;
  document.getElementById('time').textContent = reactionTime.toFixed(3);
  appearAfterDelay();
};

document.getElementById('startButton').onclick = function() {
  const selectedLevel = document.getElementById('level').value;
  currentDelay = levelSettings[selectedLevel].delay;
  currentSizeRange = levelSettings[selectedLevel].size;
  document.getElementById('time').textContent = '0.000';
  document.getElementById('shape').style.display = 'none';
  appearAfterDelay();
};
