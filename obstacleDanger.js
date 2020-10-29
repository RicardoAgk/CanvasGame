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
            this.x -= 4
        }   
    }
    detectCollision(i) {
        let obstacleLeft = this.x - goose.radius;
        let obstacleRight = this.x + goose.radius; 
        let obstacleHeight = this.y - this.height
        if (goose.x > obstacleLeft && goose.x < obstacleRight && goose.y > obstacleHeight) {
            lifeCounter--;
            obstaclesDanger.splice(i, 1)
        }   
    } 
}
    
function updateObstacleDanger() {
    for(let i = 0; i < obstaclesDanger.length; i++) {
        obstaclesDanger[i].x -= 2;
        obstaclesDanger[i].updateDanger();
        obstaclesDanger[i].detectCollision(i);
    }

    framesDanger+=1;
    if (framesDanger % 150 === 0) {   
        obstaclesDanger.push(
            new ObstacleDanger(70, 70, canvas.width, canvas.height - 90));
    }
  }
  