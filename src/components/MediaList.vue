<template>
  <b-row class="my-3">
    <b-col>
      <div class="text-center" v-if="$store.state.isLoading">
        <b-spinner variant="primary" label="Text Centered"></b-spinner>
      </div>
      <b-card-group deck v-else>
        <MediaCard
          v-for="(item, index) in mediaData.results" :key="index"
          :item=item
        />
      </b-card-group>
    </b-col>
  </b-row>
</template>

<script>
import MediaCard from './MediaCard'
export default {
  name: 'mediaList',
  data() {
    return {
      mediaData: [],
      error: null
    }
  },
  created () {
    this.mediaData = require('../data.json')
    this.$store.commit('setLoading', false)
  },
  components: {
    MediaCard
  }
}
</script>