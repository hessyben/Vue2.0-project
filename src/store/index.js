import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import dialog_store from './dialog_store.js'; // 参考学习
import apply_store from '@/components/apply/apply_store.js';
Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	getters,
	modules:{
		dialog:dialog_store,
		apply:apply_store
	}
})