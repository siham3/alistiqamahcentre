
<template>
  <div id="header">
    <nav class="border-gray-200 dark:bg-gray-900">
      <div class="header flex flex-wrap justify-normal items-center mx-auto max-w-screen-xl">
        
        <img src="\src\assets\Logo1-B&W.png" class="h-28 mr-3" alt="Al Istiqamah Logo" />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Al Istiqamah Centre</span> -->
        <MenuTile />
       
        <!-- <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Donate
        </button> -->
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import MenuTile from "./menu-tile.vue"

</script>
<style scoped>
.header{
  padding: 1.2% 5%;
}
div {
  color: #403b49;
  /* margin: 0 2% 0 2%; */
  /* @media screen and (max-width: 611px) {
  justify-content: space-between;} */
  @media screen and (max-width: 794px) {
  justify-content: space-evenly;}
  
}
* { 
  background-color: #FFFFFF;
  }
</style>
