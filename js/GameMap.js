//游戏地图
class GameMap{
    constructor(){
        this.initImg();
    }
    initImg(){
        this.mapImg = new Image();
        this.mapImg.src = './img/bg_map.jpg';
    }
    draw(ctx,width,height){
        ctx.drawImage(this.mapImg,0,0,width,height);
    }
}