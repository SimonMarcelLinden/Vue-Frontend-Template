import Vue from 'vue';
import App from './app.view.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import SimplifyVue from 'simplify-vue'
import 'simplify-css-pacakge';
import 'simplify-icon';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
