<script setup>
import { ref } from 'vue';

const name = ref('')
const formatName = ref('')
function format() {
  formatName.value = name.value.split(' ').join('-').toUpperCase()
}
</script>

<template lang="pug">
input(v-model="name")
button(@click="format") Format
p {{ formatName }}
</template>

<style lang="sass">
@import './scss/main.scss'
</style>
