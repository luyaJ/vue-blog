import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: null,
    isLogin: false
  },
  // 类似vue中的 computed方法
  getters: {
    name: state => state.name,
    isLogin: state => state.isLogin
  },
  // 更改store中的状态的唯一方法
  mutations: {
    userStatus (state, user) {
      if (user) {
        state.name = user
        state.isLogin = true
      } else {
        state.name = null
        state.isLogin = false
      }
    }
  },
  // Action类似于mutation（不过，action提交的是mutation，而不是直接变更状态）
  // 可以包含任意异步操作
  actions: {
    setUser ({commit}, user) {
      commit('userStatus', user)
    }
  }
})
