// Import stylesheets
import './style.css';
import { animateFall, gravityProgress } from './gravity';

let frames = 0;
const circle: HTMLDivElement = document.querySelector('.inside');

function back(x, timeFraction) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

function elastic(timeFraction: number, x: number = 1.5) {
  return (
    Math.pow(2, 10 * (timeFraction - 1)) *
    Math.cos(((20 * Math.PI * x) / 3) * timeFraction)
  );
}

function draw(size = 0) {
  circle.style.width = `${500 * size}px`;
  circle.style.height = `${500 * size}px`;
}

const animate: {
  (arg: {
    timing: { (...args: any[]): number };
    draw: { (arg: number): void };
    duration: number;
  }): void;
} = function ({ timing, draw, duration }) {
  let timeStart = performance.now();

  function animationFn(time: number) {
    frames++;
    const elapsed = Math.min((time - timeStart) / duration, 1);

    const progress = timing(elapsed);
    // console.log(progress);
    draw(progress);

    if (elapsed < 1) {
      requestAnimationFrame(animationFn);
    } else {
      // console.log(frames);
    }
  }

  requestAnimationFrame(animationFn);
};

const duration = 5000;

// animate({ timing: elastic, draw, duration });

function whatDoesItGet(...args: any[]) {
  console.log(args);
}

requestAnimationFrame(whatDoesItGet);

const buildingHeight = 400;
let top = buildingHeight;

const block: HTMLDivElement = document.querySelector('.block');

function drawFall(position: number) {
  block.style.top = `${buildingHeight - position}px`;
}

setInterval(()=>animateFall(500, gravityProgress, drawFall),2500)

