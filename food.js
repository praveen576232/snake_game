import { onSnake ,expandSnake } from './snake.js';
import {randomGridPostion } from './grid.js'
let foodBody = {x:10,y:1};
const EXPANTION_RATE = 1;
export const update = () => {
 if(onSnake(foodBody)){
  const score = document.getElementById('score');
   score.innerHTML = parseInt(score.innerHTML) + 5;
   expandSnake(EXPANTION_RATE);
   foodBody =newFoodPostion()
 }
};

export const draw = (gamebody) => {
   
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = foodBody.y;
    foodElement.style.gridColumnStart = foodBody.x;
    foodElement.classList.add("food");
    gamebody.appendChild(foodElement);

};
  
const newFoodPostion =() =>{
    let newSnakeFoodPostion;
    while(newSnakeFoodPostion == null && onSnake(foodBody)){
        newSnakeFoodPostion = randomGridPostion()
    }
    return newSnakeFoodPostion;
}