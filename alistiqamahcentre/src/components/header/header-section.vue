<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <img src="\src\assets\Logo1-B&W.png" class="h-28 mr-3" alt="Al Istiqamah Logo" />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Al Istiqamah Centre</span> -->
        <menu-tile />
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import MenuTile from './menu-tile.vue'
</script>
<style scoped>
div {
  color: #403b49;
}
* { 
  background-color: #f1f2e3;
  }
</style>
