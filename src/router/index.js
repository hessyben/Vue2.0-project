import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MyApply from '@/components/apply/MyApply';
import MyProject from '@/components/project/MyProject';
import ApplyDetail from '@/components/apply/detail';

Vue.use(Router);

export default new Router({
	routes: [
	    {
	      path: '/hello',
	      name: 'Hello',
	      component: HelloWorld,
	      children:[
	      		{
			      path: '/apply',
			      name: 'Apply',
			      component: MyApply
			    },
			    {
		      		path:'/apply/detail/:id',
		      		name:'ApplyDetail',
		      		component:ApplyDetail
		      	},
			    {
			      path: '/project',
			      name: 'Project',
			      component: MyProject
			    }
	      ]
	    }
	]
});
