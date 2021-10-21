
<script>
import trackService from './services/track'
import Footer from './components/layout/Footer.vue'
import Header from './components/layout/Header.vue'

export default {
  components: {
    Footer,
    Header
  },
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) {
        return
      }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<template lang="pug">
Header
section.section
  nav.nav.has-shadow
    .container
      input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
      a.button.is-info.is-large(@click="search") Buscar
      a.button.is-danger.is-large &times;
  .container
    p
      small {{ searchMessage }}

  .container.results
    .columns
      .column(v-for="t in tracks")
        | {{ t.name }}-{{ t.artists[0].name }}
Footer
</template>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}
</style>
