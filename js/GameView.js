class GameView{
    constructor(){
        this.initMap();//初始化游戏地图
        this.initRole();//初始化人物角色
        this.initTime();//初始化时间条
    }
    initMap(){
        this.map = new  GameMap();
    }
    initRole(){
        this.role = new GameRole();
    }
    initTime(){
        this.gametime = new GameTime();
    }
    draw(ctx,width,height){
        //绘制地图
        this.map.draw(ctx,width,height);
        //绘制人物角色：海绵宝宝
        this.role.draw(ctx);
        //绘制时间
        this.gametime.draw(ctx);

        ctx.font = '30px sdsf';
        ctx.fillText(1,162,54);//(文本内容,x,y)
        ctx.fillStyle = '#42a713';
    }
    canvasClick(x,y){
        this.role.canvasClick(x,y);
    }
    stopClick(ctx,x,y){
        this.role.stopClick(ctx,x,y);
    }

}