<template>
	<div class="carbox">
		<li class="product">
			<div class="choose">
				<img :src='gouimg' @click='choose($event)'  :name='result.name' :bian='k'/>
			</div>
			<img :src='result.proimg' class="img"/>
			<div class="right">
				<p>{{result.title}}</p>
				<div class="foot">
					<span class="much">¥{{result.much}}/</span>
					<div class="zhan">
						<img src="../../../static/imags/car/zhan.png"/>
						<span>{{result.zhan}}</span>
					</div>
					<div class="many">
						<img src="../../../static/imags/car/jian.png" class="reduce"@touchstart='reduce' @touchend='move'/>
						<span class="number">{{num}}</span>
						<img src="../../../static/imags/car/add.png" class="add" @touchstart='add' @touchend='move'/>
					</div>
				</div>
			</div>
		</li>
	</div>
</template>

<script>
export default {
  name: 'list',
  props:['result','all','imgs','k','qufen'],
  data(){
  	return{
  		num:0,
  		gouimg:this.imgs,
  		gou:false,
  		muths:0,
  		ad:false,
  		re:false,
  		open:false
  	}
  },
  mounted(){
  	this.num = this.result.num
  },
   updated(){
   		if(this.qufen){
   			this.gouimg=this.imgs
   			this.gou = this.all
   			var much=this.result.much*this.num
   			this.$emit('quangou',much)
   		}
   		if(this.open){
   			if(this.ad){
   				this.$emit('add',75)
   			}
   			if(this.re){
   				this.$emit('add',-75)
   			}
   		}

   },
  methods:{
  	add:function(){
  		this.open=true
  		this.ad=true
  		this.num++
  	},
  	reduce:function(){
  		this.open=true
  		this.re=true
  		this.num>0?this.num--:0
  	},
  	move:function(){
  		this.open=false
  		this.ad=false
  		this.re=false
  	},
  	choose:function(event){
//		要传的参
  		var name = this.result.name;
  		var many= this.num
  		var zhan= this.result.zhan
  		var much=this.result.much*this.num
  			this.muchs=much
  		var p={name:name,zhan:zhan,much:much}
  		this.gou=!this.gou
  		if(this.gou){
  			this.open=true
  			this.$emit('sendto',p,true)
			this.gouimg='../../../static/imags/car/yuan2.png'
  		}else{
  			this.muchs=0
  			this.$emit('sendto',p,false)
  			this.gouimg='../../../static/imags/car/yuan1.png' 		
  		} 
  	}
  }
}	
</script>

<style scoped>
	.product{
	padding: 10px 10px;
	height: 1rem;
}
.choose{
	float: left;
	position: relative;
	width: 8%;
	height: 100%;
}
.choose img{
	position: absolute;
	left: 10%;
	top:30%;
	width: 0.15rem;
}
.img{
	float: left;
	width: 0.8rem;
	height: 0.8rem;
}
.product .right{
	height: 100%;
	float: right;
	width: 65%;
}
.product .right p{
	font-weight: 100;
	color: #585858;
	font-size: 0.12rem;
}
.product .right .foot{
	margin-top: 10px;
	position: relative;
	height: 0.2rem;
	width: 100%;
}
.product .right .foot span{
	text-align: center;
	height: 100%;
	font-size: 0.12rem;
	line-height: 0.30rem;
	 color: #ff5959;
    font-size: 0.15rem;
}
.product .right .foot .much{
	width: 15%;
	position: absolute;
}
.product .right .foot .zhan{
	left: 30%;
	height: 100%;
	position: absolute;
}
.product .right .foot .zhan span{
	float: left;
}
.product .right .foot .zhan img{
	float: left;
	float: left;
	height: 100%;
}
.product .right .foot .many{
	position: absolute;
	height: 100%;
	width: 22%;
	right: 0;
}
.product .right .foot .many img{
	margin-top: 0.02rem;
	height: 0.15rem;
	float: left;
}
.product .right .foot .many span{
	color: black;
	line-height: 0.2rem;
	padding: 0 0.05rem;
	height: 100%;
	float: left;
}
</style>