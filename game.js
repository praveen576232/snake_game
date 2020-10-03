import { SNAKE_SPEED, update, draw ,getSnakeHead,snakeIntersection} from "./snake.js";
import { draw as drawFood, update as updateFood } from "./food.js";
import { outsidegride } from './grid.js';
let lastRenderTime = 0;
let gameOver = false;
const gamebord = document.getElementById("game-board");
const main = (curentTime) => {
  if(gameOver){
    if(confirm("you loast a game click ok to restart")){
      window.location="/"
    }
  return 
  }
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (curentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = curentTime;

  updateSnake();
  drawSnake();
};
window.requestAnimationFrame(main);

const updateSnake = () => {
  update();
  updateFood();
  checkDeath();
};

const drawSnake = () => {
  gamebord.innerHTML = "";
  draw(gamebord);
  drawFood(gamebord);
};

const checkDeath =() =>{
  gameOver = outsidegride(getSnakeHead()) || snakeIntersection();
}