let inspirationalFrames = 0;
let inspirationalArr = [];

function updateQuotes(){
    ctx.font = '50px serif';
    ctx.fillStyle = 'pink';
    ctx.fillText(`LIFES: ${lifeCounter}`, canvas.width/2, 150);
}


function inpirationalQuotes() {
    for(let i = 0; i < inspirationalArr.length; i++) {
        inspirationalArr[i].y -= 1;
        inspirationalArr[i].updateQuotes();

    }
    inspirationalFrames+=1;
    if (inspirationalFrames % 200 === 0) {   
        let minHeight = 20;
        let maxHeight = 200;
        let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        
  }
}
