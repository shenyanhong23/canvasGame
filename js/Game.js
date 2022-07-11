class Game{
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.initCanvas();
        this.initMenu();//初始化游戏菜单
        this.initView();//初始化游戏视图：地图，任务角色图....
        this.initOver();//初始化gameover,游戏结束
    }
    initCanvas(){
        let canvas = document.querySelector('.game-box>#canvas');
        this.ctx = canvas.getContext('2d');
        this.width = 720;
        this.height = 420;
        canvas.onclick= ()=>{
            let x = event.clientX-canvas.offsetLeft;
            let y = event.clientY-canvas.offsetTop;
           
            this.view.canvasClick(x,y);
            this.view.stopClick(this.ctx,x,y);
        }
    }
    initMenu(){
        this.menu = new GameMenu();
        this.menu.draw(this.ctx,this.width,this.height);
    }
    initView(){
        this.view = new GameView();
    }
    initOver(){
        this.over = new GameOver();
    }
    start(){//开始游戏
        this.run();
    }
    run(){
        this.tie = setInterval(()=>{
            this.view.draw(this.ctx,this.width,this.height);
            if (this.view.gametime.time <= 0) {//判断游戏时间结束
                clearInterval(this.tie);

                //绘制gameover图
                this.over.draw(this.ctx,this.width,this.height);
                //把时间重置为初始值
                // this.view.gametime.time = 156;
            } 
        },300);
    }
}