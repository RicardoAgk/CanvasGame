class Pig {
    constructor(){// could had parameters to have it starting at xy position passed as arguments
        this.x = 200,
        this.y = 30,
        this.vx = 0,
        this.vy = 1,
        this.userPull = 0,
        this.radius = 25,
        this.color = "green"
    }
        //const image = new Image();
        //image.addEventListener('load', () => {
         //   this.image = image
       // });
        //image.src = 'images/car.png'
    
  
    moveLeft(){
        this.x -= 25;
    }
    moveRight(){
        this.x += 25;
    }
    //draw(){
    //    ctx.drawImage(this.image, this.x, this.y, 50, 100);
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
      
  }
  }



