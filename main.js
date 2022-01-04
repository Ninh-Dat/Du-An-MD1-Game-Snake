
let snake = new Snake(0,0,30,30);
    snake.draw();

let food = new Food(2,2,30);
food.draw2()
snake.diChuyen();
snake.chay();

if (snake.eat(food.x,food.y)){
    food.checkToDo();
}



