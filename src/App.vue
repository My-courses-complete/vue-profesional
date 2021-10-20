<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const msg = 'Hello World'
</script>

<template lang="pug">
.container
  img(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")
  h1 Registro Estacion
  form
    label Nombre
    input(type="text")
    label Apellido
    input(type="text")
    label Cargo
    input(type="text")
    input(type="submit" id="submit" value="Enviar")
</template>

<style lang="sass">
@import './scss/main.scss'
</style>
