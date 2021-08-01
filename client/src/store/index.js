import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    SOCKET_serverName(_, data) {
      console.log('** serverName event received in action **', data);
    },
  },
})