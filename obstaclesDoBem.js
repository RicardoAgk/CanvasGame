let framesDoBem = 0;
let obstaclesDoBem = [];


let imageCounter = 0;
let selectedImage;
function changeImage(){
    if(imageCounter<1){
        selectedImage = "images/html-logo.png";
    }else if(imageCounter >=2 && imageCounter <= 3){
        selectedImage = "images/css-logo.png"
    }else if(imageCounter >=4 && imageCounter <= 5){
        selectedImage = "images/bootstrap-logo.png"
    }else if(imageCounter >= 5){
        selectedImage = "images/js-logo.png"
    }
}

class ObstacleDoBem {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = selectedImage;
    }
    updateDoBem() {     
        changeImage();
        
    const jsImg = new Image();
    jsImg.src = this.image;
    ctx.drawImage(jsImg, this.x, this.y, this.width, this.height);
    }
    detectCollision(i) {
        let obstacleLeft = this.x - goose.radius;
        let obstacleRight = this.x + goose.radius; 
        let obstacleHeight = this.y - this.height
        if (goose.x > obstacleLeft && goose.x < obstacleRight && goose.y > obstacleHeight){
            progress++
            obstaclesDoBem.splice(i, 1) 
           if(lifeCounter <= 2)
           {
               lifeCounter++;
        } 
               
        }
    }
}



function updateObstacleDoBem() {
    changeImage()
    for(let i = 0; i < obstaclesDoBem.length; i++) {
        obstaclesDoBem[i].x -= 1;
        obstaclesDoBem[i].updateDoBem();
        obstaclesDoBem[i].detectCollision(i);
    }
    framesDoBem+=1;
    if (framesDoBem % 300 === 0) {
        imageCounter++;
        let height = canvas.height / 4  
        obstaclesDoBem.push(
            new ObstacleDoBem(70, 70, canvas.width, canvas.height - height));
    }
  }
  