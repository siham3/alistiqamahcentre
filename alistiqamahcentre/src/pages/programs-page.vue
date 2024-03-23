<template>
  <div>
    <main class="content-container">
      <h1 class="page-title slide-in-blurred-bottom">Programs</h1>
      <h2 class="program-title slide-in-blurred-bottom">
        RAMADAN <br />
        QURAN READING COMPETITION 2024
      </h2>
      <div class="centre-image"></div>
      <p class="program-description">
        Al Istiqamah Centre is proud to announce the 1st annual Ramadan Quran Completion
        competition! We are excited to present this incredible opportunity for friendly competition,
        exciting prizes and most importantly: countless reward from Allah(SWT)! Make this your most
        beautiful Ramadan yet by connecting with the words of Allah(SWT) in a way you never have
        before!
        <br /><br />
        <span class="quran-verse">"It was in the month of Ramadan that the Quran was revealed as guidance for mankind,
          clear messages giving guidance and distinguishing between right and wrong." (Al Baqarah,
          2:185)
        </span>
      </p>
      <h2 class="program-title slide-in-blurred-bottom">
        BOYS LEADERBOARD
      </h2>
      <p>Date: 2024-04-30</p>
     <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th v-for="item in table" scope="col" class="px-6 py-3">
                    {{item}}
                </th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in Boys" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ index }}
            </th>
            <td v-for="item in data" class="px-6 py-4">
              {{ item }}
                </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="program-title slide-in-blurred-bottom">
        GIRLS LEADERBOARD
      </h2>
      <p>Date: 2024-04-30</p>
      
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th v-for="item in table" scope="col" class="px-6 py-3">
                    {{ item }}
                </th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in Girls" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ index }}
            </th>
            <td v-for="item in data" class="px-6 py-4">
              {{ item }}
                </td>
          </tr>
        </tbody>
      </table>
    </div>
    </main>
  </div>
</template>
<script lang="ts" setup>

const table = 
  ['Rank', 'Team', 'Juz Count', 'Quran Completion'];

const Boys = {
  '1st': ['Abdullah', '273', '9.1'],
  '2nd': ['Amiin', '183.6', '6.1'],
  '3rd': ['Amrani', '168.8', '5.9'],
  '4th': ['Barento', '165.8', '5.6'],
  '5th': ['Mustafa', '178.1', '5.5'],
  '6th': ['Makahil', '159.6', '5.3']
};
const Girls = {
  '1st': ['S.Elmi', '337.4', '11.2'],
  '2nd': ['A.Said', '219.3', '7.3'],
  '3rd': ['H.Madar', '197.5', '6.6'],
  '4th': ['H.Bakal', '136.8', '4.6'],
  '5th': ['M.Abdulfatah', '133.7', '4.5'],
  '6th': ['A.Good', '103.4', '3.4']
};
</script>

<style scoped>
.program-page {
  background-color: #fdfaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
}

.page-title {
  color: #bd925d;
  text-align: center;
  letter-spacing: -3.84px;
  font:
    400 96px/100% Belleza,
    sans-serif;
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
  font:
    36px/36px Belleza,
    sans-serif;
}

@media (max-width: 991px) {
  .program-title {
    margin-top: 30px;
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
  font:
    400 20px/25px Source Serif Pro,
    sans-serif;
}

@media (max-width: 991px) {
  .program-description {
    margin-top: 40px;
  }
}
.quran-verse {
  color: rgba(189, 146, 93, 1);
}

p{
  text-align: center;
}

table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
</style>
