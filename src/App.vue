<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <Navbar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  created () {
    this.$store.dispatch('downloadFromLocalStorage')
  },
  components: {
    Navbar
  }
}
</script>

