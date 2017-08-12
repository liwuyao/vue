<template>
	<div class="active">
		<div class="indexlj weui-updown" data-id="11" v-for="itms in message">
			<a href="/wap/giftbox/detail?id=11" class="lpphd" >
				<img :src='itms.img' class="lihepic weui_media_appmsg_thumb lazyload">				
			</a>
			<h5>秀雅韩“参”肌礼盒</h5>
			<div class="footer">
				<div class="pull-left">
				<p>活动进行中 </p>
				</div>
				<div class="pull-right"></div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'active',
		props: ['message']
	}
</script>

<style scoped>
.active{
	background: #f7f7f7;
}
.indexlj {
	background: white;
	padding: 4px 10px;
	overflow: hidden;
    margin-bottom: 5px;
    position: relative;
    border-bottom: 1px solid #d2d2d2;
}
 .indexlj a{
    display: block;
    position: relative;
}
.indexlj img {
	    display: block;
	    width: 100%;	
}
 .indexlj h5 {
	    font-size: 13px;
	    color: #000;
	    line-height: 30px;
	    background: white;
}
 .indexlj p {
 	font-size: 13px;
	color: #ff5959;
    line-height: 20px;
    

}
	.pull-left {
	    float: left!important;
	    background: white;
}
	.pull-right {
		margin-right: 5px;
		background: url(../../../static/imags/other/car.png) no-repeat;
		background-size:100% 100% ;
		height: 20px;
		width: 30px;
	    float: right!important;
}
	.clearfix {
	    zoom: 1;
	}
	.footer{
		padding: 3px 0;
		overflow: hidden;
		background: white;
	}
</style>