<template lang="pug">
.content(v-if="existTrack")
  p.is-128x128
    img(:src="urlTrack")
  p
    strong {{ track.name }}
    small [{{ track.duration_ms }}]
  p
    audio(controls :src="track.preview_url")
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  computed: {
    urlTrack () {
      if (!this.track.album) {
        return ''
      }
      return this.track.album.images[0].url
    },
    existTrack () {
      return !!this.track.album
    }
  },
  created () {
    this.$bus.on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>
