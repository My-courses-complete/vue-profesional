<template lang="pug">
main
  transition(name="move")
    Notification(v-show="showNotification" :typeNotification="badNotification")
      template(v-slot:body v-if="badNotification")
        p No se encontraron resultados
      template(v-slot:body v-else)
        p se encontraron {{ totalGet }} resultados

  transition(name="move")
    Loader(v-show="isLoading")
  section.section(v-show="!isLoading")
    nav.navbar
      .container
        input.input.is-large(
          type="text",
          placeholder="Buscar canciones",
          v-model="searchQuery",
          @keyup.enter="search")
        a.button.is-info.is-large(@click="search") Buscar
        a.button.is-danger.is-large &times;
    .container
      p
        small {{ searchMessage }}

    .container.results
      .columns.is-multiline
        .column.is-one-quarter(v-for="t in tracks")
          Track(v-blur="t.preview_url" :class="{ 'is-active': t.id===selectedTrack }" :track="t" @select="setSelectedTrack")
</template>

<script>
import trackService from '@/services/track'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
import Track from '@/components/Track.vue'
import Loader from '@/components/shared/Loader.vue'
import Notification from '@/components/shared/Notification.vue'

export default {
  components: {
    Footer,
    Header,
    Track,
    Loader,
    Notification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      badNotification: false,
      totalGet: 0,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
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
          this.showNotification = true
          this.badNotification = res.tracks.total === 0
          this.totalGet = res.tracks.total
          this.tracks = res.tracks.items
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
