const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2")
const ctx = canvas.getContext("2d");
let gravity = 0.9;
let interval = 0;
canvas.style.display="none"
function update() {
    interval = requestAnimationFrame(update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    displayLives();
    hitBottom();
    hitLeft();
    updateObstacles();
    updateObstacleDanger();
    updateObstacleDoBem();
    checkHeight();
    checkGameOver();
    goose.vy = goose.vy + (gravity - goose.userPull);
    goose.y += goose.vy;
    goose.x += goose.vx;
    goose.draw(); 
    }

function stop() {
        cancelAnimationFrame(interval)
    }

function gameOver(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '50px serif';
        ctx.fillStyle = 'red';
        ctx.fillText(`GAME OVER`,100, canvas.height / 2);  
        stop()  
    }



function startGame(){
        canvas2.style.display='none';
        canvas.style.display='block'
        update()
}


 

function checkGameOver(){
    if(lifeCounter < 1){
        gameOver()
    }
}

//let start = document.getElementById('start').addEventListener('click', startGame())
document.getElementById('start').onclick = () => {
    startGame();
}