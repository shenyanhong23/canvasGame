class GameOver{
    constructor(){
        this.initImg();
    }
    initImg(){
        this.overImg = new Image();
        this.overImg.src = './img/game_over.png';
    }
    draw(ctx,width,height){
        ctx.drawImage(this.overImg,0,0,width,height);
    }
}