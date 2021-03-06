import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import {router} from './router';
import sdk from './js/common.js'     //引入公用js
import {post, get} from './js/http.js'     //引入公用js

//添加到vue属性中
Vue.use(Vant);
Vue.use(router);
Vue.prototype.$sdk = sdk;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
