<template>
  <top-nav />

  <main>
    <router-view />
  </main>

  <nav class="footer-nav px-3 bg-light">
  </nav>
  <footer class="p-2 bg-light text-center">
    <small>Copyright © 2022 Okinawa School of Foreign Languages. All Rights Reserved.</small>
  </footer>
</template>

<script>
import TopNav from './components/TopNav.vue';

export default {
  components: {
    'top-nav': TopNav,
  },
  mounted() {
    this.$store.dispatch('initializeApp')
  }
}
</script>

<style scoped>
main {
  /* height: inherit; */
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  /* display: flex; */
}

main>*:first-child {
  flex: 1;
}

footer {
  position: relative;
  z-index: 1;
}

.footer-nav {
  position: relative;
  z-index: 1;
  height: 300px;
  /* background-color: darkorange; */
}
</style>
