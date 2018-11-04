/* eslint-disable no-new */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/components/App';
import router from '@/router';
import store from '@/stores';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  component: { App },
  template: '<App/>',
  render: h => h(App),
});
