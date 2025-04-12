<template>
  <header :class="{ HomePageHeader: isHomePage, AllOfOthersPageHeader: !isHomePage }">
    <div class="BarHead">
      <div class="alignLine">
      <div class="alignHeader">
        <div id="logo">
          <RouterLink :to="'/#brand'">
            <img v-if="isHomePage" id="memoriaLogo" src="./Icons/logoWhite.svg" alt="">
            <img v-else id="memoriaLogo" src="./Icons/logoBlack.svg" alt="">
          </RouterLink>
        </div>
        <div class="linksAlign">
          <div id="boutique">
            <RouterLink :to="{ name: 'Shop' }">
              <h1>Découvrir les T-Shirts</h1>
            </RouterLink>
          </div>
          <div id="About">
            <RouterLink :to="{ path: '/', hash: '#ThirdView' }">
              <h1>Notre Mission</h1>
            </RouterLink>
          </div>
          <div id="Contacts">
            <RouterLink :to="'/#contact'">
              <h1>Contacts</h1>
            </RouterLink>
          </div>
        </div>
        <div id="shopLogo">
          <RouterLink :to="{ name: 'Shopping' }">
            <img v-if="isHomePage" id="shopBag" src="./Icons/panierLogoBlanc.svg" alt="">
            <img v-else id="shopBag" src="./Icons/panierLogoBlack.svg" alt="">
          </RouterLink>
        </div>
      </div>
      <div id="line" v-if="!isHomePage"></div>
    </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from 'vue-router'


export default {
  computed: {
    isHomePage() {
      return this.$route.name === 'home'
    }
  }
};
</script>

<style scoped>

@font-face {
  font-family: 'Monomaniac One';
  src: url('../assets/font/MonomaniacOne-Regular.ttf');
} 

header {
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  z-index: 200;
  transition: background-color 0.5s ease-in-out;
}

.HomePageHeader {
  background: linear-gradient(#000000, 60%, transparent);
  color: #FFFFFF;
}

.AllOfOthersPageHeader {
  background-color: #FFFFFF;
  color: #000000;

}

.HomePageHeader a {
  color: white; 
}

.AllOfOthersPageHeader a {
  color: black; 
}

.HomePageHeader h1, .AllOfOthersPageHeader h1 {
  color: inherit; 
}



.BarHead {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.alignHeader {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 240px;
}

.linksAlign {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 125px;
}

img {
  height: 195px;
  width: 195px;
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

#shopBag {
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#memoriaLogo {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;
  font-size: 2em;
}

h1 {
  font-size: 0.8em;
  font-weight:100;
  font-family: 'Monomaniac One';
  
}

#line {
  width: 100%;
  height: 1px;
  background-color: #000000;
  transform: translateY(-50px);
}

.alignLine {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}
</style>
