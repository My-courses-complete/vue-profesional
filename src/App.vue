<script setup>
const msg = 'hello world'
const person = {
  name: 'Juan'
}
</script>

<template lang="pug">
h1 {{ msg }}
p {{ 1 + 1}}
p {{ 'hola' + 'mundo'}}
p {{ JSON.stringify(person) }}
</template>

<style lang="sass">
@import './scss/main.scss'
</style>
