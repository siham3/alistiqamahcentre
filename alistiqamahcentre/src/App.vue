<template>
  <div>
    <header-section />
    <body>
      <home-page/>
    </body>
    <footer-section />
  </div>
</template>

<script setup lang="ts">
import HeaderSection from './components/header/header-section.vue'
import FooterSection from './components/footer/footer-section.vue'
import HomePage from './components/home/home-page.vue'
</script>

<style scoped>
body {
  background-color: #d4e2ec;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
}
</style>
