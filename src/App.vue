
<script>
import trackService from '@/services/track'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
import Track from '@/components/Track.vue'
import Loader from '@/components/shared/Loader.vue'

export default {
  components: {
    Footer,
    Header,
    Track,
    Loader
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  created () {
    console.log('created...')
  },
  mounted () {
    console.log('mounted...')
  },
  methods: {
    search () {
      if (!this.searchQuery) {
        return
      }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.isLoading = false
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<template lang="pug">
Header
Loader(v-show="isLoading")
section.section(v-show="!isLoading")
  nav.nav.has-shadow
    .container
      input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
      a.button.is-info.is-large(@click="search") Buscar
      a.button.is-danger.is-large &times;
  .container
    p
      small {{ searchMessage }}

  .container.results
    .columns.is-multiline
      .column.is-one-quarter(v-for="t in tracks")
        Track(:track="t")
Footer
</template>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}
</style>
