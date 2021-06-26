import Vue from 'vue';
import App from './app.view.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

// import LightCSS from '@simon.marcel.linden/lightcss/dist/lightcss.esm.min.js';

Vue.config.productionTip = false
//Vue.use(LightCSS);


new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
