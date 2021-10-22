
<script>
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<template lang="pug">
Header
router-view
Footer
</template>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
