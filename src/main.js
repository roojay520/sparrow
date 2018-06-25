import 'normalize.css';
import '@/assets/icons';
import '@/assets/scss/index.scss';
import '@/assets/scss/element';
import '@/components/ElementUI';
import components from '@/components';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import cookie from './utils/cookie';
import session from './utils/session';
import regx from './utils/rgex';
import formatDate from './utils/date';

Vue.prototype.$cookie = cookie;
Vue.prototype.$session = session;
Vue.prototype.$regx = regx;

Vue.filter('formatDate', formatDate);
Vue.use(components);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
