<template>
  <footer class="m-4">
    <div class="footer w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a class="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src= "/src/assets/IMG_4680.png" class="h-16" alt="Al Istaqama Logo"/>
            </a>
            <ul class="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <router-link class="hover:underline me-4 md:me-6" to="/">Home</router-link>
                </li>
                <li>
                  <router-link class="hover:underline me-4 md:me-6" to="/About">About</router-link>
                </li>
                <li>
                  <router-link class="hover:underline me-4 md:me-6" to="/Program">Programs</router-link>
                </li>
                <li> 
                    <!-- <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-            4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Donate
        </button> -->
              </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 <a href="https://AlIstiqamahcentre.com/" class="hover:underline">Al Istiqamah Centre</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>
<style scoped>
.footer{
  padding: 1.2% 5%;
}
@media (min-width: 640px) {
  .footer:justify-between {
    justify-content: center;
  }
}
</style>
