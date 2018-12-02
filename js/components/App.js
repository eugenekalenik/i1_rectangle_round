import CanvasSquare from '../shapes/CanvasSquare.js';
import CanvasRound from '../shapes/CanvasRound.js';
import { colors } from '../constants/colors.js'
import { CSS_COLOR_NAMES } from '../constants/css_colors.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const draggedSquare = document.querySelector('.dragged-square');
const draggedRound = document.querySelector('.dragged-round');
const clearButton = document.querySelector('.clear-canvas-button');

// Fill canvas with different shapes and colors
CSS_COLOR_NAMES.forEach((item, index) => {
  const randomX = Math.floor((Math.random() * 10));
  const randomY = Math.floor((Math.random() * 10));

  console.log(randomX, randomY);

  new CanvasRound(index * randomX, index * randomY, 100, item, 'transparent', 0);
  new CanvasSquare(index * randomY, index * randomX, 100, 100, item, 'transparent', 0);
});

// DOM Square event listeners
draggedSquare.addEventListener('dragstart', squareDragStart);
draggedSquare.addEventListener('dragend', squareDragEnd);

// DOM Round event listeners
draggedRound.addEventListener('dragstart', roundDragStart);
draggedRound.addEventListener('dragend', roundDragEnd);

let sdx = 0;
let sdy = 0;

function squareDragStart(e) {
  const x = e.clientX;
  const y = e.clientY;

  console.dir(e.target);

  sdx = x - e.target.clientWidth;
  sdy = y - e.target.clientHeight;

  console.log('Start', 'x:', x, 'y:', y, 'dx:', sdx, 'dy:', sdy);
}

function squareDragEnd(e) {
  const x = e.clientX;
  const y = e.clientY;

  console.log('End', 'x:', x, 'y:', y, 'dx:', sdx, 'dy:', sdy);

  new CanvasSquare(x - 300 - sdx, y - sdy, 100, 100, '#6666ff', 'transparent', 0);

  sdx = 0;
  sdy = 0;
}

let rdx = 0;
let rdy = 0;

function roundDragStart(e) {
  const x = e.clientX;
  const y = e.clientY;

  rdx = x - e.target.clientWidth;
  rdy = y - e.target.clientHeight - 200;

  console.log('Start', 'x:', x, 'y:', y, 'dx:', rdx, 'dy:', rdy);
}

function roundDragEnd(e) {
  const x = e.clientX;
  const y = e.clientY;

  console.log('End', 'x:', x, 'y:', y, 'dx:', rdx, 'dy:', rdy);

  new CanvasRound(x - 300 - rdx, y - rdy, 100, '#6666ff', 'transparent', 0);

  rdx = 0;
  rdy = 0;
}

clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})
