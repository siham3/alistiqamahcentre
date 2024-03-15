<template>
<div>
    <main class="content-container">
    <h1 class="page-title slide-in-blurred-bottom">Programs</h1>
    <h2 class="program-title slide-in-blurred-bottom">RAMADAN KHATMAH 2024</h2>
    <div class="centre-image"></div>
    <p class="program-description">
      Al Istiqamah Centre is proud to announce the 1st annual Ramadan Quran Completion competition! We are excited to
      present this incredible opportunity for friendly competition, exciting prizes and most importantly: countless
      reward from Allah(SWT)! Make this your most beautiful Ramadan yet by connecting with the words of Allah(SWT) in a
      way you never have before!
      <br /><br />
      <span class="quran-verse"
        >"It was in the month of Ramadan that the Quran was revealed as guidance for mankind, clear messages giving
        guidance and distinguishing between right and wrong." (Al Baqarah, 2:185)
      </span>
    </p>
</main>
</div>
</template>


<style scoped>
.program-page {
  background-color: #fdfaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
}

.page-title {
  color: #BD925D;
  text-align: center;
  letter-spacing: -3.84px;
  font: 400 96px/100% Belleza, sans-serif;
}

@media (max-width: 991px) {
  .page-title {
    margin-top: 40px;
    font-size: 40px;
  }
}

.content-container {
    align-self: center;
    margin: 8% auto 0;
    width: 100%;
    max-width: 1162px;
    flex-direction: column;
    font-weight: 700;
    padding: 0 20px;
}

.program-title {
  color: #222;
  text-align: center;
  margin-top: 58px;
  font: 36px/36px Belleza, sans-serif;
}

@media (max-width: 991px) {
  .program-title {
    margin-top: 40px;
    font-size: 40px;
  }
}

.centre-image {
    object-position: center;
    width: 100%;
    border-bottom: 2px solid #4d4d4d;
    padding: 5%;
  }

@media (max-width: 991px) {
  .program-image {
    margin-top: 40px;
  }
}

.program-description {
  color: #3e3e3e;
  text-align: center;
  margin: 5% 5%;
  font: 400 20px/25px Source Serif Pro, sans-serif;
}

@media (max-width: 991px) {
  .program-description {
    margin-top: 40px;
  }
}

.quran-verse {
  color: rgba(189, 146, 93, 1);
}
</style>