<template>
	<div class="search">
		<Titles :name='titlename'></Titles>
		<div class="container">
<!--		轮播-->
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="../../../static/imags/search/lun1.jpg"/></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
<!--		中间标题-->
		<div class="findpic">
			<h5><span>发现</span></h5>
			<img src="../../../static/imags/search/find.jpg">
		</div>
		<List></List>
		</div>
		<div class="footer"></div>
	</div>
</template>

<script>
import title from '@/pages/Title.vue';
import list from '@/pages/search/Search_list.vue';
export default {
  name: 'search',
  components:{
  	Titles:title,
  	List:list
  },
  data(){
  	return{
  		titlename:'发现'
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
.search{
	height: 100%;
	display: flex;
	flex-direction: column;
}
/*内容*/
.container{
	flex: 1;
	overflow: auto;
}
/*	轮播*/
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
/*中间导航*/
.findpic {
    background-color: #fff;
}
.findpic h5 {
	line-height: 0.49rem;
    border-bottom: 1px solid #d2d2d2;
    color: #999;
    text-align: center;
    font-size: 16px;
}
.findpic img {
    display: block;
    width: 300px;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 10px;
}
/*尾部*/
.footer{height: 0.55rem;}
</style>