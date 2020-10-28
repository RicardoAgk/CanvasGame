let lifeCounter = 3;
    
    function displayLives(){
        let image = 'images/heart.png'
        const heart = new Image();
        heart.src = image;
        
        switch(lifeCounter){
            case 3:
                ctx.drawImage(heart, 80, 100, 50, 50);
                ctx.drawImage(heart, 160, 100, 50, 50);
                ctx.drawImage(heart, 240, 100, 50, 50);
                break;
            case 2:
                ctx.drawImage(heart, 80, 100, 50, 50);
                ctx.drawImage(heart, 160, 100, 50, 50);
                break;
            case 1:
                ctx.drawImage(heart, 80, 100, 50, 50);
                break;
        }       
    }   