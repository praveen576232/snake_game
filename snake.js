export const SNAKE_SPEED = 5;
import { getInputDirection } from "./input.js";
const snakeBody = [{ x: 11, y: 11 }];
let newSegment = 0;
export const update = () => {
  addSegment();
  const inputdirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputdirection.x;
  snakeBody[0].y += inputdirection.y;
};

export const draw = (gamebody) => {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gamebody.appendChild(snakeElement);
  });
};

export const expandSnake = (amount) => {
  newSegment += amount;
};

export const onSnake = (poastion,  ignoreHead = false ) => {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalpostion(segment, poastion);
  });
};

const equalpostion = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

const addSegment = () => {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegment = 0;
};

export const getSnakeHead = () => {
 
  return snakeBody[0];
};

export const snakeIntersection = () => {
 
  return onSnake(snakeBody[0],   true );
};
