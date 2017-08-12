<template>
	<div class="tiyan">
	<Titles :name='titlename'></Titles>
<!--	内容-->
	<div class="container">
<!--		轮播图-->
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="../../../static/imags/tiyan/meizhuang.jpg"/></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
<!--		产品数-->
		<div class="tinum">
				共<a>152</a>个提供试用产品（按月更新）
		</div>
<!--		中间导航-->
			<ul class="tilist">				
	        	<li>
	            	<a href="/wap/exper/experlist?categoryid=4">
						<img src="../../../static/imags/tiyan/water.png">
						<p style="color:#000000;">化妆水</p>
					</a>
				 </li>
			
	        	<li>
	            	<a href="/wap/exper/experlist?categoryid=16">
						<img src="../../../static/imags/tiyan/yinping.png">
						<p style="color:#000000;">饮品</p>
					</a>
				 </li>
			
	        	<li>
	            	<a href="/wap/exper/experlist?categoryid=14">
						<img src="../../../static/imags/tiyan/nanhuli.png">
						<p style="color:#000000;">男士护理</p>
					</a>
				 </li>
			
	        	<li>
	            	<a href="/wap/exper/experlist?categoryid=9">
						<img src="../../../static/imags/tiyan/yanchunhuli.png">
						<p style="color:#000000;">眼唇护理</p>
					</a>
				 </li>
			
	        	<li>
	            	<a href="/wap/exper/experlist?categoryid=15">
						<img src="../../../static/imags/tiyan/xiang.png">
						<p style="color:#000000;">香氛</p>
					</a>
				 </li>
			
	        	<li>
	            	<a href="/wap/exper/experlist?categoryid=13">
						<img src="../../../static/imags/tiyan/jingyou.png">
						<p style="color:#000000;">精油护理</p>
					</a>
				 </li>
			
	        	<li>
	            	<a href="/wap/exper/experlist?categoryid=12">
						<img src="../../../static/imags/tiyan/body.png">
						<p style="color:#000000;">身体护理</p>
					</a>
				 </li>
			
			
			<li class="more">
	        	<a href="/wap/exper/expermore">
					<img src="../../../static/imags/tiyan/more.jpg">
			  		<p style="color:#000000;">更多</p>
			 	</a>
			</li>
		   </ul>
		   <List :send='list'></List>
		   <div class="tiyanmore">
				<span>更多特色榜单</span><img src="../../../static/imags/tiyan/more.png">
			</div>
		</div>
	<div class="footer"></div>
	</div>
</template>

<script>
import tiyanList from '@/pages/tiyan/Tiyan_list.vue';
import title from '@/pages/Title.vue';
export default {
  name: 'tiyan',
  components:{
  	List:tiyanList,
  	Titles:title
  },
  data(){
  	return{
  		titlename:'体验榜',
  		list:[
  		{
  			bigimg:"../../../static/imags/tiyan/list/list1.jpg",
  			lunbo:[
  				{
  					shi:'../../../static/imags/tiyan/list/lunbo/shiyong.png',
  					product:'../../../static/imags/tiyan/list/lunbo/l1.jpg',
  					guan:1,
  					p:'泊美鲜纯珍萃柔润保湿洁面膏（滋润型）'
  				},
  				{
  					shi:'../../../static/imags/tiyan/list/lunbo/shiyong.png',
  					product:'../../../static/imags/tiyan/list/lunbo/l2.jpg',
  					guan:2,
  					p:'芙丽芳丝净润洗面霜'
  				},
  				{
  					shi:'../../../static/imags/tiyan/list/lunbo/shiyong.png',
  					product:'../../../static/imags/tiyan/list/lunbo/l3.jpg',
  					guan:3,
  					p:'ETUDE HOUSE伊蒂之屋苏打粉清透毛孔洁面膏'
  				}
  			]
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
	 }
}
</script>

<style scoped>
.tiyan{
	height: 100%;
	overflow: hidden ;
	display: flex;
	flex-direction: column;
}

/*轮播*/
.swiper-container{
	position: relative;
	height: 2.3rem;
}
.swiper-container img{
	height: 100%;
	width: 100%;
}
.swiper-pagination{
	position: absolute;
	bottom: 10px;
	line-height: 0px;
}
/*内容*/
.container{
	overflow: auto;
	flex: 1;
}

/*数量*/
.tiyan .tinum {
    text-align: center;
    line-height: 40px;
    font-size: 0.12rem;
    padding-top: 5px;
    background-color: #fff;
    color: #737373;
    border-bottom: 1px solid #eaeaea;
}
.tiyan .tinum a {
    color: #000;
}
/*中间导航*/
.tilist {
    overflow: hidden;
    color: #737373;
    background-color: #fff;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
}
.tilist li {
    float: left;
    width: 25%;
    box-sizing: border-box;
    margin-top: 5px;
    text-align: center;
}
.tilist li img {
    display: inline-block;
    width: 60px;
    margin: 0 auto;
    /* height: 60px; */
}
.tilist li{
	font-size: 0.12rem;
}
/*更多*/
.tiyanmore {
    text-align: center;
    color: #ff5a5a;
    line-height: 40px;
    font-size: 15px;
}
.tiyanmore img {
    display: inline-block;
    width: 20px;
    margin-left: 8px;
    vertical-align: sub;
}
/*尾部*/
.footer{height: 0.55rem;}
</style>