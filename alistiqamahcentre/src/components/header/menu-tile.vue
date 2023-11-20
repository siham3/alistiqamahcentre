<template>
  <nav>
    <span class="text-3xl cursor-pointer mx-2 md:hidden block">
        <!-- <ion-icon name="menu" onclick="Menu(this)"></ion-icon> -->
      </span>
    <div class="max-w-screen-xl px-6 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <!-- <li>
            <a href="#" class="text-gray-900 dark:text-white" aria-current="page">About Us</a>
          </li> -->
          <li>
            <a href="#" class="text-gray-900 dark:text-white" aria-current="page">Our Mission</a>
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white">Programs</a>
          </li>
          <!-- <li>
            <a href="#" class="text-gray-900 dark:text-white">Contact Us</a>
          </li> -->
        </ul>
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Donate
        </button>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
</script>
<style scoped>
ul li a {
  color: #403b49;
}

button {
  background-color: #403b49;
}
</style>
