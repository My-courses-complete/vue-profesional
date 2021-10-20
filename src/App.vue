<script>
const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Hoy aca en el baile', artist: 'El Pepo' },
  { name: 'I was made for loving you', artist: 'Kiss' }
]

export default {
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
      this.tracks = tracks
    }
  }
}

</script>

<template lang="pug">
section.section
  nav.nav.has-shadow
    .container
      input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
      a.button.is-info.is-large(@click="search") Buscar
      a.button.is-danger.is-large &times;
      p
        small {{ searchMessage }}

  .container.results
    .columns
      .column(v-for="t in tracks") {{ t.name }}-{{ t.artist}}
</template>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}
</style>
