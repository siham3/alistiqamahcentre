<template>
  <nav>
    <span class="text-3xl cursor-pointer mx-2 md:hidden block">
      <!-- <ion-icon name="menu" onclick="Menu(this)"></ion-icon> -->
    </span>
    <div class="max-w-screen-xl px-6 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <li>
            <router-link class="text-gray-900 dark:text-white" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="text-gray-900 dark:text-white" to="/About">About</router-link>
          </li>
          <li>
            <router-link class="text-gray-900 dark:text-white" to="/Program">Programs</router-link>
          </li>
          <!-- <li>
            <a href="#" class="text-gray-900 dark:text-white" aria-current="page">Programs</a>
          </li>
          <li>
            <a onclick="document.getElementById('OurMission').scrollIntoView()" aria-current="page"
              >Our Mission</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white">Contact</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
function scrollToMiddle(): void {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth'
  })
}
</script>
<style scoped>
ul li a {
  color: #403b49;
}

button {
  background-color: #403b49;
}
</style>
