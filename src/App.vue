<script setup>
import {ref} from 'vue';

const name = ref('');
const url = ref('http://github.com')
</script>

<template lang="pug">
input(v-model="name")
p {{name}}

a(:href="url") Link
</template>

<style lang="sass">
@import './scss/main.scss'
</style>
