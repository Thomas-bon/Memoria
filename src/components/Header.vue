<template>
  <header>
    <div class="BarHead">
      <div class="alignHeader">
        <div id="logo">
          <RouterLink :to="'/#brand'">
            <img id="memoriaLogo" src="./Icons/logo.png" alt="">
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
              <h1>Contact</h1>
            </RouterLink>
          </div>
        </div>
        <div id="shopLogo">
          <RouterLink :to="{ name: 'Shopping' }">
            <img id="shopBag" src="./Icons/shopLogo.svg" alt="">
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
header {
  background-color: green;
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
  gap: 380px;
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
  height: 55px;
  width: 55px;
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
  color: white;
  font-size: 1em;
}
</style>
