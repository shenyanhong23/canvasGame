//人物角色：海绵宝宝
class GameRole{
    constructor(){
        this.initRoleImg();//初始化人物角色图片
        this.roleData();//人物角色数据
        this.initStop();
    }
    roleData(){
        //海绵宝宝宽高
        this.roleW = 92;
        this.roleH = 102;

        this.index = 0;//海绵宝宝图片的下标
        this.pIndex = Math.floor(Math.random()*this.positionArr.length);//随机洞口位置

    }
    initStop(){
        this.stop = new  GameStop();
    }
    initRoleImg(){
        this.positionArr = [
            { x: 148, y: 76 },
            { x: 312, y: 76 },
            { x: 475, y: 76 },
            { x: 132, y: 190 },
            { x: 313, y: 190 },
            { x: 492, y: 190 },
            { x: 112, y: 310 },
            { x: 313, y: 310 },
            { x: 514, y: 310 }
        ];
        let roleUrl = [
            './img/role-h0.png',
            './img/role-h1.png',
            './img/role-h2.png',
            './img/role-h3.png',
            './img/role-h4.png',
            './img/role-h5.png',
            './img/role-h6.png',
            './img/role-h10.png',
            './img/role-h9.png',
            './img/role-h8.png',
            './img/role-h7.png',
           

        ];
        this.imgs = [];
        roleUrl.forEach(item=>{
            let img = new Image();
            img.src = item;
            this.imgs.push(img);
        });
    }

    draw(ctx){
        ctx.drawImage(this.imgs[this.index],this.positionArr[this.pIndex].x,this.positionArr[this.pIndex].y);
        this.index++;
        if (this.index == 7 || this.index == 9) {
            this.index = 0;
            this.pIndex = Math.floor(Math.random()*this.positionArr.length);
        }   
    }
    canvasClick(x,y){//点击打海绵宝宝
        if (
            x>this.positionArr[this.pIndex].x &&
            x<this.positionArr[this.pIndex].x+this.roleW &&
            y>this.positionArr[this.pIndex].y &&
            y<this.positionArr[this.pIndex].y+this.roleH
        ) {
             console.log('打击到了');
             this.index = 7;
        }
    }
    stopClick(ctx,x,y){
        if (
            x>675 &&
            x<718 &&
            y>373 &&
            y<415
        ) {
            // setInterval(()=>{
            //     this.stop.draw(ctx);
            // },0)
        }
    }
}