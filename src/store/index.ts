import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';

import { authentication } from './authentication';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
      version: '1.0.0',
  },
  modules: {
      authentication,
  },
};

export default new Vuex.Store<RootState>(store);

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
