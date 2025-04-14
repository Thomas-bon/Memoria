<script>

</script>


<template>
  
  <div class="Container">
    <div id="title">
      <h1>BOUTIQUE</h1>
    </div>

    <img id="tshirtperch" src="../assets/pictures/tshirtperch.svg" alt="">
    <RouterLink :to="{ name: 'Product' }">
      <div class="text-top-left">
        T-shirt personnaliser<br>
        ↳ découvrir
      </div>
    </RouterLink>
    <div class="text-center">
      fixez vos<br>
      exploit sur la<br>
      <div id="shiftWord">
        toile
      </div>
    </div>

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
          <div id="Personalize">
            ↳ Voir le produit
          </div>
          <img src="../assets/pictures/tshirt/tshirt_annecy_ black_1.svg" alt="">
          <div id="Price">
            €40
          </div>
        </div>

        <div id="tshirtAnnecyWhite">
          <div id="Personalize">
            ↳ Voir le produit
          </div>
          <img src="../assets/pictures/tshirt/tshirt_annecy_white_1.svg" alt="">
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
          <div id="Personalize">
            ↳ Voir le produit
          </div>
          <img src="../assets/pictures/tshirt/tshirt_seville_black_1.svg" alt="">
          <div id="Price">
            €40
          </div>
        </div>

        <div id="tshirtSevilleWhite">
          <div id="Personalize">
            ↳ Voir le produit
          </div>
          <img src="../assets/pictures/tshirt/tshirt_seville_white_1.svg" alt="">
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

*{
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
  width: 100vw;
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
  margin-top: 805px;
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

#tshirtAnnecyBlack > img{
  height: 283px;
  width: 374px;
  padding: 20px;
}

#tshirtAnnecyWhite {
  background-color: #704347;
}

#tshirtAnnecyWhite > img{
  height: 283px;
  width: 374px;
  padding: 20px;
}

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

#tshirtSevilleBlack > img{
  height: 283px;
  width: 374px;
  padding: 20px;
}

#tshirtSevilleWhite {
  background-color: #704347;
}

#tshirtSevilleWhite > img{
  height: 283px;
  width: 374px;
  padding: 20px;
}


.GridProducts {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #8AA7AE4D;
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
