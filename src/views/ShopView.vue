<script>
export default {
  data() {
    return {
      showPopup: true,
    };
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    }
  }
}
</script>


<template>

  <div class="Container">

    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-content">
        <img @click="closePopup" id="crossClosePopup" src="../components/Icons/croix.svg" alt="">
        <div class="text-popup">
          <h1>Jusqu'à 20% sur ta <br>commande</h1>
          <p>Découvrez notre mini-jeu exclusif <br> et tentez de remporter une <br> réduction personnalisée.</p>

          <RouterLink :to="{ name: 'Game' }">
            <button id="playGameButton"><span>Jouer</span></button>
          </RouterLink>
        </div>
        <div class="imgTshirt">
          <img id="popUpTshirt" src="../assets/pictures/tshirt/popUp_tshirt.png" alt="">
        </div>
      </div>
    </div>

    <div id="title">
      <h1>BOUTIQUE</h1>
    </div>

    <img id="tshirtperch" src="../assets/pictures/tshirtperch.png" alt="">
    <RouterLink :to="{ name: 'Product', params: { id: 'default-black' } }">
      <div class="text-top-left">
        T-shirt personnalisé<br>
        ↳ découvrir
      </div>
    </RouterLink>
    <div class="text-center">
      fixez vos<br>
      exploits sur la<br>
      <div id="shiftWord">
        toile
      </div>
    </div>

    <!-- <RouterLink :to="{ name: 'Game' }">
      <div class="text-link-game">
        <p>↳ Jeu Concours</p>
      </div>
    </RouterLink> -->

    <div id="title2">
      <h1>LES PARCOURS LES PLUS ÉDITÉS</h1>
    </div>

    <div class="GridProducts">

      <div class="descAnnecy">

        <div id="txt">
          T-shirt tracé du <br>marathon d’Annecy
        </div>
        <div id="imgAnnecy">
          <img src="../assets/pictures/annecyImg.svg" alt="">
        </div>

      </div>

      <div class="tshirtsAnnecy">

        <div id="tshirtAnnecyBlack">
          <RouterLink :to="{ name: 'Product', params: { id: 'annecy-black' } }">
            <div id="Personalize">
              ↳ Voir le produit
            </div>
          </RouterLink>
          <img src="../assets/pictures/tshirt/tshirt_annecy_default_black_1.png" alt="">
          <div id="Price">
            €40
          </div>
        </div>

        <div id="tshirtAnnecyWhite">
          <RouterLink :to="{ name: 'Product', params: { id: 'annecy-white' } }">
            <div id="Personalize">
              ↳ Voir le produit
            </div>
          </RouterLink>
          <img src="../assets/pictures/tshirt/tshirt_annecy_default_white_1.png" alt="">
          <div id="Price">
            €40
          </div>
        </div>
      </div>


      <div class="descSeville">

        <div id="txt">
          T-shirt tracé du <br> marathon de Seville
        </div>
        <div id="imgSeville">
          <img src="../assets/pictures/sevilleImg.svg" alt="">
        </div>

      </div>

      <div class="tshirtsSeville">

        <div id="tshirtSevilleBlack">
          <RouterLink :to="{ name: 'Product', params: { id: 'seville-black' } }">
            <div id="Personalize">
              ↳ Voir le produit
            </div>
          </RouterLink>
          <img src="../assets/pictures/tshirt/tshirt_seville_default_black_1.png" alt="">
          <div id="Price">
            €40
          </div>
        </div>

        <div id="tshirtSevilleWhite">
          <RouterLink :to="{ name: 'Product', params: { id: 'seville-white' } }">
            <div id="Personalize">
              ↳ Voir le produit
            </div>
          </RouterLink>
          <img src="../assets/pictures/tshirt/tshirt_seville_default_white_1.png" alt="">
          <div id="Price">
            €40
          </div>
        </div>

      </div>

    </div>


  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Inter ExtraBold';
  src: url('../assets/font/Inter_18pt-ExtraBold.ttf');
}

@font-face {
  font-family: 'Inter SemiBold';
  src: url('../assets/font/Inter_18pt-SemiBold.ttf');
}

@font-face {
  font-family: 'Abel';
  src: url('../assets/font/Abel-Regular.ttf');
}

* {
  box-sizing: border-box;
}

