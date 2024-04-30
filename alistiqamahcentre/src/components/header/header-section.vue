
<template>
  <div id="header">
    <nav class="border-gray-200 dark:bg-gray-900">
      <div class="header flex flex-wrap items-center mx-auto max-w-screen-xl">
        
        <img src="\src\assets\Logo1-B&W.png" class="h-28 mr-3" alt="Al Istiqamah Logo" />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Al Istiqamah Centre</span> -->
        <MenuTile />
       
        <button
          type="submit"
          class="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-800 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-yellow-700"
          onclick="location.href='https://ca.mohid.co/ab/wcs/alistiqamahcenter/masjid/online/donation';">
          Donate Now!
        </button>
      </div>
    </nav>
  </div>
</template>
<script lang="ts" setup>
import MenuTile from "./menu-tile.vue"

</script>
<style scoped>
.header{
  padding: 1.2% 5%;
}
.button{
  margin: 20%;
}
div {
  color: #403b49;
  /* margin: 0 2% 0 2%; */
  /* @media screen and (max-width: 611px) {
  justify-content: space-between;} */

  justify-content: space-evenly;
}

* { 
  background-color: #FFFFFF;
  }
</style>
