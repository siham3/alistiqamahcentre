<template>
  <div>
    <div class="content1 grid-container container-one mx-auto">
      <div class="content  slide-in-blurred-bottom">
        <h1 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome
        </h1>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          At Al Istiqamah Islamic Centre, we are more than just a place of worship; we are a beacon of guidance and unity for people of all ages and backgrounds. Our name, "Al Istiqamah," reflects our core values and aspirations. Derived from the Arabic word "istiqamah," it embodies the concept of steadfastness, unwavering commitment to the path of righteousness, and staying true to the right direction without deviation.
        </p>
          <router-link class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" to="/About">Learn More</router-link>
      </div>
      <img src="\src\assets\mosquebuilding.png" class="icon-mosque slide-in-blurred-bottom" alt="Al Istiqamah building" />
    </div>
    <div class="content2 content">
      <div class="page-blocks slide-in-blurred-bottom">
        <h1 class="mb-2 text-3xl font-bold tracking-tight dark:text-white">
          ISTIQAMAH (is.ti.qa.mah)
        </h1>
        <p class="font-normal">
          to go straight into the right direction, acting rightly, allowing no deviation. It is derived from the stem
          <b>Qiyyam</b>, which implies the continuity of doing something, following up with it and making sure that it is done in the right way and there is neither deviation nor swerving
        </p>
      </div>
    </div>
    <div class="content3">
      <h1 id="OurMission" class="mb-2 text-3xl font-bold tracking-tight dark:text-white">Our Mission</h1>
      <p class="font-normal para2">At Al Istiqamah Centre, we're dedicated to nurturing an inclusive community rooted in Islamic teachings. We foster spiritual growth, provide a sacred space for worship, education, and service to humanity.  Our mosque serves as a beacon of guidance and unity, nurturing diversity and promoting understanding of Islam's values for a better society.</p>
      <div>
        <ul class="grid-container3">
          <li>
            <img src="\src\assets\crescent-moon.png" class="mission-icons" alt="belonging" />
            <h2 class="mb-2 text-1xl font-bold tracking-tight dark:text-white">Belonging</h2>
            <p>Create a sense of belonging by building stronger bonds and fostering dialogue among individuals of all generations.
            </p>
          </li>
          <li>
            <img src="\src\assets\shalat.png" class="mission-icons" alt="Unity" />
            <h2 class="mb-2 text-1xl font-bold tracking-tight dark:text-white">Unity</h2>
            <p> Bridge the gap between the generations, creating a cohesive environment that promotes understanding and connectedness.</p>
          </li>
          <li>
            <img src="\src\assets\koran.png" class="mission-icons" alt="faith" />
            <h2 class="mb-2 text-1xl font-bold tracking-tight dark:text-white">Faith</h2>
            <p>Through Islamic principles and outreach, we inspire meaningful lives aligned with faith and integrity.</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="content1 content grid-container">
      <img src="\src\assets\boypraying.png" class="icon-praying slide-in-blurred-bottom" alt="Al Istiqamah building" />
      <div>
        <h1 class="mb-2 text-3xl font-bold tracking-tight dark:text-white">For the Community</h1>
        <p>Our local, youth-driven team knows the community intimately, and our vision is clear: to create a Center deeply grounded in the Quran and Sunnah, where youth flourish and adults find solace—a true second home for our cherished Muslim community.</p>
      </div>
    </div> -->
    <div class="content1 content grid-container">
      <div class="content">
        <h1 class="mb-2 text-3xl font-bold tracking-tight dark:text-white">Our Programs</h1>
        <p class="font-normal">Our local, youth-driven team knows the community intimately, and our vision is clear: to create a Center deeply grounded in the Quran and Sunnah, where youth flourish and adults find solace—a true second home for our cherished Muslim community.</p>
      </div>
      <img src="\src\assets\boypraying.png" class="icon-praying slide-in-blurred-bottom" alt="Al Istiqamah building" />
    </div>
  </div>
</template>

<style scoped>
.slide-top {
  -webkit-animation: slide-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.tracking-in-expand-fwd-bottom {
  -webkit-animation: tracking-in-expand-fwd-bottom 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: tracking-in-expand-fwd-bottom 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

.slide-in-blurred-bottom {
  -webkit-animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}

.slide-in-bottom {
  -webkit-animation: slide-in-bottom .8s ease-out;
  animation: slide-in-bottom .8s ease-out
}

.grid-container {
  @media screen and (min-width: 610px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}

.grid-container3 {
  @media screen and (min-width: 610px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
}

.icon-mosque {
  padding: 5%;
}

.container-one {
  padding: 2% 5%;
}

.content {
  padding: 30px;
  position: relative;
  padding: 2% 5% 2%;
  margin:auto;
}

.content1 {
  background-color: #f1f2e3;
}

.content2 {
  background-color: #bfbdc6;
  color:#000000;
  text-align: center;
  padding: 11% 19%;
}

.content3 {
  background-color: #f1f2e3;
  color: #000000;
  text-align: center;
  padding: 4% 12%;
  position: relative;
}

.para2 {
  font-size: 14px;
  padding: 2% 20%;
}

.block {
  transition: all 0.3s ease;
}

.block:hover {
  transform: translateY(-5px);
}

.mission-icons {
  padding: 10% 30%;
  position: relative;
}

h3 p {
  color: #403b49;
}

p {
  padding: 15px 0;
}

button {
  background-color: #403b49;
}</style>
