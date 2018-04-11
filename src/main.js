// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

// Custom directives globally
/*Vue.directive('ranbow', {
	bind(el,binding,vnode){
		el.style.color = "#" + Math.random().toString().slice(2,8);
	}
});
Vue.directive('theme', function (el, binding){
	if(binding.value == 'wide'){
			el.style.maxWidth = "1200px";
		}
		else if(binding.value == 'narrow'){
			el.style.maxWidth = "600px";
		}
});*/

// Filters Globally
/*Vue.filter('snippet', function(value){
	return value.slice(0,200) + ' ...';

});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
