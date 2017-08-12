<template>
	<div class="title">
		<div class="indexss">
			<div class="indexser">
				<span class="zuojian"><img src="../../static/imags/tiyan/fanhui.png"></span>
				<h3>{{name}}</h3>
				<span class="yougao">
					<a href="/wap/news">
					<img src="../../static/imags/tiyan/xinxi.png">					
					</a>
				</span>
			</div>
	</div>
	</div>
</template>
<script>
export default {
  name: 'title',
  props:['name']
}
</script>

<style scoped>
	.indexss {
    width: 100%;
    height: 50px;
    background-color: #ff5a5a;
    color: #fff;
    font-size: 1.6rem;
    z-index: 21;
}
.indexser {
    width: 100%;
    height: 50px;
    background-color: #ff5a5a;
    color: #fff;
    font-size: 1.6rem;
	display: flex;
    top: 0;
    z-index: 510;
}
.indexser span.zuojian {
	display: block;
	height: 0.5rem;
	width: 0.5rem;
    position: relative;
}
.indexser span.zuojian img {
	position: absolute;
    display: inline-block;
    width: 12px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.indexser h3 {
	flex: 1;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
}
.indexser span.yougao {
	height: 0.5rem;
	width: 0.5rem;
	position: relative;
    top: 0;
}
.indexser span.yougao img {
	position: absolute;
    width: 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>