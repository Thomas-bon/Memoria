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
    <div id="MotivationSlide">
      <p>TRANSFORMEZ VOS MARATHONS EN SOUVENIRS INOUBLIABLES</p>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "MonoManiac One";
  src: url(../assets/font/MonomaniacOne-Regular.ttf);
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
  height: 90vh;
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
  height: 35vh;
  width: 100vw;
  background-color: black;
  position: relative;
  z-index: 5;
}

#bg {
  width: 100%;
  height: auto;
  /* hauteur automatique selon la largeur */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
  user-select: none;
}

#logoHome {
  position: absolute;
  height: 100px;
  width: 250px;
  height: 250px;
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
  min-height: 100vh;
  width: 100%;
  scroll-margin-top: 0px;
  /* overflow-y: visible; */
  overflow-x: hidden;
}

#about {
  /* background-color: red; */
  height: 90vh;
  width: 100%;
  padding-right: 2%;
  padding-left: 2%;
  scroll-margin-top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}

#tshirts {
  width: 60%;
  height: 80%;
  /* background-color: aqua; */
  z-index: 10;

  display: flex;
}

.tshirt {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease-in-out;
  cursor: pointer;
}

#tshirt2 {
  background-image: url(../assets/pictures/tshirt/tshirt_seville_2.svg);
  width: 42%;
}

#tshirt2:hover {
  background-image: url(../assets/pictures/tshirt/tshirt_seville_2_dos.svg);

}

#tshirt1:hover {
  background-image: url(../assets/pictures/tshirt/tshirt_seville_1_dos.svg);

}

#tshirt1 {
  background-image: url(../assets/pictures/tshirt/tshirt_seville_1.svg);
  width: 58%;
}

#contact {
  /* background-color: red; */
  height: 90vh;
  width: 100%;
  padding-right: 2%;
  padding-left: 2%;

  display: flex;
  justify-content: center;
  align-items: center;

}

#contactForm {
  /* margin-top: 5%; */
  position: relative;
  height: 60%;
  width: 60%;
  /* background-color: blue; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
}

textarea {
  width: 80%;
  height: 100px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
}
</style>
