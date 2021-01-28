export const state = () => ({
  token: null
})

export const getters = {
  hasToken: state => !!state.token
}

export const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  clearToken (state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit ({ dispatch }) {
    console.log('Nuxt start')
  },
  login ({ commit }) {
    commit('setToken', 'myToken')
  },
  logout ({ commit }) {
    commit('clearToken')
  }
}
