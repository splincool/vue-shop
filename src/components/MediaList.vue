<template>
  <div>
    <div v-for="(item, index) in mediaData.results" :key="index"
      style="display: flex"
    >
      <img :src="item.artworkUrl100" />
      {{item.trackName}}
      {{item.trackPrice}}
      <!-- <video width="320" height="240" controls>
        <source :src="item.previewUrl" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
        Your browser does not support the video tag.
      </video> -->
    </div>
  </div>
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
    axios.get('https://itunes.apple.com/search?term=bond&media=movie&limit=5&country-uk')
    .then(response => {
      this.mediaData = response.data
      console.log(this.mediaData)
    })
    .catch(e => {
      this.error = e
    })
  }
}
</script>