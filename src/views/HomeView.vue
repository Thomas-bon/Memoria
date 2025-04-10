<script>

export default {
  data() {
    return {

    };
  },

};

</script>

<template>

  <!-- <div id="testBG"></div> -->

  <img id="bg" src="../assets/pictures/BGhomepage.svg" alt="">

  <img id="logoHome" src="../assets/pictures/logo.svg" alt="Logo de chaussure memoria">

  <div id="brand">
    <div class="View" id="FirstView">
      <RouterLink :to="{ name: 'Shop' }">
        <button id="store"><span>Shop Now</span></button>
      </RouterLink>
    </div>
    <div class="View" id="SecondView">
      <p>TRANSFORMEZ VOS MARATHONS EN SOUVENIRS INOUBLIABLES</p>
    </div>
    <div class="View" id="MotivationSlide">
      <p>TRANSFORMEZ VOS MARATHONS EN SOUVENIRS INOUBLIABLES</p>
    </div>
    <div class="View" id="ThirdView">
      <img src="../assets/pictures/MEMORIA_home_page.svg" alt="">
      <p>Nous créons des t-shirts personnalisés affichant le tracé exact de votre marathon, la date et votre temps,
        pour que vous puissiez porter fièrement votre performance.</p>
    </div>
    <div class="View" id="FourView">
      <h1>Nos engagements</h1>
      <p>Conçus en matière technique respirante et confortable, nos t-shirts allient style et performance. 
        Avec Mémoria, chaque course devient un souvenir à afficher et une fierté à porter.</p>
    </div>
  </div>
</template>

<style>@font-face {
  font-family: "MonoManiac One";
  src: url(../assets/font/MonomaniacOne-Regular.ttf);
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

.View {
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 5;
}

#FirstView {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5%;
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
  transition: color 0.3s ease;
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
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10%;
}

#SecondView p {
  position: relative;
  font-size: 100px;
  text-align: center;
  z-index: 5;
  font-family: "MonoManiac One";
  font-style: italic;
  color: white;
  opacity: 80%;
}

#MotivationSlide {
  height: 40vh;
  width: 100vw;
  background-color: black;
}

#ThirdView {
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#ThirdView img {
  height: 45%;
  width: 40%;
}

#ThirdView p {
  font-size: 40px;
  text-align: center;
  width: 60%;
  font-family: "Abel";
}

#FourView {
  height: 80vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 60px;
  align-items: center;
  padding-bottom: 8%;
  font-family: "Abel";
}

#FourView h1 {
  font-size: 7em;
  font-weight: 100;
}

#FourView p {
  font-size: 2em;
  text-align: center;
  width: 70%;
}

#bg {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
  user-select: none;
}

#logoHome {
  position: absolute;
  height: 250px;
  width: 250px;
  z-index: 60;
  top: 23%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#store {
  z-index: 5;
  height: 50px;
  width: 100px;
  position: relative;
}

template {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#brand {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  scroll-margin-top: 0px;
  overflow-x: hidden;
}

</style>
