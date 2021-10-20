<script setup>
const showValue = false
const value = 'Algo'

const items = [1,2,3,4,5]
</script>

<template lang="pug">
p(v-show="showValue") {{ value }}
p(v-if="showValue") {{ value }}
p(v-if="false") {{ value }}
p(v-else="showValue") {{ 'algo mas' }}

ul
  li(v-for="i in items") {{ i }}
</template>

<style lang="sass">
@import './scss/main.scss'
</style>
