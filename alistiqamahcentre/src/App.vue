<template>
  <div>
    <header-section />
    <home-page />
    <footer-section />
  </div>
</template>

<script setup lang="ts">
import HeaderSection from './components/header/header-section.vue'
import FooterSection from './components/footer/footer-section.vue'
import HomePage from './components/home/home-page.vue'
</script>

<style scoped>
template {
  background-color: #f9f6f7;
}
</style>
