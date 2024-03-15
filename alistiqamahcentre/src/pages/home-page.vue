<template>
  <div>
    <!-- <img src="\src\assets\pattern_left.png" class="left-star" alt="Star design" />
    <img src="\src\assets\pattern_right.png" class="right-star" alt="Star design" /> -->
    <div class="content1 container-one mx-auto">
      <div class="content">
        <h1 class="mb-2 text-8xl tracking-tight dark:text-white">
          Al Istiqamah
        </h1>
        <p>
          قل: آمنت بالله ثم استقم
          <br />
          Say "I believe in Allah" — and then be steadfast.”</p>
        <div id="LearnMoreButton">
          <router-link
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          to="/About">Learn More</router-link>
        </div>
      </div>
    </div>
    <div class="content2">
      <div class="page-blocks">
        <h1 class="mb-2 text-5xl tracking-tight dark:text-white">
          About us
        </h1>
        <h2>
          بسم الله الرحمن الرحيم
        </h2>
        <p>
          We are a youth-led organization that came together in hopes of serving our community in a meaningful way. After realizing the needs of our growing Muslim population, we came together with one vision.
          <br />
To create a centre deeply grounded in the Qur’an and Sunnah, where youth flourish and adults find solace - a true second home for our cherished community where they may unite, learn, play, grow and find confidence in their Islamic identity.
        </p>
      </div>
    </div>
    <div class="content4">
      <img src="/src/assets/shadow_moon.png" alt="">
      <div class="page-blocks color-block ">
        <h1 class="mb-2 text-5xl tracking-tight dark:text-white">
        
   
          is·ti·qa·mah </h1>
          <h2>
 /استقامة/    
</h2>    
        <p>
          to go straight into the right path, acting rightly, allowing no deviation. It is from the identical root that the phrase mustaqeem is derived (i.e sitar-al-mustaqeem - the straight path.) It may be translated as ‘steadfastness’.
        </p>
      </div>
    </div>
    <div class="content3">
      <img class="scribble" src="\src\assets\scribble.png" alt="scribble" />
      <h1 id="OurMission" class="mb-2 text-5xl tracking-tight dark:text-white">What Is Our Mission?</h1>
      <p class="font-normal para2">At Al Istiqamah, our mission is to bring together Muslims of all ages and encourage them to uphold their Islamic values and strengthen their unique identities in the modern world. </p>
      <div>
        <ul class="grid-container3">
          <li>
            <img src="\src\assets\crescent-moon.png" class="mission-icons" alt="belonging" />
            <h2 class="mb-2 text-1xl font-bold tracking-tight dark:text-white">Belonging</h2>
            <p>Create a sense of belonging by building stronger bonds and fostering dialogue among individuals of all
              generations.
            </p>
          </li>
          <li>
            <img src="\src\assets\shalat.png" class="mission-icons" alt="Unity" />
            <h2 class="mb-2 text-1xl font-bold tracking-tight dark:text-white">Unity</h2>
            <p> Bridge the gap between the generations, creating a cohesive environment that promotes understanding and
              connectedness.</p>
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
    <!-- <div class="content1 content grid-container">
      <div class="content">
        <h1 class="mb-2 text-3xl font-bold tracking-tight dark:text-white">Our Programs</h1>
        <p class="font-normal">Our local, youth-driven team knows the community intimately, and our vision is clear: to
          create a Center deeply grounded in the Quran and Sunnah, where youth flourish and adults find solace—a true
          second home for our cherished Muslim community.</p>
      </div>
      <img src="\src\assets\boypraying.png" class="icon-praying slide-in-blurred-bottom" alt="Al Istiqamah building" />
    </div> -->
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
  padding: 2%;
  margin: auto;
  background-image: url('/src/assets/pattern_right.png'), url('/src/assets/pattern_left.png');
  background-repeat: no-repeat, no-repeat;
  background-position: right 170%, left 0%;
  background-size: 25%;
  @media (max-width: 924px) {
    background-image: none;
  };
}

.content {
  position: relative;
  padding: 2% 5%;
  margin: 5%;
}


.content1 h1, p{
  color: #BD925D;
  font-family: Belleza;
  text-align:center;
}

.content1 p{
  font-size: 33px;
  padding: 2%;
  text-align:center;
  @media (max-width: 486px) {
    font-size: 25px;
    color: #4D4D4D;
    padding: 5% 0 15%;
  }
}
.content1 h1{
  padding: 0 0 25px 0;
  @media (max-width: 991px) {
    font-size: 40px;
    padding: 0 0 10px 0;
  }
}
.content1 #LearnMoreButton{
  position: relative;
  text-align:center;
  margin: 6% 2% 2%;
}

.content2 {
  color: #000000;
  text-align: center;
  padding: 0 10% 0;
  @media (max-width: 991px) {
    padding: 10% 5% 5%;
  }
}

.content2 p{
  color:#4D4D4D;
  font: 400 18px/23px Belleza, sans-serif;
  text-align: left;
  padding: 6% 8%;
  line-height: 1.6;
  @media (max-width: 991px) {
    text-align: center;
    justify-content: center;
  }
}

.content2 h1 {
  color: #000000;
  font-family: Belleza;
}

.content2 h2{
  font-size: 25px;
}

.content3 {
  color: #000000;
  text-align: center;
  padding: 8% 12%;
  position: relative;
}

.content3 p{
  color:#4D4D4D;
  line-height: 1.6;
 font: 400 18px/23px Belleza, sans-serif;
}

.scribble{
  position: absolute;
  bottom: 68%;
  left: 58%;
  z-index: 999;
  height:40%;
  @media (max-width: 920px) {
    display: none;
  }
}

.color-block{
  background-color: #f1f2e3;
  color: #000000;
  text-align: center;
  padding: 4% 12%;
  z-index: 0;
} 

.content4{
  text-align: center;
  padding: 4% 12%;
  position:relative;
}

.content4 h1{
  @media (max-width: 924px) {
    font-size: 40px;
  }
}

.content4 p
{
  color:#000000;
  padding: 1% 5%;
}

.content4 img{
  position: absolute;
  top: 47%;
  right: 75%;
  z-index: 999;
  @media (max-width: 924px) {
    top: 60%;
    right: 75%;
    height: 35%;
  }
}

.para2 {
  padding: 4% 5%;
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

h2{
  font-size: 23px;
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
