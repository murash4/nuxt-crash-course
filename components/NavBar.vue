<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nuxt SSR</a>
      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              exact
              no-prefetch
              to="/"
              active-class="active"
              class="nav-link"
            >Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              no-prefetch
              to="/about"
              active-class="active"
              class="nav-link"
            >About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              no-prefetch
              to="/users"
              active-class="active"
              class="nav-link"
            >Users</nuxt-link>
          </li>
          <li
            v-if="hasToken"
            class="nav-item"
          >
            <a
              no-prefetch
              href="#"
              active-class="active"
              class="nav-link"
              @click.prevent="logout"
            >Logout</a>
          </li>
          <li
            v-if="!hasToken"
            class="nav-item"
          >
            <nuxt-link
              no-prefetch
              to="/login"
              active-class="active"
              class="nav-link"
            >Login</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    hasToken () {
      return this.$store.getters['hasToken']
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
