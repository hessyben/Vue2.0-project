import axios from 'axios';
import HttpService from '@/service/index.js';
import commons from '@/service/common.js';
import lodash from 'lodash';

var status = [
    { label:'审批中', value:1 },
    { label:'处理中', value:2 },
    { label:'已完成', value:3 },
    { label:'已拒绝', value:4 } 
];

const state = {
	project:[],
	modal:false,
	length:22
}

// 调用 mutations 是唯一允许更新应用状态的地方。
const mutations = {
	SET_PROJECT_LIST:(state,{list})=>{
		state.project = list;
	},
	CHANGE_MODAL:(state)=>{
		state.modal = state.modal?false:true;
	}
}

const actions = {
	LOAD_PROJECT_LIST:( {commit} )=>{
		let params = {
		    nowPage:1, 
		    numByPage:15,
		    userId:'ca811395d1ce40d190757e6cf5b87508'
		};
		HttpService.getData(commons.url.apply_list,params)
		.then( (res)=>{
			if ( res.success==1 ) {
		        var project = _.map(res.data,function(n){
		            n.statusMsg = _.find(status,{value:n.status}).label;
		            n.handler = _.map(n.handlers,'userName').join('、');
		            return n;
		        })
		        commit('SET_PROJECT_LIST',{list:project})
		    }
		},(err)=>{
			console.log(err);
		}); 	
	}
}

const getters = {
	completeProjects: (state) => {
		return state.project;
	},
	modal:(state)=>state.modal
}

export default {
	state:state,
	mutations:mutations,
	actions:actions,
	getters:getters
}