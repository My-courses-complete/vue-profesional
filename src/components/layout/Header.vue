<template lang="pug">
section.hero.is-success
  .hero-head
    header.nav
      .container
        .nav-left
          .nav-item
            strong 📻 Searcher Music
        .nav-right.nav-menu
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
