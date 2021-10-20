<script setup>
import {ref, computed} from 'vue';

const name = ref('')
const lastName = ref('')
const fullname = computed(() => `${name.value} ${lastName.value}`)
const birthday = ref(new Date())
const current = new Date()
console.log(birthday.value)
const edad = computed(() => {
  console.log(new Date(birthday.value))
  const fecha = new Date().getTime() - new Date(birthday.value).getTime()
  return Math.round(fecha/(1000*60*60*24*365))
})
</script>

<template lang="pug">
input(v-model="name")
input(v-model="lastName")
input(v-model="birthday" type="date")
p {{ fullname }}
p edad: {{ edad }}
</template>

<style lang="sass">
@import './scss/main.scss'
</style>
