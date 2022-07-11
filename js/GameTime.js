//顶部时间条
class GameTime{
    constructor(){
        this.initImg();
        this.time = 156;
    }
    initImg(){
        this.overImg = new Image();
        this.overImg.src = './img/time.png';
    }
    draw(ctx){
        ctx.drawImage(this.overImg,276,30,this.time,30);
        this.time -= 2;
    }
}