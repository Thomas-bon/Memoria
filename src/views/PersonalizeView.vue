<template>
    <div class="wrapper">
        <h1>PERSONNALISER</h1>

        <div id="alignOptions">
            <div id="options">

                <!-- COULEUR -->
                <div v-show="!showColorClicked" class="option" id="color"
                    @click="toggleState('showColorClicked', $event)">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/color_button.svg" alt="">
                    </div>

                    <p>Couleur</p>
                </div>
                <div v-show="showColorClicked" class="option" id="colorClicked" ref="colorClicked">
                    <div class="illustrationOptionsClicked">
                        <img src="../assets/pictures/color_button.svg" alt="">

                        <p>Couleur</p>
                    </div>
                    <div class="illustrationOptionsClicked" @click="changeColor('white')">
                        <img src="../assets/pictures/color_white_button.svg" alt="">
                        <p>Blanc</p>
                    </div>
                    <div class="illustrationOptionsClicked" @click="changeColor('black')">
                        <img src="../assets/pictures/color_black_button.svg" alt="">
                        <p>Noir</p>
                    </div>
                </div>

                <!-- CHRONO -->
                <div v-show="!showChronoClicked" class="option" id="chrono"
                    @click="toggleState('showChronoClicked', $event), changeTshirtSrc('right')">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/chrono_button.svg" alt="">
                    </div>

                    <p>Chrono</p>
                </div>

                <div v-show="showChronoClicked" class="option" id="chronoClicked" ref="chronoClicked">
                    <input type="text" name="minute" id="minute" maxlength="2" placeholder="00" v-model="inputMinute">
                    <p>:</p>
                    <input type="text" name="seconde" id="seconde" maxlength="2" placeholder="00"
                        v-model="inputSeconde">

                </div>


                <!-- PARKOUR -->
                <div v-show="!showParkourClicked" class="option" id="parkour"
                    @click="toggleState('showParkourClicked', $event)">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/parkour_button.svg" alt="">
                    </div>

                    <p>Tracé</p>
                </div>
                <div v-show="showParkourClicked" class="option" id="parkourClicked" ref="parkourClicked">
                    <div class="illustrationOptionsClicked" id="basebuttonParkour">
                        <img src="../assets/pictures/parkour_button.svg" alt="">
                        <p>Tracé</p>
                    </div>

                </div>

                <!-- IMPRESSION -->
                <div id="embroidery">
                    <p :style="{ opacity: !withEmbroidery ? 1 : 0.29 }">Impression</p>

                    <label class="switch">
                        <input type="checkbox" v-model="withEmbroidery" />
                        <span class="slider"></span>
                    </label>

                    <p :style="{ opacity: withEmbroidery ? 1 : 0.29 }">Broderie</p>
                </div>

                <!-- IMPRESSION -->
                <div id="hem">
                    <p>Ourlet</p>

                    <label class="switch">
                        <input type="checkbox" v-model="withHem" />
                        <span class="slider"></span>
                    </label>

                </div>


            </div>
        </div>

        <div id="alignTshirt">
            <div id="tshirt">
                <div class="navtshirt">
                    <div class="nav-btn" @click="changeTshirtSrc('left')">
                        <img src="../assets/pictures/arrow_left.svg" alt="" />
                    </div>
                    <p>Avant</p>
                </div>

                <div class="shirt-container">
                    <img :src="finalTshirtSrc" alt="T-shirt" />
                    <!-- <p>{{ tshirtValue }}</p> -->

                    <p v-if="tshirtValue === 2" id="chronoTshirt"
                        :style="{ color: tshirtColor === 'black' ? 'white' : 'black' }">
                        {{ `${inputMinute} ' ${inputSeconde}` }}
                    </p>

                </div>

                <div class="navtshirt">
                    <div class="nav-btn" @click="changeTshirtSrc('right')">
                        <img src="../assets/pictures/arrow_right.svg" alt="" />
                    </div>
                    <p>Arrière</p>
                </div>
            </div>
        </div>

        <button id="store" @click="addToCart"><span>Ajouter au panier</span></button>

    </div>
</template>

<script>

import cartStore from '@/stores/cartStore'

