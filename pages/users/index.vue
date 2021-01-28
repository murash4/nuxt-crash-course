<template>
  <section>
    <h1>{{psgeTitle}}</h1>
    <ul>
      <li
        v-for="user of users"
        :key="user.id"
      >
        <a href="#" @click.prevent="openUser(user.id)">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch ({ store }) {
    if (!store.getters['users/getUsers'].length) {
      await store.dispatch('users/fetchData')
    }
  },
  data: () => ({
    psgeTitle: 'Users page'
  }),
  computed: {
    users () {
      return this.$store.getters['users/getUsers']
    }
  },
  methods: {
    openUser (userId) {
      this.$router.push(`/users/${userId}`)
    }
  }
}
</script>
