<template lang="pug">
section.hero.is-success
  .hero-head
    header.navbar
      .container
        .navbar-left
          .navbar-item
            strong 📻 Searcher Music
        .navbar-right.navbar-menu
          a.navbar-item(@click="selectLang('en')") 🇬🇧
          a.navbar-item(@click="selectLang('es')") 🇲🇽
          router-link.navbar-item(to="/") {{ $t('search')}}
          router-link.navbar-item(to="/About") {{ $t('about') }}
  .hero-body
    .container.has-text-centered
      h1.title Music
      h2.subtitle The best Music here!
      Player
</template>

<script>
import Player from '@/components/Player.vue'

export default {
  components: { Player },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