export default {
    data() {
        return {
            withEmbroidery: false,
            withHem: false,
            showColorClicked: false,
            showParkourClicked: false,
            showChronoClicked: false,
            tshirtSrc: '/src/assets/pictures/tshirt/tshirt_default_black_1.svg',
            tshirtValue: '1',
            inputMinute: '',
            inputSeconde: '',


            customization: {
                color: 'Black',
                chrono: {
                    minute: '00',
                    seconde: '00',
                },
                embroidery: false,
                hem: false,
                img: '',
            },
        };
    },
    methods: {
        addToCart() {
            const pendingProduct = this.$store.state && this.$store.state.pendingState;

            if (!pendingProduct) {
                console.error('Le produit en attente est introuvable dans le store!');
                return;
            }

            const product = {
                id: pendingProduct.id,
                name: pendingProduct.name,
                size: pendingProduct.size,
                quantity: pendingProduct.quantity,
                price: pendingProduct.price,
                image: pendingProduct.image,
                customization: this.customization,
            }

            cartStore.addToCart(product);
            this.$router.push({ name: 'Shopping' });
        },

        updateChrono() {
            this.customization.chrono.minute = this.inputMinute;
            this.customization.chrono.seconde = this.inputSeconde;
        },
        toggleEmbroidery() {
            this.customization.embroidery = !this.customization.embroidery;
        },
        toggleHem() {
            this.customization.hem = !this.customization.hem;
        },

        checkTshirtValue() {
            if (this.tshirtSrc.endsWith('2.svg')) {
                this.tshirtValue = 2;
            } else {
                this.tshirtValue = 1;
            }
        },
        toggleState(stateName, event) {
            const newState = !this[stateName];

            // Si on clique sur un bouton déjà ouvert
            if (newState) {
                // Ferme toutes les autres sections avant d'ouvrir celle demandée
                this.showColorClicked = stateName === 'showColorClicked' ? newState : false;
                this.showChronoClicked = stateName === 'showChronoClicked' ? newState : false;
                this.showParkourClicked = stateName === 'showParkourClicked' ? newState : false;

                // Ajoute l'événement global pour fermer la section quand on clique à l'extérieur
                this.addClickListener();
            } else {
                // Si la section est fermée, on retire l'écouteur d'événement global
                this.removeClickListener();
            }

            // Met à jour l'état de la section qui a été cliquée
            this[stateName] = newState;

            // Empêche la propagation de l'événement afin de ne pas déclencher handleClickOutside
            event.stopPropagation();
        },

        addClickListener() {
            // Ajoute l'événement click pour fermer les sections à l'extérieur
            document.addEventListener('click', this.handleClickOutside);
        },

        removeClickListener() {
            // Retire l'événement click
            document.removeEventListener('click', this.handleClickOutside);
        },

        handleClickOutside(event) {
            const colorClicked = this.$refs.colorClicked;
            const chronoClicked = this.$refs.chronoClicked;
            const parkourClicked = this.$refs.parkourClicked;

            // Vérifie si les refs existent avant de les utiliser
            if (
                (colorClicked && !colorClicked.contains(event.target)) &&
                (chronoClicked && !chronoClicked.contains(event.target)) &&
                (parkourClicked && !parkourClicked.contains(event.target))
            ) {
                // Ferme toutes les sections
                this.showColorClicked = false;
                this.showChronoClicked = false;
                this.showParkourClicked = false;

                // Retire l'écouteur d'événement
                this.removeClickListener();
            }
        },
        changeTshirtSrc(direction) {
            const currentFileName = this.tshirtSrc.split('/').pop();
            const baseName = currentFileName.split('.')[0];
            const currentNumber = parseInt(baseName.match(/\d+$/)[0]);
            let newNumber = direction === 'left' ? currentNumber - 1 : currentNumber + 1;
            newNumber = Math.max(1, Math.min(newNumber, 2));
            const newFileName = baseName.replace(/\d+$/, newNumber);
            const newTshirtSrc = this.tshirtSrc.replace(currentFileName, `${newFileName}.svg`);

            this.tshirtSrc = newTshirtSrc;
            this.checkTshirtValue();

        },
        changeColor(newColor) {
            this.customization.color = newColor;
            if (newColor === "white") {
                this.tshirtSrc = this.tshirtSrc.replace('black', newColor);
            }
            if (newColor === "black") {
                this.tshirtSrc = this.tshirtSrc.replace('white', newColor);
            }
            this.checkTshirtValue();
        },
    },
    computed: {
        finalTshirtSrc() {
            // Décompose le nom de fichier
            const parts = this.tshirtSrc.split('/');
            const fileName = parts.pop(); // ex: "tshirt_default_black_1.svg"

            // On modifie juste la partie "default"/"hem"
            const updatedFileName = this.withHem
                ? fileName.replace('default', 'hem')
                : fileName.replace('hem', 'default');

            return [...parts, updatedFileName].join('/');
        },
        tshirtColor() {
            if (this.tshirtSrc.includes('white')) return 'white';
            if (this.tshirtSrc.includes('black')) return 'black';
            return 'unknown';
        },
    },


    mounted() {
        const pendingProduct = this.$store.state && this.$store.state.pendingState;

        if (pendingProduct && pendingProduct.image) {
            this.tshirtSrc = pendingProduct.image;
            this.customization.img = pendingProduct.image;
        }
        
        this.customization.img = this.finalTshirtSrc;
    },

    watch: {

        inputMinute(newValue) {
            this.updateChrono();  // Met à jour chrono à chaque changement de minute
            // console.log("Le flocage des minutes à été mis à jour !")
        },
        inputSeconde(newValue) {
            this.updateChrono();  // Met à jour chrono à chaque changement de seconde
            // console.log("Le flocage des secondes à été mis à jour !")
        },

        withEmbroidery(newValue) {
            this.customization.embroidery = newValue;
            // console.log("Broderie changée:", newValue);
        },

        withHem(newValue) {
            this.customization.hem = newValue;
            // console.log("Ourlet changé:", newValue);
        }
    },

    beforeUnmount() {
        // Nettoie l'écouteur d'événement si la composant est détruit
        this.removeClickListener();
    },
};
</script>

