var game={
	//成员变量
	data:null,//启动游戏后的二维数组，用来储存每一个小格
	RN:4,
	CN:4,
	state:0,
	RUNNING:1,
	GAMEOVER:0,
	score:0,
	//游戏初始化
	start:function(){
		this.state=this.RUNNING;//设置游戏状态
		//初始化数据
		this.data=[];
		for(row=0;row<this.RN;row++){
			this.data[row]=[];
			for(col=0;col<this.CN;col++){
				this.data[row][col]=0;
			}
		}
		this.score=0;
		//随机产生数字
		this.randomNum();
		//刷新页面
		this.updataView();
	},
	updataView:function(){
		for(row=0;row<this.RN;row++){
			for(col=0;col<this.CN;col++){
				var num=document.getElementById("c"+row+col);
				if(this.data[row][col]!=0){
					num.innerHTML=this.data[row][col];
					num.className="cell n"+this.data[row][col]
				}else{
					num.innerHTML="";
					num.className="cell";
				}
			}
		}
		document.getElementById("score").innerHTML=this.score;
		if(this.state==this.GAMEOVER){
			//游戏结束
			document.getElementById("btns").style.dispaly="bolck";
			document.getElementById("finalscore").innerHTML=this.score;
		}else if(this.state==this.RUNNING){
			//游戏继续
			document.getElementById("btns").style.display="none";
		}
	},
	randomNum:function(){
		//判断数据是否已经满了
		if(!this.isfull()){
			while(true){
				var row=parseInt(Math.random()*(this.RN));
				var col=parseInt(Math.random()*(this.CN));
				if(this.data[row][col]==0){
					this.data[row][col]=Math.random()>0.6?2:4;
					break;
				}
			}
		}
	},
	isfull:function(){
		for(row=0;row<this.RN;row++){
			for(col=0;col<this.CN;col++){
				if(this.data[row][col]==0){
					return false;
				}
			}
		}
		return true;
	},
	isGameOver:function(){
		if(this.isfull()){
			for(row=0;row<this.RN;row++){
			for(col=0;col<this.CN;col++){
				if(col!=this.CN-1&&this.data[row][col]==this.data[row][col+1]){
					return false;
				}else if(row!=this.RN-1&&this.data[row][col]==this.data[row][col+1]){
					return false;
				}
		}
	}this.state=this.GAMEOVER;
			return true;
	}else{
		return false;
	}
	},
	
	
	
	//左键
	moveLeft:function(){
		//程序开始时数组字符串内容
		var beforString=this.data.toString();
		for(row=0;row<this.RN;row++){
			for(col=0;col<this.CN;col++){
				this.nextRightNum(row,col);
			}
		}
		//更改后
		var lastString=this.data.toString();
		if(beforString!=lastString){
			this.randomNum();
			this.isGameOver();
			this.updataView();
		}
	},
	nextRightNum:function(r,c){
		for(next=c+1;next<this.RN;next++){
			if(this.data[r][next]!=0){
				if(this.data[r][c]==this.data[r][next]){
					this.data[r][c]*=2;
					this.data[r][next]=0;
					this.score+=this.data[r][c];
					c++;
				}else if(this.data[r][c]==0){
					this.data[r][c]=this.data[r][next];
					this.data[r][next]=0;
				}else{
					break;
				}
			}
		}
	},
	
	
	//上键
	moveUp:function(){
		var beforString=this.data.toString();
		for(row=0;row<this.RN;row++){
			for(col=0;col<this.CN;col++){
				this.nextDownNum(row,col);
			}
		}
		//更改后
		var lastString=this.data.toString();
		if(beforString!=lastString){
			this.randomNum();
			this.isGameOver();
			this.updataView();
		}
	},
	nextDownNum:function(r,c){
		for(next=r+1;next<this.RN;next++){
			if(this.data[next][c]!=0){
				if(this.data[r][c]==this.data[next][c]){
					this.data[r][c]*=2;
					this.data[next][c]=0;
					this.score+=this.data[r][c];
					r++;
				}else if(this.data[Next][c]==0){
					this.data[r][c]=this.data[next][c];
					this.data[next][c]=0;
				}else{
					break;
				}
			}
		}
	},
	




//右键
moveRight:function(){
		//程序开始时数组字符串内容
		var beforString=this.data.toString();
		for(row=this.CN-1;row>=0;row--){
			for(col=this.CN-1;col>=0;col--){
				this.nextLeftNum(row,col);
			}
		}
		//更改后
		var lastString=this.data.toString();
		if(beforString!=lastString){
			this.randomNum();
			this.isGameOver();
			this.updataView();
		}
	},
	nextLeftNum:function(r,c){
		for(next=c-1;next>=0;next--){
			if(this.data[r][next]!=0){
				if(this.data[r][c]==this.data[r][next]){
					this.data[r][c]*=2;
					this.data[r][next]=0;
					this.score+=this.data[r][c];
					c--;
				}else if(this.data[r][c]==0){
					this.data[r][c]=this.data[r][next];
					this.data[r][next]=0;
				}else{
					break;
				}
			}
		}
	},






//下键
moveDown:function(){
		var beforString=this.data.toString();
		for(row=this.RN-1;row>=0;row--){
			for(col=this.RN-1;col>=0;col--){
				this.nextUpNum(row,col);
			}
		}
		//更改后
		var lastString=this.data.toString();
		if(beforString!=lastString){
			this.randomNum();
			this.isGameOver();
			this.updataView();
		}
	},
	nextUpNum:function(r,c){
		for(next=r-1;next>=0;next--){
			if(this.data[next][c]!=0){
				if(this.data[r][c]==this.data[next][c]){
					this.data[r][c]*=2;
					this.data[next][c]=0;
					this.score+=this.data[r][c];
					r--;
				}else if(this.data[next][c]==0){
					this.data[r][c]=this.data[next][c];
					this.data[next][c]=0;
				}else{
					break;
				}
			}
		}
	},





	}
game.start();
document.onkeydown=function(){
	var e=window.event||arguments[0];
	if(e.keyCode==37){
		game.moveLeft();
	}else if(e.keyCode==38){
		game.moveUp();
	}else if(e.keyCode==39){
		game.moveRight();
	}else if(e.keyCode==40){
		game.moveDown();
	}

}


