const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStart: document.querySelector(`[data-action="start"]`),
  btnStop: document.querySelector(`[data-action="stop"]`),
  bodyStyle: document.querySelector('body'),
};

let colorId = null;
let cheker = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startSwitchColor = () => {
  if (cheker) {
    cheker = false;
    colorId = setInterval(() => {
      let randomColorLength = randomIntegerFromInterval(0, colors.length - 1);
      refs.bodyStyle.style.backgroundColor = colors[randomColorLength];
    }, 1000);
  }
};

const stopSwitchColor = () => {
  cheker = true;
  clearInterval(colorId);
};

refs.btnStart.addEventListener('click', startSwitchColor);

refs.btnStop.addEventListener('click', stopSwitchColor);