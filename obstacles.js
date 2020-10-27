let frames = 0;
let obstacles = [];

class Obstacle {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    updateObst() {  
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    detectOnLeft() {
        let obstacleLeft = this.x - goose.radius+2; 
        if (goose.x > obstacleLeft && goose.y > this.y && goose.x < this.x) {
            goose.x = obstacleLeft;
            goose.vx = 0;
        }
    }
    detectOnTop() {
        let obstacleBottom = this.y - goose.radius;
        if (goose.y > obstacleBottom &&
            goose.x > this.x && goose.x < this.x + this.width && 
            goose.y < this.y) {
            goose.y = obstacleBottom;
            goose.vy = 0;
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
  



 