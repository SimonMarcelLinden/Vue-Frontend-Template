import Vue from 'vue';
import App from './app.view.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import SimplifyVue from 'simplify-vue'
import 'simplify-css-package';
import 'simplify-icon';

Vue.config.productionTip = false
Vue.use(SimplifyVue)

const sharedComponents = require.context(
	// The relative path of the components folder
	'./components/shared',
	// Whether or not to look in subfolders
	true,
	// The regular expression used to match component filenames who starts with "My"
	/[A-Za-z]\w+\.component\.(vue|js)/
	// /[A-Za-z]\w+\.(vue|js)/
)

sharedComponents.keys().forEach(fileName => {
	// Get component config
	const componentConfig = sharedComponents(fileName)

	// Get PascalCase name of component
	const componentName = upperFirst(
		camelCase(
			// Gets the file name regardless of folder depth
			"shared." + fileName.split('/').pop().replace(/\.component\.\w+$/, '')
		)
	)

	// Register component globally
	Vue.component(componentName,
		// Look for the component options on `.default`, which will
		// exist if the component was exported with `export default`,
		// otherwise fall back to module's root.
		componentConfig.default || componentConfig
	)
})

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
