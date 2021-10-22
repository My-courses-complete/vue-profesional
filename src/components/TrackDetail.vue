<template lang="pug">
.container
  .columns
    .column.is-5.is-offset-4
      Track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import Track from '@/components/Track.vue'

export default {
  components: { Track },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id

    trackService.getById(id).then(res => {
      this.track = res
    })
  }
}
</script>
