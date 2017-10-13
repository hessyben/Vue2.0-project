export default{
	// this.$store.state.dialog.show
	state:{
		show:false
	},
	getters:{
		// 这里的state对应上面这个state 
		// this.$store.getters.not_show
		not_show(state){
			return !state.show;
		}
	},
	mutations:{
		// 这里的state对应着上面这个state
		// 对应使用此函数的格式：this.$store.commit('switch_dialog');
		// 备注：mutations 中的方法是不分组件的 , 假如你在 dialog_stroe.js 文件中的定义了
		// switch_dialog 方法 , 在其他文件中的一个 switch_dialog 方法 , 那么
		// $store.commit('switch_dialog') 会执行所有的 switch_dialog 方法。
		switch_dialog(state){
			state.show = state.show?false:true;
		}
	},
	actions:{
		// 这里的context和我们使用的$store拥有相同的对象和方法
		a_switch_dialog(context){
			context.commit('switch_dialog');
			// 可以在这里触发其他的mutations方法
		}
	}
}