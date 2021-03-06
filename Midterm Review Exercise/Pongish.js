let ball = {Size: 75, Color: "#00FF00", xPos: -5, yPos: -5, x: 400, y: 300};
let paddle = {Width: 30, Height: 120, Color: "#FF0000", x: 600}

function setup() {
  createCanvas(800, 600);
}

function draw() {
    background(0);
    paddle_y = mouseY;
  
    fill(paddle.Color);
    rect(paddle.x, paddle_y, paddle.Width, paddle.Height);

    fill(ball.Color);
    circle(ball.x, ball.y, ball.Size);
    ball.x += ball.xPos;
    ball.y += ball.yPos;
  
    //bounces off the LEFT
    if (ball.x < ball.Size/2){
        ball.xPos *= -1;
    }
    //bounces off the TOP and BOTTOM
    if (ball.y < ball.Size / 2 || ball.y > 600 - ball.Size / 2){
        ball.yPos *= -1;
    }

    if (ball.x > 800){
        ball.x = width/2;
        ball.y = height/2;
        ball.xPos = -5;
        ball.yPos = -5;
    }

    if(ball.x + (ball.Size / 2) >= paddle.x && ball.x + (ball.Size / 2) <= paddle.x + paddle.Width
        && ball.y > paddle_y && ball.y < paddle_y + paddle.Height){
        ball.xPos *= -1.15;
        ball.yPos *= -1.15;
    }
}
