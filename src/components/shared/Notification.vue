<template lang="pug">
.container
  .columns
    .column.is-5.is-offset-4
      .notification(:class="[typeNotification ? 'is-danger' : 'is-success']")
        slot(name="body") Algo anduvo mal
</template>

<script>
export default {
  props: {
    typeNotification: { type: Boolean, requeried: true }
  }
}
</script>

<style lang="scss">
.notification {
  margin: 10px;
}
</style>
