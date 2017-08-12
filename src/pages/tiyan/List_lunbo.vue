<template>
	<div class="lunbo">
		<div class="swiper-container2">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for='i in lunbos'>
		        	<div class="lunbobox">
		        		<div class="lunboinner">
		        			<span class="shi"><img :src='i.shi'/></span>
		        			<img :src='i.product' class="img"/>
		        			<span class="gun">{{i.guan}}</span>
		        			<p>{{i.p}}</p>
		        		</div>
		        	</div>
		        </div>
		    </div>
		</div>
	</div>
</template>
	
<script>

export default {
  name: 'lunbo',
  props:['lunbos'],
  mounted(){
    var mySwiper2 = new Swiper('.swiper-container2', {
	      slidesPerView : 3,//'auto'
	  onTransitionEnd: function(swiper){
		  if(swiper.progress==1){
			  swiper.activeIndex=swiper.slides.length-1
		  }
	          }
	    })
	 }
}
</script>

<style scoped>
/*轮播*/
.swiper-container2{
	position: relative;
	height: 1.73rem;
}
.swiper-container2 img{
	height: 100%;
	width: 100%;
}
.lunbobox{
	width: 100%;
	height: 100%;
}
.lunboinner{
	margin-left:5% ;
	margin-top: 5%;
	position: relative;
	width: 90%;
	height: 90%;
}
.shi{
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 0.2rem;
	height: 0.2rem;
}
.shi img{
	float: left;
	width: 0.2rem;
	height: 0.2rem;
}
.lunboinner .img{
	display: block;
	margin: 0 auto;
	width: 0.6rem;
	height: 0.6rem;
}
.lunboinner .gun{
	display: block;
	height: 0.41rem;
	background: url(../../../static/imags/tiyan/list/lunbo/gun.png) no-repeat;
	background-position:50% 38% ;
	background-size:0.2rem 0.2rem ;
	text-align: center;
	line-height: 0.41rem;
	font-size: 0.12rem;
	color: white;
}
.lunboinner p{
	margin-top:10px ;
	text-align: center;
	font-size: 0.12rem;
	color: #a2a2a2;
	line-height: 16px;
}
</style>