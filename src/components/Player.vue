<template lang="pug">
.content(v-if="track && track.album")
  p.is-128x128
    img(:src="this.track.album.images[0].url")
  p
    strong {{ track.name }}
    small [{{ $filter.convertMsToMm(track.duration_ms) }}]
  p
    audio(controls :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