<style scoped>
@font-face {
    font-family: "Monomaniac";
    src: url(../assets/font/MonomaniacOne-Regular.ttf);
}

@font-face {
    font-family: "Inter";
    src: url(../assets/font/Inter_18pt-ExtraBold.ttf);
}

@font-face {
    font-family: "tshirt";
    src: url(../assets/font/Maxlock.ttf);
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

    margin-top: 10vh;

}

.wrapper h1 {
    color: black;
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;

    font-size: 4em;
    font-family: "Inter";

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
    padding-left: 5%;
    position: absolute;
    top: 0;
    height: 90%;
    margin-top: 5%;
    width: 0%;
    z-index: 1;
}

#colorClicked {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2000;
}

#chronoClicked {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2000;
}


#chronoClicked input {
    width: 100px;
    height: 100px;
    font-size: 3.5em;
    font-family: "Monomaniac", sans-serif;
    text-align: center;
    border-radius: 15px;
    border: 2px solid #86888B;
    background-color: #f7f7f7;
    color: #333;
    transition: all 0.3s ease;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Effet au survol de l'input */
#chronoClicked input:hover {
    background-color: #e1e1e1;
    border-color: #73020C;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

/* Animation au focus */
#chronoClicked input:focus {
    outline: none;
    border-color: #73020C;
    box-shadow: 0px 4px 12px rgba(115, 2, 12, 0.3);
}

/* Style du séparateur ":" */
#chronoClicked p {
    font-size: 6em;
    font-family: "Monomaniac", sans-serif;
    margin: 0 10px;
    text-align: center;
    line-height: 1.2;
}

#parkourClicked {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2000;
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
    gap: 10px;
    z-index: 100;
    position: relative;
}

#chronoTshirt {
    position: absolute;
    top: 10px;
    z-index: 1000;
    height: 20px;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 3.5em;
    font-family: "tshirt";
    gap: 0;
}

.shirt-container {
    position: relative;
}

#basebuttonParkour {
    width: 50%;
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

#store {
    width: auto;
    padding-left: 80px;
    padding-right: 80px;
    height: 80px;
    background-color: #73020C;
    color: white;
    font-family: "MonoManiac One";
    font-size: 40px;
    border: solid 2px #000000;
    overflow: hidden;
    cursor: pointer;
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}

#store::before {
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

#store:hover::before {
    left: 0;
}

#store span {
    position: relative;
    z-index: 100;
    transition: color 0.3s ease;
}

#store:hover span {
    color: #73020C;
}

#tshirt {
    display: flex;
    align-items: center;
    gap: 80px;
    z-index: 50;
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
    z-index: 1000;
    width: 150px;
    padding: 15px;
    gap: 10px;
    cursor: pointer;
    position: relative;
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

#hem p {
    font-family: "Monomaniac";
    font-size: 1.5em;
    margin-top: 0;
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
    background-color: white;
}
</style>
