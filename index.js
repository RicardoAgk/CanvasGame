const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gravity = 0.9;
let interval = 0;


function update() {
    interval = requestAnimationFrame(update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hitBottom();
    hitLeft();
    updateObstacles();
    updateObstacleDanger();
    updateObstacleDoBem();
    //inspirationalQuotes();
    checkHeight();
    checkGameOver();
    goose.vy = goose.vy + (gravity - goose.userPull);
    goose.y += goose.vy;
    goose.x += goose.vx;
    goose.draw(); 
    
    }

function stop() {
    console.log('parou!')
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
        update()
}

function checkGameOver(){
    ctx.font = '50px serif';
    ctx.fillStyle = 'pink';
    ctx.fillText(`LIVES: ${lifeCounter}`, 80, 150);
    console.log(lifeCounter);
    if(lifeCounter < 1){
        gameOver()
    }
}

startGame()