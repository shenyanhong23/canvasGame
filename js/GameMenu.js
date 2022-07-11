//游戏菜单
class GameMenu{
    constructor(){
        this.initImg();
    }
    initImg(){
        this.menuImg = new Image();
        this.menuImg.src = './img/bg_menu.png';
    }
    draw(ctx,width,height){
        this.menuImg.onload= () =>{
            ctx.drawImage(this.menuImg,0,0,width,height);
        }
    }
}