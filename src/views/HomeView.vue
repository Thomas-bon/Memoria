<script>
export default {
  data() {
    return {
      mots: ["DISCIPLINE  INSPIRANT", "DÉCOUVERTE  LÉGENDAIRE"],
      motActuel: 0,
    };
  },
  computed: {
    motAffiché() {
      return this.mots[this.motActuel];
    }
  },
  mounted() {
    setInterval(() => {
      this.motActuel = (this.motActuel + 1) % this.mots.length;
    }, 15000);
  },
};
</script>

<template>
  <div id="brand">

    <section class="View" id="FirstView">
    <img id="logoHome" src="../assets/pictures/logo.svg" alt="Logo de chaussure memoria" />

      <RouterLink :to="{ name: 'Shop' }">
        <button id="store"><span>Shop Now</span></button>
      </RouterLink>
    </section>

    <section class="View" id="SecondView">
      <p>TRANSFORMEZ VOS MARATHONS EN SOUVENIRS INOUBLIABLES</p>
    </section>

    <section class="View" id="MotivationSlide">
      <div class="marquee-container">
        <p class="marquee-text" :key="motAffiché">{{ motAffiché }}</p>
      </div>
    </section>

    <section class="View" id="ThirdView">
      <img src="../assets/pictures/MEMORIA_home_page.svg" alt="">
      <p>Nous créons des t-shirts personnalisés affichant le tracé exact de votre marathon, la date et votre temps,
        pour que vous puissiez porter fièrement votre performance.</p>
    </section>

    <section class="View" id="FourView">
      <h1>Nos engagements</h1>
      <p>Conçus en matière technique respirante et confortable, nos t-shirts allient style et performance.
        Avec Mémoria, chaque course devient un souvenir à afficher et une fierté à porter.</p>
    </section>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "MonoManiac One";
  src: url(../assets/font/MonomaniacOne-Regular.ttf);
}

@font-face {
  font-family: "Fight";
  src: url(../assets/font/FIGHTT3_.ttf);
}

@font-face {
  font-family: "Abel";
  src: url(../assets/font/Abel-Regular.ttf);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

#brand {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  background-image: url('../assets/pictures/BGhomepage.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  overflow-x: hidden;
}

.View {
  padding: 25rem 0;
  width: 100%;
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#FirstView {
  justify-content: flex-end;
  padding: 20rem 0;
  
  
}

#FirstView button {
  width: 250px;
  height: 100px;
  background-color: #73020C;
  color: white;
  font-family: "MonoManiac One";
  font-size: 40px;
  border: none;
  overflow: hidden;
  cursor: pointer;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
}

#FirstView button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  transition: left 0.4s ease;
}

#FirstView button:hover::before {
  left: 0;
}

#FirstView button span {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

#FirstView button:hover span {
  color: #73020C;
}

#SecondView {
  padding: 25rem 0;
  z-index: 2;
}

#SecondView p {
  font-size: clamp(2rem, 5vw, 6rem);
  text-align: center;
  font-family: "MonoManiac One";
  font-style: italic;
  color: white;
  opacity: 0.8;
  z-index: 5;
}

#MotivationSlide {
  background-color: #fff;
  border-top: #cecece 8px solid;
  border-bottom: #cecece 8px solid;
  padding: 3rem 0;
  width: 100%;
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100vw;
}

.marquee-text {
  font-size: clamp(4rem, 15vw, 12em);
  font-family: "Fight";
  color: #73020C;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translateX(160%);
  }
  100% {
    transform: translateX(-110%);
  }
}

#ThirdView {
  gap: 2rem;
  text-align: center;
  font-family: "Abel";
  padding: 4rem 0;
}

#ThirdView img {
  max-width: 90%;
  height: auto;
}

#ThirdView p {
  font-size: 1.5rem;
  max-width: 800px;
}

#FourView {
  color: white;
  gap: 2rem;
  text-align: center;
  font-family: "Abel";
  padding: 19rem 0 6rem;
}

#FourView h1 {
  font-size: clamp(3rem, 6vw, 7em);
  font-weight: 100;
}

#FourView p {
  font-size: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

#logoHome {
  position: absolute;
  height: 250px;
  width: 250px;
  z-index: 60;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
