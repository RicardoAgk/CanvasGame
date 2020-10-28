let framesDanger = 0;
let obstaclesDanger = [];

class ObstacleDanger {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = 'images/beetle-bug-2.png';
    
}
    updateDanger() {  
        const bugImg = new Image();
        bugImg.src = this.image;
        ctx.drawImage(bugImg, this.x, this.y, this.width, this.height);
        let speed = Math.floor(Math.random()*10);
        if(speed > 5){
            this.x -= 3
        }   
    }
    detectOnLeft(i) {
        let obstacleLeft = this.x - goose.radius; 
        if (goose.x > obstacleLeft && goose.y > this.height) {
            lifeCounter--;
            obstaclesDanger.splice(i, 1)
        }   
    }
    detectOnTop(i) {
        let obstacleBottom = this.y - goose.radius;
        if (goose.y > obstacleBottom &&
            goose.x > this.x && goose.x < this.x + this.width && 
            goose.y < this.height) {
            lifeCounter--;
            obstaclesDanger.splice(i, 1)    
        }    
    } 
}    
    
function updateObstacleDanger() {
    for(let i = 0; i < obstaclesDanger.length; i++) {
        obstaclesDanger[i].x -= 1;
        obstaclesDanger[i].updateDanger();
        obstaclesDanger[i].detectOnLeft(i);
        obstaclesDanger[i].detectOnTop(i)
    }

    framesDanger+=1;
    if (framesDanger % 200 === 0) {   
        obstaclesDanger.push(
            new ObstacleDanger(70, 70, canvas.width, canvas.height - 70));
    }
  }
  