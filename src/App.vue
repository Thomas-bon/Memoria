<script>
import { RouterLink, RouterView } from 'vue-router'
import navigationBar from './components/Header.vue';
import footerComponent from './components/Footer.vue';

export default {
  components: {
    navigationBar,
    footerComponent,
    RouterLink,
    RouterView
  }
}
</script>

<template>
  <div id="app">
    <header>
      <navigationBar />
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <footerComponent />
    </footer>
  </div>
</template>

<style scoped>
/* Réinitialisation des marges et paddings pour html et body */


/* Assurez-vous que #app occupe toute la hauteur et toute la largeur */
#app {
  display: flex;
  flex-direction: column;
  height: 100%; /* Remplir toute la hauteur de la fenêtre */
  width: 100%;  /* Remplir toute la largeur de la fenêtre */
}

header {
  height: 10%;
  width: 100%;
}

main {
  flex: 1;
  height: 100%;
  width: 100%;
}

footer {
  height: 20%;
  width: 100%;
}
</style>
