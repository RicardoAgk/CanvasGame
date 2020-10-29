class Goose {
    constructor(){
        this.x = 200,
        this.y = 30,
        this.vx = 0,
        this.vy = 1,
        this.userPull = 0,
        this.radius = 50,
        this.img = 'images/7-white-duck-png-image.png';
    }


 draw() {
    const gooseImg = new Image();
    gooseImg.src = this.img;
    ctx.drawImage(gooseImg, this.x, this.y, 80, 80);
  }
  }

let goose = new Goose;

function checkHeight(){
    if(goose.y < canvas.height/3){
      goose.userPull = 0
    }
  }
function hitBottom() {
    let rockBottom = canvas.height - (canvas.height/4);
    if (goose.y > rockBottom) {
        goose.y = rockBottom;
        goose.vy = 0.5;
    }  
}

function hitLeft() {
    let farLeft = goose.radius;
    if (goose.x < farLeft) {
        goose.x = farLeft;
        goose.xy = 0.5;
    }  
}

document.onkeydown = function(e) {
    switch(e.keyCode) {
        case 32:
            goose.userPull = 1.8;
            goose.img = 'images/goose-fly.png';
        break; 
        case 39:
            goose.vx += 3;
        break;
        case 37:
            goose.vx -= 3;
        break;
    }
};

document.onkeyup = function(e) {
    if(e.keyCode === 32) {
        goose.userPull = 0;
        goose.img = 'images/7-white-duck-png-image.png';
    }
    if(e.keyCode == 39 || e.keyCode === 37) {
        goose.vx = 0;
    }
};



