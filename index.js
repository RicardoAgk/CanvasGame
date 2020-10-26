let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let gravity = 0.5;
let ball = new Pig();
ball.draw();
let interval = 0;
let update = function () {
    hitBottom();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateObstacles();
    updateObstacleDanger();
    ball.vy = ball.vy + (gravity - ball.userPull);
    ball.y += ball.vy;
    ball.x += ball.vx;
    ball.draw();
    checkGameOver();
    interval = requestAnimationFrame(update);
    }

let deathCounter = 0;   

function checkGameOver(){
    if(deathCounter>1){
        cancelAnimationFrame(interval)
    }
}

function gameOver(){
        ctx.font = '50px serif';
        ctx.fillStyle = 'red';
        ctx.fillText(`GAME OVER`,100, canvas.height / 2);
        deathCounter++
    }

function hitBottom() {
    let rockBottom = canvas.height - ball.radius;
    if (ball.y > rockBottom) {
        ball.y = rockBottom;
        ball.vy = 0;
    }  
}

document.onkeydown = function(e) {
    switch(e.keyCode) {
        case 32:
            ball.userPull = 1;
        break; 
        case 39:
            ball.vx += 1;
        break;
        case 37:
            ball.vx -= 1;
        break;
    }
};

document.onkeyup = function(e) {
    if(e.keyCode === 32) {
        ball.userPull = 0;
    }

    if(e.keyCode == 39 || e.keyCode === 37) {
        ball.vx = 0;
    }
};

update()