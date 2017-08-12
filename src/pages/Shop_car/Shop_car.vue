<template>
	<div class="car">
		<div class="indexser shoptit">
			<span class="zuojian"></span>
			<h3>购物车</h3>
			<span class="bianji">编辑</span>
		</div>
		<div class="jiezhino">
					<p><img src="../../../static/imags/car/chelogo.jpg">还没有自选商品？<span class="zhijia">去添加</span></p>
		</div>
		<div class="container">
			<div class="" v-for='itm in carlists'>
				<Car :car='itm.list' @send='jiesuan' :all='gou' :img='allimg' :k='kongzhi' :qufen='qufen' @jx='quangou' @add='add'></Car>
			</div>
			
		</div>
		<div class="jiesuan">
			<div class="pull-left">
				<img :src='allimg2' class="yuan" @click='all' id="gougou">
				<span class="allxuan">全选</span>
				
				<img src="../../../static/imags/car/piao.png" class="piao">
				<span class="piaonum">0</span>
				<img src="../../../static/imags/car/zhan.png" class="mmp">
				<span class="mmpnum">{{zhan}}</span>
				<img src="../../../static/imags/car/jifen.png" class="fen">
				<span class="fennum">0</span>
			</div>
			<div class="pull-right" id="jiesuan">
				结算（<a>{{much}}</a>）
			</div>
		</div>
	</div>
</template>

<script>
import carlist from '@/pages/Shop_car/Carlist.vue';
export default {
  name: 'shopcar',
  data(){
  	return{
	    carlists:[{
			list:[
			{
				name:'A',
				proimg:"../../../static/imags/car/product/p1.jpg",
				title:'IOPE艾诺碧礼盒',
				much:75,
				zhan:15,
				num:1
			},
			{
				name:'B',
				proimg:"../../../static/imags/car/product/p1.jpg",
				title:'IOPE艾诺碧礼盒',
				much:75,
				zhan:15,
				num:2
			}
			]
		}],
		nums:0,
		allimg:'../../../static/imags/car/yuan1.png',
		allimg2:'../../../static/imags/car/yuan1.png',
  		gou:false,
  		geshu:0,
  		panduan:[],
  		kongzhi:0,
  		qufen:true,
  		zhan:0,
  		much:0,
  		b:0
  	}
  },
   components:{
  	Car:carlist
  },
  methods:{
  	jiesuan:function(p,change){
  		this.qufen=false;
  		this.b=0;
  		if(this.panduan.indexOf(p.name)==-1 && change){
			this.panduan.push(p.name)
			this.geshu+= 1
			if(this.geshu==2){
				this.gou=true;
				this.allimg='../../../static/imags/car/yuan2.png'
				this.allimg2='../../../static/imags/car/yuan2.png'
			}
	  		this.much+=p.much
  		}
  		if(!change){
  			if(this.geshu>0){
  				this.geshu-= 1
  			}
  			this.much-=p.much
  			this.panduan.splice(p.name)
  			this.allimg2='../../../static/imags/car/yuan1.png'
			this.gou=false;
  		}
  	},
  	all:function(){
  		this.qufen=true
  		this.kongzhi++
  		this.gou=!this.gou
  		if(this.gou){
  			this.much=0
  			this.allimg='../../../static/imags/car/yuan2.png'
  			this.allimg2='../../../static/imags/car/yuan2.png'
  		}else{
  			this.allimg='../../../static/imags/car/yuan1.png'
  			this.allimg2='../../../static/imags/car/yuan1.png'
  			this.geshu=0
  			this.panduan=[]
  		}
  	},
  	quangou:function(a){
  		if(this.gou){
  			this.b++
  			if(this.b<3){
  				this.much+=a
  			}
  		}else{
  			this.b=0
  			this.much=0;
  		}		
  	},
  	add:function(a){
  		this.much+=a
  	}
  }
}	
</script>

<style scoped>
.shoptit {
	height: 0.5rem;
    background-color: #fff;
    z-index: 120;
    border-bottom: 1px solid #dbdbdb;
}
.shoptit h3 {
    color: #737373;
    font-size: 0.16rem;
    width: 100%;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight:100;
    text-align: center;
    line-height: 50px;
}
.indexser span.bianji {
	right: 20px;
    top: 0;
    color: #737373;
    font-size: 12px;
    position: absolute;
    line-height: 50px;
}
.jiezhino {
    background-color: #fff;
    position: relative;
    width: 100%;
    height: 80px;
}
.jiezhino p {
    width: 300px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    height: 20px;
    margin-left: -150px;
    margin-top: -10px;
    font-size: 14px;
    color: #343434;
}
.jiezhino p img {
    width: 60px;
    display: inline-block;
    margin-right: 10px;
    
}
.jiezhino p span {
    color: #ff5a5a;
}
/*结算*/
.jiesuan {
    position: fixed;
    top: 5.2rem;
    z-index: 22;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 50px;
    font-size: 13px;
    line-height: 50px;
}
.jiesuan .pull-left {
    width: 72%;
    padding-left: 5px;
    float: left!important;
}
.jiesuan img{
	width: 15px;
}
.jiesuan img.yuan {
    width: 15px;
    display: inline-block;
    vertical-align: text-bottom;
}
.jiesuan .pull-left .allxuan {
    font-size: 16px;
    display: inline-block;
    margin-right: 10px;
}
.jiesuan .pull-right {
    width: 26%;
    background-color: #ff5959;
    color: #fff;
    text-align: center;
    font-size: 16px;
    float: right!important;
}
</style>