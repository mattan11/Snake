import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

//game loop
function main(currentTime) {
  window.requestAnimationFrame(main);
  //ms to seconds
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  //snake speed, 2 times / second
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  //clears board behind snake
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
