
<template>
  <div>
    <nav class="border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <img src="\src\assets\IMG_4680.png" class="h-28 mr-3" alt="Al Istiqamah Logo" />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Al Istiqamah Centre</span> -->
        <MenuTile />
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import MenuTile from "./menu-tile.vue"

</script>
<style scoped>
div {
  color: #403b49;
  /* @media screen and (max-width: 611px) {
  justify-content: space-between;} */
  @media screen and (max-width: 794px) {
  justify-content: space-evenly;}
}
* { 
  background-color: #f1f2e3;
  }
</style>
