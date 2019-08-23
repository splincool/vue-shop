<template>
  <b-row>
    <b-col>
      <b-card-group deck>
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
  components: {
    MediaCard
  }
}
</script>