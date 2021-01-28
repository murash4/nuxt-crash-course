export const state = () => ({
  users: []
})

export const getters = {
  getUsers: state => state.users
}

export const mutations = {
  setUsers (state, payload) {
    state.users = payload
  }
}

export const actions = {
  async fetchData ({ commit }) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')

    commit('setUsers', users)
  }
}
