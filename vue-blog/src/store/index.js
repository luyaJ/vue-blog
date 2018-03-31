import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 设置属性
const state = {
  currentName: null,
  isLogin: false
}

// 获取属性状态
const getters = {
  currentName: state => state.currentName,
  isLogin: state => state.isLogin
}

// 同步改变状态
const mutations = {
  // 更改用户状态信息
  userState (state, user) {
    // 访问到user的话
    if (user) {
      state.currentName = user
      state.isLogin = true
    } else {
      state.currentName = null
      state.isLogin = false
    }
  }
}

// 异步改变状态
const actions = {
  setUser ({commit}, user) {
    commit('userState', user)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
