<template>
  <b-row>
    <b-col v-for="(item, index) in mediaData.results" :key="index">
      <b-card
        :title="item.trackName"
        :img-src="largeImage(item.artworkUrl100)"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 300px; min-width: 200px"
        class="mb-2"
      >
        <b-card-text>
          {{item.trackPrice}}
        </b-card-text>
        <b-button href="#" variant="primary">Add to cart</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      mediaData: [],
      error: null
    }
  },
  created() {
    axios.get('https://itunes.apple.com/search?term=bond&media=movie&limit=25&country-uk')
    .then(response => {
      this.mediaData = response.data
      console.log(this.mediaData)
    })
    .catch(e => {
      this.error = e
    })
  },
  methods: {
    largeImage (url) {
      return url.replace('100x100', '300x300')
    }
  }
}
</script>