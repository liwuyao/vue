<template>
	<div class="list">
		<ul>
			<li class="product_outer">
				<img src="../../../static/imags/search/list/lis1.jpg" class="banner"/>
				<div class="information">
					<div class="left">
						<img src="../../../static/imags/search/list/bao.png"/>
					</div>
					<div class="mid">
						<h5>收割男神，就用”她“</h5>
						<p class="findgaitxt">正如你们所见， 今年，【一瓶一罐】官网与客户端都已焕然一新， 要知道，在这个拼颜值的时代， 我们是绝不能被那些妖艳J货们给比下去的。 随着【暴风吸入·颜值UP·玩法进阶】 美少女们，是不是期待更多“影缺斯汀”的内容？ 那就快跟上美妆“弄潮兒”的脚步， 多多关注【一瓶一罐·原创尝新记】吧！ “ 首期妆容主题---【可乐的夏】 这款妆容中将为美少女们拔草 时下超火的两件【断货王】-DIOR迪奥魅惑釉唇膏 #740 VS EXCEL 眼影盘SR02 超真实的清纯妹子变妆试色，就在本期 &nbsp;↓ ”</p>
					</div>
					<div class="right">
						<i class="iconfont icon-xin"></i><span>1</span>
					</div>
				</div>
				<div class="product">
					<img src="../../../static/imags/search/list/p1.jpg" class="left"/>
					<div class="right">
						<h5>睿嫣·润膏舒盈滋养洗发水</h5>
						<p>100ml</p>
						<ul class="foot">
							<li class="xin">
								<i class="iconfont icon-wujiaoxingshixin"></i>
								<i class="iconfont icon-wujiaoxingshixin"></i>
								<i class="iconfont icon-wujiaoxingshixin"></i>
								<i class="iconfont icon-wujiaoxingshixin"></i>
							</li>
							<li class="hua">
								<img src="../../../static/imags/search/list/zhan.png"/><span>1</span>
							</li>
							<li class="car">
								<img src="../../../static/imags/search/list/car.png"/>
							</li>
						</ul>
					</div>
				</div>
			</li>	
		</ul>
	</div>
</template>

<script>
export default {
  name: 'list',
}
</script>

<style scoped>
.product_outer{
	overflow: hidden;
}
.banner{
	width: 100%;
	height: 2.15rem;
}
.information{
	width: 100%;
	height: 0.62rem;
}
.information div{
	float: left;
}
.information .left{
	position: relative;
	width: 10%;
	height: 100%;
}
.information .left img{
	display: block;
	position: absolute;
	width: 50%;
	left: 25%;
	margin:0 auto;
}
.information .mid{
	width: 80%;
	height: 100%;
}
.mid h5{
	font-weight: 100;
	color: #383838;
    font-size: 0.16rem;
    line-height: 24px;

}
.information .mid p{
	line-height: 20px;
    font-size: 0.13rem;
    color: #737373;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.information .right i{
	float: left;
	color: #737373;
}
.information .right span{
	float: left;
	font-size: 0.12rem;
	margin-left: 2px;
}
.product{
	border-top:1px solid #dbdbdb ;
	margin-top:10px ;
	padding: 8px;
}
.product .left{
	float: left;
	width: 20%;
	height: 0.8rem;
}
.product .right{
	width: 80%;
	height: 0.8rem;
	float: left;
}
.product .right h5{
	font-weight: 100;
	font-size: 0.12rem;
}
.product .right p{
	margin: 5px 0;
	font-size: 0.12rem;
	padding-left: 5px;
}
.product .right .foot{
	margin-top:10px ;
	height: 0.2rem;
}
.product .right .foot li{
	float: left;
}
.product .right .foot .xin{
	width: 70%;
}
.product .right .foot .xin i{
	float: left;
	color: #ff5959;
}
.product .right .foot .hua{
	width: 15%;
}
.product .right .foot .hua img{
	width: 0.15rem;
	float: left;
}
.product .right .foot .hua span{
	margin-left: 5px;
	font-size: 0.12rem;
	font-weight: 100;
	float: left;
	height: 0.2rem;
	color: #ff5959;
	line-height: 0.3rem;
}
.product .right .foot .car{
	width: 15%;
}
.product .right .foot .car img{
	margin-top: 0.03rem;
	float: left;
	width: 0.22rem;
}
</style>