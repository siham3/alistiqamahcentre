<template>
    <main class="content-container">
      <header class="header">
        <h1 class="header-title">About us</h1>
      </header>
      <section class="intro-section">
        <p class="intro-text">
          In the name of Allah, <br> The Most Beneficent, The Most Merciful
        </p>
      </section>
      <div class="centre-image"></div>
      <section class="vision-statement">
        
        <article class="about-description">
          <p>
            Our journey began with a vision nurtured by young minds, for the muslim community. We understand the importance of fostering an environment where people from all walks of life can connect with their faith, culture, and community. Our doors are open to muslim individuals of all ages and races, as we believe that diversity enriches our collective experience.
          </p><br><p> 
Al Istiqamah Islamic Centre serves as a sanctuary for spiritual growth, a hub for knowledge exchange, and a place where hearts find solace in the remembrance of Allah. We invite you to join our vibrant and welcoming muslim community, where you can strengthen your iman(faith), forge lasting bonds, and contribute to the betterment of society. 
          </p><br><p>
Come and be part of our Al Istiqamah family, where we walk the path of righteousness, side by side, without deviation. 

          </p>
        </article>
      </section>
      <!-- <button class="donate-button">DONATE</button> -->
    </main>
  </template>
  
  <style scoped>
  .content-container {
    align-self: center;
    display: flex;
    margin: 8% auto 0;
    width: 100%;
    max-width: 1162px;
    flex-direction: column;
    font-weight: 700;
    padding: 0px 20px 20px;
  }
  @media (max-width: 991px) {
    .content-container {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .header-title {
    color: #BD925D;
    font-family: Belleza;
   text-align:center;
    text-align: center;
    letter-spacing: -3.84px;
    font: 96px/100% Belleza, sans-serif;
  }
  @media (max-width: 991px) {
    .header-title {
      font-size: 40px;
    }
  }
  .intro-text {
    color: #000;
    text-align: center;
    letter-spacing: -1.44px;
    margin-top: 50px;
    font: 36px/36px Belleza, sans-serif;
  }
  @media (max-width: 991px) {
    .intro-text {
      margin-top: 40px;
      margin: 1%;
    }
  }
  .centre-image {
    object-position: center;
    width: 100%;
    border-bottom: 2px solid #4d4d4d;
    padding: 5%;
  }
  
  .section-title {
    color: #222;
    margin: 67px 0 0 26px;
    font: 400 64px/50% Belleza, sans-serif;
  }
  @media (max-width: 991px) {
    .section-title {
      font-size: 40px;
    }
  }
  .about-description {
    color: #555;
    margin-top: 8%;
    font: 400 20px/25px Source Serif Pro, sans-serif;
    padding: 0 50px;
  }
  /* .donate-button {
    justify-content: center;
    border-radius: 8px;
    box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.25);
    border: 2px solid rgba(0, 0, 0, 1);
    background-color: #000;
    color: #fff;
    margin: 29px 0 0 78px;
    padding: 22px 35px;
    font: 14px/160% Montserrat Alternates, sans-serif;
    cursor: pointer;
  }
  @media (max-width: 991px) {
    .donate-button {
      margin-left: 10px;
      padding: 22px;
    }
  } */
  </style>