let canvas = document.getElementById("only_canv");  // creating canvas
let ctx = canvas.getContext("2d");
let box = 30;


drawCanvasSize = function () {
    let userWidth = document.querySelector("#widthInput").value;
    let userHeight = document.querySelector("#heightInput").value;
    canvas.width = userWidth || 900;
    canvas.height = userHeight || 450;
}

let maxX = canvas.width / box; // calculation for apple's random coordinates;
let maxY = canvas.height / box;

let apple = {
    img: document.getElementById("apple")
};
apple.x = Math.floor(Math.random() * maxX + 0) * box;
apple.y =Math.floor(Math.random() * maxY + 0) * box;


let score = 0;
let highScore = localStorage.setItem("highScore",0);
if (score > localStorage.getItem("highScore")) {
    localStorage.setItem("highScore", score);
  }

// let appleNum = parseInt(document.querySelectorById("apple_count").value); 

 // part of the whole snake;
let snake = [
    {
        x: canvas.width / 2,
        y: 5 * box
    },
    {
        x: canvas.width / 2 + box ,
        y: 5 * box
    },
    {
        x: canvas.width / 2 + (2 * box),
        y: 5 * box
    }
];

// let snakeLengthByUser = Number(document.querySelector("#snake_size").value); 
// for (i = 3; i < snakeLengthByUser; i++){   
//      snake.push({
//         x: canvas.width / 2 + (i * box),
//         y: 5 * box
//     })

    
let dir = "left";  // keydown events and linking them with snake's directions;
document.onkeydown = function (e) {


    if (e.keyCode == 37 && dir != "right") {
        dir = "left";
    }
    else if (e.keyCode == 38 && dir != "down") {
        dir = "up";
    }
    else if (e.keyCode == 39 && dir != "left") {
        dir = "right";
    }
    else if (e.keyCode == 40 && dir != "up") {
        dir = "down";

    }
}


let speedInputByUser = document.querySelector("#speed_input").value;
let gameInterval;
let game = function () {
if (document.querySelector("#novice").checked){
   gameInterval = setInterval(draw, 900);  
}
else if(document.querySelector("#intermediate").checked){
   gameInterval =  setInterval(draw, 600);  
}
else if(document.querySelector("#hard").checked){
   gameInterval = setInterval(draw, 300);  
}
}

let snakeX = snake[0].x; // snake  old head x coordinate
let snakeY = snake[0].y; // y coordinate
newHead = {
        x: snakeX,
        y: snakeY
    };
    
    


collision = function (newHead, snake){
for(let i = 1; i < snake.length; i++){
    if (newHead.x == snake[i].x && newHead.y == snake[i].y){
        return true;
    }
    else {
        return false;
    }
}
}


function draw(drawCanvasSize) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // we need to clear canvas and draw it again in every single moment to get dynamic picture
    ctx.drawImage(apple.img, apple.x, apple.y, 30, 30);


    ctx.fillStyle = "white";  // showing score on canvas
    ctx.font =  "30px Arial";
    ctx.fillText(score, box, box);


    for (i = 0; i < snake.length; i++) {
        let grd = ctx.createLinearGradient(0, 0, 170, 0);  // creating snake 
        grd.addColorStop(0, "purple");
        grd.addColorStop(1, "gold");
        ctx.fillStyle = grd;
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }


    if (dir == "left") snakeX -= box; // to make snake move
    if (dir == "up") snakeY -= box;
    if (dir == "right") snakeX += box;
    if (dir == "down") snakeY += box;

    if (snakeX == apple.x && snakeY == apple.y) {
        score = score + 10;
        apple = {
            img: document.getElementById("apple")
        };
    
        apple.x = Math.floor(Math.random() * maxX + 0) * box;
        apple.y =Math.floor(Math.random() * maxY + 0) * box;
    
        newHead = {
            x: snakeX,
            y: snakeY
        }
        snake.unshift(newHead);
    }
    else {
        newHead = {
            x: snakeX,
            y: snakeY
        }
        snake.unshift(newHead);
        snake.pop();
    }


 if (snakeX < 0 || snakeX > canvas.width || snakeY < 0 || snakeY > canvas.height || collision(newHead, snake)){
        clearInterval(gameInterval); 
        ctx.fillStyle = "red"; 
    ctx.font = "25px Arial";
    ctx.fillText(`Your score is ${score}!! `, canvas.width / 3, canvas.height / 2);
}  
}




