<template>
  <b-row class="flex-column">
    <b-col>
      <b-input-group class="mt-3 mb-3">
        <b-form-input @keyup.enter="doFetch" v-model="term"></b-form-input>
        <b-input-group-append>
          <b-button @click="doFetch" variant="info">
            Seacrh
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
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
import axios from 'axios'
import MediaCard from './MediaCard'
export default {
  name: 'mediaList',
  data() {
    return {
      mediaData: [],
      error: null,
      term: 'sherlock'
    }
  },
  created () {
    this.doFetch()
  },
  methods: {
    doFetch () {
      this.$store.commit('setLoading', true)
      axios
      .get(`https://itunes.apple.com/search?term=${this.term}&media=movie&limit=18`)
      .then(response => {
        this.mediaData = response.data
        console.log(this.mediaData)
        this.$store.commit('setLoading', false)
      })
      .catch(e => {
        this.error = e
      })
    }
  },
  components: {
    MediaCard
  }
}
</script>