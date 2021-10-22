<template lang="pug">
section.hero.is-success
  .hero-head
    header.navbar
      .container
        .navbar-start
          .navbar-item
            strong 📻 Searcher Music
        .navbar-right.navbar-menu
          router-link.navbar-item(to="/") Search
          router-link.navbar-item(to="/About") About
  .hero-body
    .container.has-text-centered
      h1.title Music
      h2.subtitle The best Music here!
      Player
</template>

<script>
import Player from '@/components/Player.vue'

export default {
  components: { Player }
}
</script>
