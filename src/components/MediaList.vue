<template>
  <b-row class="flex-column">
    <b-col>
      <div class="d-flex mb-3">
        <b-form-input v-model="searchValue" 
          placeholder="type for searching... (for example: harry)">
        </b-form-input>
        <span class="mdi mdi-24px mdi-magnify search-icon"></span>
      </div>
    </b-col>
    <b-col>
      <div class="text-center" v-if="$store.state.isLoading">
        <b-spinner variant="primary" label="Text Centered"></b-spinner>
      </div>
      <b-card-group deck v-else>
        <MediaCard
          v-for="(item, index) in filteredMediaData" :key="index"
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
      error: null,
      searchValue: ''
    }
  },
  created () {
    this.mediaData = require('../data.json')
    this.$store.commit('setLoading', false)
  },
  computed: {
    filteredMediaData () {
      return this.mediaData.results.filter(item => {
        return item.trackName.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    }
  },
  components: {
    MediaCard
  }
}
</script>

<style>
  .search-icon {
    position: absolute;
    right: 25px;
    top: 2px;
    color: #6c757d;
  }
  @media only screen and (max-width: 1000px) {
    .card-deck {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
</style>