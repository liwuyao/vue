import Vue from 'vue'
import Router from 'vue-router'
import Index_router from '@/components/Index_router'
const User = r => require.ensure([], () => r(require('@/pages/product/User.vue')), 'User')
const Index = r => require.ensure([], () => r(require('@/components/Index')), 'Index')
const Tiyan = r => require.ensure([], () => r(require('@/pages/tiyan/tiyan.vue')), 'Tiyan')
const Search = r => require.ensure([], () => r(require('@/pages/search/Search.vue')), 'Search')
const Car = r => require.ensure([], () => r(require('@/pages/Shop_car/Shop_car.vue')), 'Car')
const Load = r => require.ensure([], () => r(require('@/pages/load/Load.vue')), 'Load')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'Index_router',
      component: Index_router,
       children: [
       	{
		    	path:"/tiyan",
		    	component:Tiyan,
		    	name:"tiyan"
		    },
       	{
		    	path:"/index",
		    	component:Index,
		    	name:"index"
		    },
		    {
		    	path:"/search",
		    	component:Search,
		    	name:"search"
		    },
		    {
		    	path:"/car",
		    	component:Car,
		    	name:"car"
		    }
      ]
    },
    {
    	path:'/load',
    	component:Load,
    	name:'load'
    }
  ]
})
