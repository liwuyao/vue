<template>
	<div class="box">
	<router-view></router-view>
		 <!--	  尾部-->
				<div class="indexfot">
				<ul>
					<router-link to="/index" class="foty">
						<i class="iconfont icon-fangzi"></i>
						<p>首页</p>
					</router-link>
					<router-link to="/tiyan" class="foty">
						<i class="iconfont icon-tiyanbiao"></i>
						<p>体验榜</p>
					</router-link>
					<router-link to="/search" class="foty">
						<i class="iconfont icon-sousuo2"></i>
						<p>发现</p>
					</router-link>
					<router-link to="/car" class="foty">
						<i class="iconfont icon-gouwuche-copy"></i>
						<p>购物车</p>
					</router-link>
					<li class="foty">
						<i class="iconfont icon-hua"></i>
						<p>我的</p>
					</li>
				</ul>
			</div>			
	</div>
</template>
		
<script>
export default{
  name: 'app',
}
</script>

<style scoped>
	.box{height: 100%;}
	/*尾部*/
.indexfot {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    border-top: 1px solid #e2e2e2;
    z-index: 22;
}
.indexfot ul {
    overflow: hidden;
    line-height: 25px;
}
.indexfot ul .foty {
		position: relative;
    float: left;
    height: 0.47rem;
		line-height:0px;
    width: 20%;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 3px;
}
.indexfot ul .foty i{
		position: absolute;
		top:19px;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
    display: inline-block;
    width: 30px;
    font-size: 0.28rem;
    color: gainsboro;
}
.indexfot ul .foty p {
		top:43px;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
	position: absolute;
	font-size: 0.12rem;
    color: #ff5959;
}
.router-link-exact-active .iconfont{
	color: #ff5959 !important;
}

</style>