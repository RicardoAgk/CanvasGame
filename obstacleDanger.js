
let framesDanger = 0;
let obstaclesDanger = [];

class ObstacleDanger {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        //this.speedX = 0;
        //this.speedY = 0;
    }
    updateDanger() {  
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }
    left() {
        return this.x;
    }
    detectOnLeft() {
        let obstacleLeft = this.x - ball.radius; 
        if (ball.x > obstacleLeft && ball.y > this.y && ball.x < this.x) {
            ball.x = obstacleLeft;
            ball.vx = 0;
            gameOver();
          
            
        }   
    }
    detectOnTop() {
        let obstacleBottom = this.y - ball.radius;
        if (ball.y > obstacleBottom &&
            ball.x > this.x && ball.x < this.x + this.width && 
            ball.y < this.y) {
            ball.y = obstacleBottom;
            ball.vy = 0;
            gameOver();
        
            
        }    
    }     
}

function updateObstacleDanger() {
    for(let i = 0; i < obstaclesDanger.length; i++) {
        obstaclesDanger[i].x -= 1;
        obstaclesDanger[i].updateDanger();
        obstaclesDanger[i].detectOnLeft();
        obstaclesDanger[i].detectOnTop()
    }

    framesDanger+=1;
    if (framesDanger % 500 === 0) {   
        let minHeight = 20;
        let maxHeight = 200;
        let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        
        obstaclesDanger.push(
            new ObstacleDanger(70, 70, 'red',canvas.width, canvas.height - height));
    }
  }
  