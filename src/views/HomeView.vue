<script>
export default {
  data() {
    return {
      mots: ["DÉCOUVERTE / EXPLOIT / DISCIPLINE"],
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
    </section>

    <div class="HomeStart">
      <section class="View" id="SecondView">
        <p>TRANSFORMEZ VOS MARATHONS EN SOUVENIRS INOUBLIABLES</p>
      </section>

      <RouterLink :to="{ name: 'Shop' }" class="store-link">
        <span>Shop Now</span>
      </RouterLink>
    </div>

    <section class="View" id="MotivationSlide">
      <div class="marquee-container">
        <p class="marquee-text" :key="motAffiché">{{ motAffiché }}</p>
      </div>
    </section>

    <section class="View" id="ThirdView">
      <h1>Nos engagements</h1>
      <p>Nous créons des t-shirts personnalisés <br>affichant le tracé exact de votre marathon,<br> la date et votre
        temps,
        pour que vous puissiez <br>porter fièrement votre performance.</p>
    </section>

    <section class="View" id="FourView">
      <div class="img-positions">
        <div id="confort">
          <img src="../assets/pictures/confort_logo.png" alt="">
        </div>
        <div id="leger">
          <img src="../assets/pictures/leger_logo.png" alt="">
        </div>
        <div id="performant">
          <img src="../assets/pictures/performant_logo.png" alt="">
        </div>
      </div>
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


@font-face {
  font-family: "Inter";
  src: url(../assets/font/Inter_18pt-ExtraBold.ttf);
}

@font-face {
  font-family: "InterRegular";
  src: url(../assets/font/Inter_18pt-Regular.ttf);
}

@font-face {
  font-family: "InterSemiBold";
  src: url(../assets/font/Inter_18pt-SemiBold.ttf);
}

@font-face {
  font-family: "InterMedium";
  src: url(../assets/font/Inter_18pt-Medium.ttf);
}

@font-face {
  font-family: "InterLight";
  src: url(../assets/font/Inter_18pt-Light.ttf);
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
  padding: 20rem 0 10rem 0;


}

.store-link {
  width: 250px;
  height: 100px;
  background-color: #73020C;
  color: white;
  font-family: "MonoManiac One";
  font-size: 40px;
  border: none;
  overflow: hidden;
  cursor: pointer;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  /* Enlève le soulignement */
  position: relative;
}

.store-link::before {
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

.store-link:hover::before {
  left: 0;
}

.store-link span {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

.store-link:hover span {
  color: #73020C;
}


.HomeStart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  transform: translateY(-50%);
  margin-top: 170px;
}

#SecondView {
  padding: 0 0 1.5rem 0;
  z-index: 2;
}

#SecondView p {
  font-size: clamp(2rem, 3.3vw, 6rem);
  text-align: center;
  font-family: "InterSemiBold";
  font-style: italic;
  color: #FFFFFF;
  opacity: 0.66;
  z-index: 5;
  text-shadow:
    1px 1px 0 #000,
    2px 2px 0 #000,
    3px 3px 0 #000,
    4px 4px 0 #000;
}

#MotivationSlide {
  background-color: #fff;
  border-top: #cecece 8px solid;
  border-bottom: #cecece 8px solid;
  padding: 1rem 0;
  width: 100%;
  transform: translateY(110%);

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
  font-family: "Inter";
  color: #000;
  white-space: nowrap;
  animation: marquee 30s linear infinite;
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translateX(40%);
  }

  100% {
    transform: translateX(-110%);
  }
}

#ThirdView {
  gap: 2.3rem;
  text-align: center;
  font-family: "Abel";
  padding: 4rem 0;
}

#ThirdView img {
  max-width: 90%;
  height: auto;
}

#ThirdView h1 {
  font-family: "InterSemiBold";
  font-size: 3.7em;
  padding-top: 275px;
}

#ThirdView p {
  font-size: 2.1em;
  max-width: 800px;
  font-family: "InterRegular";
  line-height: 1.7;
}

.img-positions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 55px;
}

#confort,
#performant {
  margin-bottom: 155px;
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
