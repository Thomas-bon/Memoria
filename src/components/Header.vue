<template>
  <header>
    <div class="BarHead">
      <div class="alignHeader">
        <div id="logo">
          <RouterLink :to="'/#brand'">
            <img id="memoriaLogo" src="./Icons/logo2.svg" alt="">
          </RouterLink>
        </div>
        <div class="linksAlign">
          <div id="boutique">
            <RouterLink :to="{ name: 'Shop' }">
              <h1>Boutique</h1>
            </RouterLink>
          </div>
          <div id="About">
            <RouterLink :to="'/#about'">
              <h1>About</h1>
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
            <img id="shopBag" src="./Icons/panierLogo.svg" alt="">
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    // Vous pouvez conserver cette méthode si vous voulez des comportements supplémentaires, mais elle n'est pas nécessaire avec le `RouterLink`
    scrollToAbout() {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToContact() {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');

.paytone-one-regular {
  font-family: "Paytone One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

header {
  background-color: #F8F4F4;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  z-index: 20;
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
  gap: 340px;
}

.linksAlign {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 125px;
}

img {
  height: 75px;
  width: 75px;
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

#shopBag {
  height: 45px;
  width: 45px;
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
  color: #000000;
  font-size: 1em;
  font-family: "Paytone One", sans-serif;
}
</style>
