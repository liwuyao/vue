<template>
		<ul class="shoplist">
		<li data-id="6376" data-subid="11552" data-bottle="2" class="weui-updown" v-for='itms in shop'>
			<div class="game-info">
				<a href="#">
					<img :src='itms.product_img' class="shoppic weui_media_appmsg_thumb lazyload" title="睿嫣·润膏舒盈滋养洗发水" alt="睿嫣·润膏舒盈滋养洗发水" style="animation: fadeIn 1s ease 0.2s 1 both;">
					<img :src='itms.try_img' class="zscon">
					<h6>{{itms.h6}}</h6>
					<p>{{itms.p}}</p>
				</a>
				<div class="mmz">
					<img :src='itms.mmp_img' class="mmp">
					<span>{{itms.span}}</span>
					<img :src='itms.shoptj_img' class="shoptj">
				</div>
			</div>
		</li>
		</ul>
</template>
<script>
	export default{
		name:'product',
		props: ['shop']
	}
</script>

<style scoped>
.shoplist{
    overflow: hidden;
    padding: 0 5px;
    width: 100%;
    box-sizing: border-box;
    background-color: #f7f7f7;
}
.shoplist li {
    width: 42.5%;
    float: left;
    /* border: 1px solid #d2d2d2; */
    margin: 5px 1%;
    padding: 10px;
    background-color: #fff;
    position: relative;
}
.shoplist li a {
    display: block;
    color: #989898;
    text-decoration: none;
}
.shoplist img.shoppic {
    width: 100px;
    margin: 0 auto;
    display: block;
    vertical-align: text-bottom;
    height: 100px;
/*    background: url(../images/loading.gif) 50% no-repeat;*/
}
.shoplist li img.zscon {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
}
 .shoplist li h6 {
    margin: 5px 0;
    color: #000;
    height: 40px;
    line-height: 20px;
    font-size: 0.14rem;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.shoplist li p {
    font-size: 0.12rem;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 34px;
    color: #4a4a4a;
}
.mmz {
	position: relative;
	line-height: 0.24rem;
	height: 0.24rem;
    margin-top: 8px;
    position: relative;
}
.mmz img.mmp {
	position: absolute;
	top: 0.1rem;
	left: 0;
    width: 0.13rem;
    /* margin-top: -8px; */
    vertical-align: baseline;
    /* margin-right: 5px; */
}
.mmz span {
	position: absolute;
	top: 0.08rem;
	left: 0.17rem;
    color: #ff6868;
    font-size: 0.14rem;
    display: inline-block;
    width: 30px;
    height: 20px;
    margin-left: 2px;
}
.mmz img.shoptj {
    position: absolute;
    right: 0;
    width: 0.18rem;
    bottom: 4px;
}
</style>