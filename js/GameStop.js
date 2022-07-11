class GameStop{
    constructor(){
        this.initImg();
    }
    initImg(){
        this.stopImg = new Image();
        this.stopImg.src = './img/stop.png';
    }
    draw(ctx){
        ctx.drawImage(this.stopImg,670,370,51,51);
    }
}