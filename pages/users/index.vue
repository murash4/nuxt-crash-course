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
  async asyncData ({ $axios }) {
    const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')

    return { users }
  },
  data: () => ({
    psgeTitle: 'Users page',
    users: []
  }),
  methods: {
    openUser (userId) {
      this.$router.push(`/users/${userId}`)
    }
  }
}
</script>
