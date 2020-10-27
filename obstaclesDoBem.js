let framesDoBem = 0;
let obstaclesDoBem = [];

class ObstacleDoBem {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = 'images/js-logo.png.png';
    }
    updateDoBem() {     
    const jsImg = new Image();
    jsImg.src = this.image;
    ctx.drawImage(jsImg, this.x, this.y, this.width, this.height);
        
    }
    detectOnLeft(i) {
        let obstacleLeft = this.x - goose.radius; 
        if (goose.x > obstacleLeft && goose.y > this.y && goose.x < this.x) {
            lifeCounter++;
            obstaclesDoBem.splice(i, 1)
        }   
    }
    detectOnTop(i) {
        let obstacleBottom = this.y - goose.radius;
        if (goose.y > obstacleBottom &&
            goose.x > this.x && goose.x < this.x + this.width && 
            goose.y < this.y) {
            lifeCounter++;
            obstaclesDoBem.splice(i, 1)    
        }    
    } 
    
}    
    
function updateObstacleDoBem() {
    for(let i = 0; i < obstaclesDoBem.length; i++) {
        obstaclesDoBem[i].x -= 1;
        obstaclesDoBem[i].updateDoBem();
        obstaclesDoBem[i].detectOnLeft(i);
        obstaclesDoBem[i].detectOnTop(i)
    }

    framesDoBem+=1;
    if (framesDoBem % 900 === 0) {   
        let height = canvas.height / 4  
        obstaclesDoBem.push(
            new ObstacleDoBem(70, 70, canvas.width, canvas.height - height));
    }
  }
  