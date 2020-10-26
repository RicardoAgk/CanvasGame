let frames = 0;
let obstacles = [];

class Obstacle {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        //this.speedX = 0;
        //this.speedY = 0;
    }
    updateObst() {  
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    detectOnLeft() {
        let obstacleLeft = this.x - ball.radius; 
        if (ball.x > obstacleLeft && ball.y > this.y && ball.x < this.x) {
            ball.x = obstacleLeft;
            ball.vx = 0;
        }
    }
    detectOnTop() {
        let obstacleBottom = this.y - ball.radius;
        if (ball.y > obstacleBottom &&
            ball.x > this.x && ball.x < this.x + this.width && 
            ball.y < this.y) {
            ball.y = obstacleBottom;
            ball.vy = 0;
        }
    }        
}

  
function updateObstacles() {
    for(let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= 1;
        obstacles[i].updateObst();
        obstacles[i].detectOnLeft();
        obstacles[i].detectOnTop()
    }
    frames+=1;
    if (frames % 200 === 0) {   
        let minHeight = 20;
        let maxHeight = 200;
        let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        
        obstacles.push(
            new Obstacle(40, height, 'orange',canvas.width, canvas.height - height));
    }
  }
  



 