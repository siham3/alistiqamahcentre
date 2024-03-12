<template>
  <div>
    <header-section />
    <router-view/>
    <footer-section />
  </div>
</template>

<script setup lang="ts">
import HeaderSection from './components/header/header-section.vue'
import FooterSection from './components/footer/footer-section.vue'
</script>
