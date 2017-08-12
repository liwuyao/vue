<template>
	<div class="carlist">
		<ul class="out">
				<div class="title"><img src="../../../static/imags/car/shiyong.jpg"></div>
				<div  v-for='i in car'>
					<Carbox :result='i' @sendto='send' :all='all' :imgs='img' :k='k' :qufen='qufen' @quangou='quangou' @add='add'></Carbox>
				</div>
		</ul>
	</div>
</template>

<script>
import box from '@/pages/Shop_car/Carbox.vue';
export default {
  name: 'carlist',
   components:{
  	Carbox:box
  },
data(){
	return{
		list:[1,2]
	 }
  },
  props:['car','all','img','k','qufen'],
  methods:{
  	send:function(p,change){
  		this.$emit('send',p,change) 
  	},
  	quangou:function(a){
  		this.$emit('jx',a) 
  	},
  	add:function(a){
  		this.$emit('add',a)
  	}
  }
}

</script>

<style scoped>
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
/*结算*/

</style>