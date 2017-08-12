<template>
	<div class="tiyanList">
	<div v-for='itms in send'>
		<div class="indexwf">
				<a href="#"><img :src='itms.bigimg' class="indexwfbg"></a>
		</div>
		<Lunbo :lunbos='itms.lunbo'></Lunbo>
	</div>
	</div>
</template>
<script>
import Lunbo from '@/pages/tiyan/List_lunbo.vue';
export default {
  name: 'tiyanList',
  props:['send'],
  components:{
  	Lunbo:Lunbo
  }
}
</script>

<style scoped>
.indexwf {
    width: 100%;
}
.indexwf img {
    width: 100%;
    display: block;
}
</style>