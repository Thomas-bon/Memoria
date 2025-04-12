<template>
    <div class="wrapper">
        <div id="alignTshirt">
            <div id="tshirt">
                <div class="navtshirt">
                    <div class="nav-btn">
                        <img src="../assets/pictures/arrow_left.svg" alt="" />
                    </div>
                    <p>Avant</p>
                </div>

                <div class="shirt-container">
                    <img src="/src/assets/pictures/TshirtImg.svg" alt="T-shirt" />
                </div>

                <div class="navtshirt">
                    <div class="nav-btn">
                        <img src="../assets/pictures/arrow_right.svg" alt="" />
                    </div>
                    <p>Arrière</p>
                </div>
            </div>
        </div>

        <div id="alignOptions">
            <div id="options">
                <!-- COULEUR -->
                <div v-if="!showColorClicked" class="option" id="color" @click="toggleColor">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/color_button.svg" alt="">
                    </div>

                    <p>Couleur</p>
                </div>
                <!-- ///////////////////////////////////////////////////////////////////////////// -->
                <div v-else class="option" id="colorClicked" ref="colorClicked">
                    <div class="illustrationOptionsClicked">
                        <img src="../assets/pictures/color_button.svg" alt="">

                        <p>Couleur</p>
                    </div>
                    <div class="illustrationOptionsClicked">
                        <img src="../assets/pictures/color_button.svg" alt="">
                    </div>
                    <div class="illustrationOptionsClicked">
                        <img src="../assets/pictures/color_button.svg" alt="">
                    </div>

                </div>
                <!-- CHRONO -->
                <div class="option" id="chrono">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/chrono_button.svg" alt="">
                    </div>

                    <p>Chrono</p>
                </div>
                <!-- ///////////////////////////////////////////////////////////////////////////// -->
                <!-- <div class="option" id="chrono">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/chrono_button.svg" alt="">
                    </div>

                    <p>Chrono</p>
                </div> -->
                <!-- PARKOUR -->
                <div class="option" id="parkour">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/parkour_button.svg" alt="">
                    </div>

                    <p>Tracé</p>
                </div>
                <!-- ///////////////////////////////////////////////////////////////////////////// -->
                <!-- <div class="option" id="parkour">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/parkour_button.svg" alt="">
                    </div>

                    <p>Tracé</p>
                </div> -->
                <!-- IMPRESSION -->
                <div id="embroidery">
                    <p>Impression</p>
                    <label class="switch">
                        <input type="checkbox" v-model="isChecked" />
                        <span class="slider"></span>
                    </label>
                    <p>Broderie</p>
                </div>
            </div>
        </div>

        <div id="alignValidation">
            <RouterLink :to="{ name: 'Shopping' }">
                <button id="store"><span>Ajouter à mon panier d'achats</span></button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
      showColorClicked: false,
    };
  },
  methods: {
    toggleColor() {
      this.showColorClicked = true;

      // On attend un peu avant d'écouter les clics (important pour pas fermer direct)
      this.$nextTick(() => {
        setTimeout(() => {
          document.addEventListener('click', this.handleClickOutside);
        }, 0);
      });
    },
    handleClickOutside(event) {
      const colorClicked = this.$refs.colorClicked;
      if (colorClicked && !colorClicked.contains(event.target)) {
        this.showColorClicked = false;
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};

</script>

<style scoped>
@font-face {
    font-family: "Monomaniac";
    src: url(../assets/font/MonomaniacOne-Regular.ttf);
}

template {
    height: 90vh;
    width: 100%;
}

.wrapper {
    height: 100vh;
    width: 100%;
    background-image: url(../assets/pictures/BGpersonnalisationpage.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

#alignTshirt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 1;
}

#alignOptions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10%;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;

    z-index: 1;
}

#alignValidation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    height: 100%;
    width: 50%;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 1;
}

#colorClicked {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.illustrationOptionsClicked {
    width: 30%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#options {
    height: 80%;
    width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    z-index: 10;
}

.nav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: #ddd;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;

}


#alignValidation button {
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
    height: 80px;
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
    z-index: 0;
}

#alignValidation button::before {
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

#alignValidation button:hover::before {
    left: 0;
    border: 3px #73020C solid;
}

#alignValidation button span {
    position: relative;
    z-index: 100;
    transition: color 0.3s ease;
}

#alignValidation button:hover span {
    color: #73020C;
}


#tshirt {
    display: flex;
    align-items: center;
    gap: 150px;
    z-index: 100;
}

.navtshirt {
    display: flex;
    flex-direction: column;
}

.navtshirt p {
    text-align: center;
    font-family: "Monomaniac";
    font-size: 1.6em;
}

.option {
    background-color: #86888B;
    height: 15%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    width: 150px;
    padding: 15px;
    gap: 10px;
    cursor: pointer;
}

.option img {
    width: 70px;
    height: auto;
}

.option p {
    font-size: 1.5em;
    font-family: "Monomaniac";
    text-align: center;
    margin: 0;
    color: white;
}

.illustrationOptions {
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

#embroidery {
    font-family: "Monomaniac";
    font-size: 1.5em;
}

#embroidery p {
    margin-left: 10px;
    margin-top: 2px;
    margin-bottom: 7px;

    padding: 0;
}

#embroidery p:nth-of-type(2) {
    opacity: 29%;
}

/* Style pour la checkbox de style Apple */
.switch {
    position: relative;
    display: inline-block;
    width: 150px;
    height: 64px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #86888B;
    transition: 0.4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 46px;
    width: 46px;
    border-radius: 50%;
    left: 7px;
    bottom: 9px;
    background-color: white;
    transition: 0.4s;
}

/* Lorsque la checkbox est activée */
input:checked+.slider {
    background-color: black;
}

input:checked+.slider:before {
    transform: translateX(90px);
    /* Décale le check à droite */
    background-color: white;
    /* Change la couleur du cercle au moment du clic */
}
</style>