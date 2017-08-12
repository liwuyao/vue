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
				<ul class="out">
				<div class="title"><img src="../../../static/imags/car/shiyong.jpg"></div>
					<li class="product" v-for='(result,index) in list'>
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
				</ul>
		
			
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
export default {
	data(){
  	return{
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
			],
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
.title{
	height: 0.18rem;
}
.title img{
	height: 0.18rem;
	float: left;
}
.out li {
    border-bottom: 1px solid #e1e1e1;
    position: relative;
    overflow: auto;
    overflow-y: hidden;
    background-color: #fff;
}
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