<template lang="pug">
.card(v-if="track && track.album")
  .card-image
    figure.image.is-1by1
      img(:src="track.album.images[0].url")

  .card-content
    .media
      .media-left
        figure.image.is-48x48
          img(:src="track.album.images[0].url")
      .media-content
        p.title.is-6
          strong {{ track.name }}
        p.subtitle.is-6 {{ track.artists[0].name }}
    .content
      small {{ $filter.convertMsToMm(track.duration_ms)}}
      nav.level
        .level-left
          a.level-item
            span.icon.is-small(@click="selectedTrack") ▶
          a.level-item
            span.icon.is-small(@click="goToTrack") 🌎
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },
  emits: ['select'],
  methods: {
    selectedTrack () {
      this.$emit('select', this.track.id)

      this.$bus.emit('set-track', this.track)
    },
    goToTrack () {
      this.$router.push(`/track/${this.track.id}`)
    }
  }
}
</script>
