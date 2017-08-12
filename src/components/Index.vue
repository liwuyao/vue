<template>
  <div class="index">   
	      <div class="indexss">
				<div class="groupss">
					<div class="pull-left">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" name="search"id="search" value="" placeholder="搜索产品/功效/品牌"/>
					</div>
					<div class="pull-right">
						<a href=""><img src="../assets/img/index_img/xinxi.png"/></a>
					</div>
			</div>
	  </div>
	  <div class="container">
	  <div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><img src="../assets/img/index_img/fansai.jpg"/></div>
	        <div class="swiper-slide"><img src="../assets/img/index_img/huiqiao.jpg"/></div>
	        <div class="swiper-slide"><img src="../assets/img/index_img/libao.jpg"/></div>
	        <div class="swiper-slide"><img src="../assets/img/index_img/shaonv.jpg"/></div>
	        <div class="swiper-slide"><img src="../assets/img/index_img/ximain.jpg"/></div>
	        <div class="swiper-slide"><img src="../assets/img/index_img/z1.jpg"/></div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
		</div>
		<!--中间导航-->
		<div class="indexlist">
				<ul>
					<li><a href="#" class="ljfbg"><img src="../assets/img/index_img/flfbg.png"/></a></li>
					<li><a href="#" class="lqdbg"><img src="../assets/img/index_img/jifen.png"></a></li>
					<li><a href="#" class="flfbg"><img src="../assets/img/index_img/qiandao.png"></a></li>
					<li><a href="#" class="lxybg"><img src="../assets/img/index_img/xinyuan.png"></a></li>
				</ul>
		</div>
			 <div class="gift_out">
			 		<a href="" class="gift">品牌主体礼物<span></span></a>
			 </div>
			 <div class="active_out">
			 		<Active :message='list'></Active>
			 </div>
			<div class="shiyong_out">
			 		<a href="" class="shiyong">试用中心<span></span></a>
			 </div>
			 <div class="">
					<Product :shop='shoplist'></Product>
				</div>
		</div>
		<div class="footer"></div>
	 </div>
</template>

<script>
import Active from '@/pages/product/Active.vue';
import Product from '@/pages/product/Product.vue';
export default {
	name: 'indexs',
	data () {
	    return {
	      list:[{
	      	img:'../../../static/imags/other/9k=.jpg'
	      },{
	      	img:'../../../static/imags/other/Z.jpg'
	      },{
	      	img:'../../../static/imags/other/Z1.jpg'
	      }],
	      shoplist:[{
	      	product_img:'../../../static/imags/product/product1.jpg',
	      	try_img:'../../../static/imags/product/shi.png',
	      	h6:'睿嫣·润膏舒盈滋养洗发水(100ml)',
	      	p:'LG生活健康旗下化妆品，以"天然养生之道"为理念，采用近年迅速崛起的韩国高端科技从天然草本药材中取材，制成不同功效的高品质化妆护肤品，尤其适合东方女性的肤质。',
	      	mmp_img:'../../../static/imags/product/zhan.png',
	      	span:2,
	      	shoptj_img:'../../../static/imags/other/car.png'
	      },{
	      	product_img:'../../../static/imags/product/product1.jpg',
	      	try_img:'../../../static/imags/product/shi.png',
	      	h6:'睿嫣·润膏舒盈滋养洗发水(100ml)',
	      	p:'LG生活健康旗下化妆品，以"天然养生之道"为理念，采用近年迅速崛起的韩国高端科技从天然草本药材中取材，制成不同功效的高品质化妆护肤品，尤其适合东方女性的肤质。',
	      	mmp_img:'../../../static/imags/product/zhan.png',
	      	span:2,
	      	shoptj_img:'../../../static/imags/other/car.png'
	      }
	      ]
	    }
	},
	mounted(){
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 3500,
      loop : true,
      pagination : '.swiper-pagination',
      paginationType : 'bullets',
      autoplayDisableOnInteraction : false,
    })
	 },
	 components:{
	 		Active:Active,
	 		Product:Product
	 }
}              
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index{height:100%;display: flex;flex-direction: column;}
	.container{flex: 1;overflow: auto;}
	.index .indexss {
    width: 100%;
    height: 50px;
    background-color: #ff5a5a;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 21;
}

.index .indexss .groupss{
		 width: 95%;
		 height: 0.36rem;
		 margin:8px auto;
}
.index .indexss .groupss .pull-left {
	float: left;
    background-color: #e06c6c;
    width: 3.15rem;
    height: 0.36rem;
}
.index .indexss .groupss .pull-left i{
	margin:0.05rem 0.1rem;
	float: left;
	font-size: 0.2rem;
}
#search{
	border: none;
	outline: none;
	float: left;
	width: 2.71rem;
  height: 0.36rem;
  font-size: 0.2rem;
  color: white;
  background: #e06c6c;
}
input::-webkit-input-placeholder{
	color: white;
}
input::-ms-input-placeholder{
	color: white;
}
input::-moz-placeholder{
	color: white;
}
.index .indexss .groupss .pull-right{
	width: 0.39rem;
	height: 0.36rem;
	float: left;
}
.index .indexss .groupss .pull-right a{
	position: relative;
	display: block;
	width: 0.5rem;
	height: 0.36rem;
	float: left;
	
}
.index .indexss .groupss .pull-right a img{
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	margin: auto;
	width: 0.2rem;
	height:0.2rem;
}
.swiper-slide{
	height: 2.3rem;
}
.swiper-slide img{
	height: 100%;
	width: 100%;
}
/*中间导航*/
.indexlist {
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
}
.indexlist ul {
    overflow: hidden;
}
.indexlist ul li {
    float: left;
    width: 25%;
}
.indexlist ul li a {
    display: block;
    padding: 7% 25%;
}
.indexlist ul li img {
    width: 100%;
    display: block;
}
/* 礼物盒*/
.gift_out{
	background: #f7f7f7;
	padding: 4px 0;
	position: relative;
}
.gift{
		display: block;
    text-align: center;
    padding: 5px 0;
    height:0.3rem ;
    line-height: 0.3rem;
    background-color: white !important;
    font-size: 16px;
    color: #585858;
    background: url(../../static/imags/other/hudiejie.png) no-repeat;
    background-position:1.1rem 0.1rem;
    background-size:0.24rem 0.22rem ;
}
.gift span{
	top: 0;
	right: 0;
	position: absolute;
	display: inline-block;
	height: 0.40rem;
	width: 0.5rem;
	background: url(../../static/imags/other/jiantou.png) no-repeat;
	background-position:0.25rem 0.15rem;
	background-size:0.12rem 0.14rem ;
}
/* 试用*/
.shiyong_out{
	background: #f7f7f7;
	padding: 4px 0;
	position: relative;
}
.shiyong{
		display: block;
    text-align: center;
    padding: 5px 0;
    height:0.3rem ;
    line-height: 0.3rem;
    background-color: white !important;
    font-size: 16px;
    color: #585858;
    background: url(../../static/imags/other/yingyong.png) no-repeat;
    background-position:1.3rem 0.1rem;
    background-size:0.25rem 0.21rem ;
}
.shiyong span{
	top: 0;
	right: 0;
	position: absolute;
	display: inline-block;
	height: 0.40rem;
	width: 0.5rem;
	background: url(../../static/imags/other/jiantou.png) no-repeat;
	background-position:0.25rem 0.15rem;
	background-size:0.12rem 0.14rem ;
}
/*活动*/
	.active_out{
		overflow: hidden;
	}
.footer{height: 0.55rem;}


</style>
