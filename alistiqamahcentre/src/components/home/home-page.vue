<template>
  <div class="grid-container">
    <div class="content">
      <h3 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Al Istiqamah Islamic Centre
      </h3>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris
      </p>
      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Learn More
      </button>
    </div>
    <div class="image">
      <img src="\src\assets\Logo1-B&W.png" class="h-28 mr-3" alt="Al Istiqamah Logo" />
    </div>
  </div>
</template>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.content {
  padding: 30px;
  position: relative;
  align-items: center;
  justify-content: center;
}

.block {
  transition: all 0.3s ease;
}

.block:hover {
  transform: translateY(-5px);
}

h3 p {
  color: #403b49;
}

p {
  padding: 15px 0;
}

button {
  background-color: #403b49;
}
</style>
