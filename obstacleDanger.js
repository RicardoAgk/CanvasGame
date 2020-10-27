let framesDanger = 0;
let obstaclesDanger = [];
let lifeCounter = 3;


class ObstacleDanger {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.image = 'images/beetle-bug-2.png';
    
}
    updateDanger() {  
        const bugImg = new Image();
        bugImg.src = this.image;
        ctx.drawImage(bugImg, this.x, this.y, this.width, this.height);
        let randomMove = Math.floor(Math.random()*10);
        if(randomMove > 5){
            this.y += 3
        }else{
            this.x -= 2
        }     
    }
    detectOnLeft(i) {
        let obstacleLeft = this.x - goose.radius; 
        if (goose.x > obstacleLeft && goose.y < this.height && goose.x > this.x) {
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
    /*clearObstacleDanger(){
        obstaclesDanger.splice(i, 1)
    }    */ 
}    
    
function updateObstacleDanger() {
    for(let i = 0; i < obstaclesDanger.length; i++) {
        obstaclesDanger[i].x -= 1;
        obstaclesDanger[i].updateDanger();
        obstaclesDanger[i].detectOnLeft(i);
        obstaclesDanger[i].detectOnTop(i)
        //obstaclesDanger.splice(i,1);
    }

    framesDanger+=1;
    if (framesDanger % 500 === 0) {   
        
        
        obstaclesDanger.push(
            new ObstacleDanger(70, 70, 'red',canvas.width, 0));
    }
  }
  