h1 {
  color: #010101;
}

template {
  height: 90vh;
  width: 100%;
}

.Container {
  margin-top: 10vh;
  width: 100%;
}


.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  display: flex;
  flex-direction: row;
  background-color: #DCEFFA;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Abel';

  position: relative;
}

#crossClosePopup {
  position: absolute;
  margin: 0;
  top: 20px;
  left: 20px;
  cursor: pointer;
}

.text-popup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 90px;
  padding: 40px;
}

.text-popup h1 {
  font-size: 2.5em;
  font-family: 'Inter ExtraBold';
  color: #000000;
  margin: 0;
}

.text-popup p {
  font-size: 2.1em;
  font-family: 'Abel';
  color: #000000;
  margin: 0;
  line-height: 1.7;
}

#playGameButton {
  padding: 20px 100px;
  background-color: #73020C;
  color: white;
  font-family: "MonoManiac One";
  font-size: 2.8em;
  border: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 1;

  /* Centrage */
  display: flex;
  align-items: center;
  justify-content: center;
}


#playGameButton::before {
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

#playGameButton:hover::before {
  left: 0;
}

#playGameButton span {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

#playGameButton:hover span {
  color: #73020C;
}

#popUpTshirt {
  width: 100%;
  height: 100%;
}


#title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3em;
  margin-top: 105px;
  height: 17vh;
  background-color: #8AA7AE4D;
  font-family: 'Inter ExtraBold';
}

#title2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  margin-top: 85vh;
  height: 19vh;
  background-color: #8AA7AE4D;
  font-family: 'Inter SemiBold';

}

#tshirtperch {
  position: absolute;
  width: 100%;
  height: auto;
  max-height: 85%;
}

.text-top-left {
  position: absolute;
  top: 300px;
  left: 32px;
  color: #000;
  font-size: 2.1em;
  text-transform: uppercase;
  line-height: 1.4;
  font-family: 'Monomaniac One';
}

.text-center {
  position: absolute;
  top: 83%;
  left: 47%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 2.9em;
  text-align: center;
  line-height: 1.2;
  white-space: nowrap;
  font-family: 'Abel';
}

/* .text-link-game {
  position: absolute;
  top: 105%;
  left: 8.5%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  color: #000000;
  font-family: 'Monomaniac One';
  font-size: 1.8em;
} */


#shiftWord {
  margin-left: 215px;
}

.descAnnecy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#txt {
  font-size: 1.9em;
  font-family: 'Monomaniac One';
  color: #000000;
}

#imgAnnecy {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.descSeville {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

}

#imgSeville {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

#tshirtAnnecyBlack > img,
#tshirtAnnecyWhite > img,
#tshirtSevilleBlack > img,
#tshirtSevilleWhite > img {
  height: 283px;
  width: auto;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#tshirtAnnecyBlack,
#tshirtAnnecyWhite,
#tshirtSevilleBlack,
#tshirtSevilleWhite {
  width: 360px;
  height: 383px;

  position: relative;
}

.tshirtsAnnecy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

#tshirtAnnecyBlack {
  background-color: #A8BFCA;
}

/* #tshirtAnnecyBlack>img {
  height: 283px;
  width: 374px;
  padding: 20px;
} */

#tshirtAnnecyWhite {
  background-color: #704347;
}

/* #tshirtAnnecyWhite>img {
  height: 283px;
  width: 374px;
  padding: 20px;
} */

.tshirtsSeville {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

#tshirtSevilleBlack {
  background-color: #A8BFCA;
}

/* #tshirtSevilleBlack>img {
  height: 283px;
  width: 374px;
  padding: 20px;
} */

#tshirtSevilleWhite {
  background-color: #704347;
}

/* #tshirtSevilleWhite>img {
  height: 283px;
  width: 374px;
  padding: 20px;
} */


.GridProducts {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #8AA7AE4D;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
}

#Personalize {
  margin-top: 15px;
  padding-left: 4%;
  font-size: 1.5em;
  color: #000000;
  text-transform: uppercase;
  font-family: 'Monomaniac One';
}

#Price {
  display: block;
  padding-left: 80%;
  padding-bottom: 3%;
  font-size: 1.5em;
  color: #FFFFFF;
  font-family: 'Monomaniac One';
}

a {
  text-decoration: none;
}
</style>
