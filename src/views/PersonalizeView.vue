<template>
    <div class="wrapper">
        <h1>PERSONNALISER</h1>

        <div id="alignOptions">
            <div id="options">

                <!-- COULEUR -->
                <div v-show="!showColorClicked" class="option" id="color"
                    @click="toggleState('showColorClicked', $event)">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/color_button.svg" alt="" />
                    </div>
                    <p>Couleur</p>
                </div>
                <div v-show="showColorClicked" class="option" id="colorClicked" ref="colorClicked">
                    <div class="illustrationOptionsClicked">
                        <img src="../assets/pictures/color_button.svg" alt="" />
                        <p>Couleur</p>
                    </div>
                    <div class="illustrationOptionsClicked" @click="changeColor('white')">
                        <img src="../assets/pictures/color_white_button.svg" alt="" />
                        <p>Blanc</p>
                    </div>
                    <div class="illustrationOptionsClicked" @click="changeColor('black')">
                        <img src="../assets/pictures/color_black_button.svg" alt="" />
                        <p>Noir</p>
                    </div>
                </div>

                <!-- CHRONO -->
                <div v-show="!showChronoClicked" class="option" id="chrono"
                    @click="toggleState('showChronoClicked', $event), changeTshirtSrc('right')">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/chrono_button.svg" alt="" />
                    </div>
                    <p>Chrono</p>
                </div>
                <div v-show="showChronoClicked" class="option" id="chronoClicked" ref="chronoClicked">
                    <input type="text" name="minute" id="minute" maxlength="2" placeholder="00" v-model="inputMinute" />
                    <p>:</p>
                    <input type="text" name="seconde" id="seconde" maxlength="2" placeholder="00"
                        v-model="inputSeconde" />
                </div>

                <!-- PARKOUR -->
                <div class="option" id="parkour" @click="toggleState('showParkourClicked', $event)">
                    <div class="illustrationOptions">
                        <img src="../assets/pictures/parkour_button.svg" alt="" />
                    </div>
                    <p>Tracé</p>
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

                <!-- OURLET -->
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
                    <p v-if="tshirtValue === 2" id="chronoTshirt"
                        :style="{ color: tshirtColor === 'BLACK' ? 'WHITE' : 'BLACK' }">
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

        <div v-if="showParkourClicked && showParkourButton" id="parkourButtonClicked">
            <div id="window">
                <div id="closeParkourMenu" @click="closeParkourMenu"></div>
                <h2>Choisissez un tracé !</h2>
                <div id="listOfParkour">
                    <div v-for="(src, name) in parkours" :key="name">
                        <img :src="src" :alt="name" class="parkoursOnFrontTshirt" />
                    </div>
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
            inputMinute: '',
            inputSeconde: '',

            parkours: {
                parkour1: '/src/assets/pictures/parkours/parkour1.webp',
                parkour2: '/src/assets/pictures/parkours/parkour2.webp',
            },

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

            tshirtAttributes: {
                color: 'black', // black or white
                type: 'default', // default or hem
                side: 1, // 1 = front, 2 = back
            },

            parkoutPageOn: true,
        };
    },

    computed: {
        finalTshirtSrc() {
            const { color, type, side } = this.tshirtAttributes;
            const path = `/src/assets/pictures/tshirt/tshirt_${type}_${color}_${side}.png`;

            // Optionnel : pré-vérification si tu as une liste d’images valides
            const validPaths = [
                'tshirt_default_black_1.png',
                'tshirt_default_black_2.png',
                'tshirt_default_white_1.png',
                'tshirt_default_white_2.png',
                'tshirt_hem_black_1.png',
                'tshirt_hem_black_2.png',
                'tshirt_hem_white_1.png',
                'tshirt_hem_white_2.png'
            ];

            const file = path.split('/').pop();
            if (!validPaths.includes(file)) {
                console.warn(`Image non trouvée : ${path}`);
                return '/src/assets/pictures/tshirt/tshirt_default_black_1.png'; // fallback
            }

            return path;
        },


        tshirtColor() {
            return this.tshirtAttributes.color.toUpperCase();
        },

        tshirtValue() {
            return this.tshirtAttributes.side;
        },

        showParkourButton() {
            const { type, color } = this.tshirtAttributes;
            return type === 'default' && (color === 'black' || color === 'white');
        },
    },

    methods: {
        addToCart() {
            const pendingProduct = this.$store.state && this.$store.state.pendingState;
            if (!pendingProduct) {
                console.error('Le produit en attente est introuvable dans le store!');
                return;
            }

            this.customization.img = this.finalTshirtSrc;

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

        toggleState(stateName, event) {
            const newState = !this[stateName];

            this.showColorClicked = stateName === 'showColorClicked' ? newState : false;
            this.showChronoClicked = stateName === 'showChronoClicked' ? newState : false;
            this.showParkourClicked = stateName === 'showParkourClicked' ? newState : false;

            if (newState) this.addClickListener();
            else this.removeClickListener();

            this[stateName] = newState;
            event.stopPropagation();
        },

        addClickListener() {
            document.addEventListener('click', this.handleClickOutside);
        },

        removeClickListener() {
            document.removeEventListener('click', this.handleClickOutside);
        },

        handleClickOutside(event) {
            const colorClicked = this.$refs.colorClicked;
            const chronoClicked = this.$refs.chronoClicked;
            const parkourClicked = this.$refs.parkourClicked;

            if (
                (!colorClicked || !colorClicked.contains(event.target)) &&
                (!chronoClicked || !chronoClicked.contains(event.target)) &&
                (!parkourClicked || !parkourClicked.contains(event.target))
            ) {
                this.showColorClicked = false;
                this.showChronoClicked = false;
                this.showParkourClicked = false;
                this.removeClickListener();
            }
        },

        changeTshirtSrc(direction) {
            const current = this.tshirtAttributes.side;
            this.tshirtAttributes.side = direction === 'left'
                ? Math.max(1, current - 1)
                : Math.min(2, current + 1);
        },

        changeColor(newColor) {
            this.tshirtAttributes.color = newColor;
            this.customization.color = newColor.toUpperCase();
        },

        closeParkourMenu() {
            this.showParkourClicked = false;
            this.removeClickListener();
        },
    },

    watch: {
        inputMinute() {
            this.updateChrono();
        },
        inputSeconde() {
            this.updateChrono();
        },
        withEmbroidery(newValue) {
            this.customization.embroidery = newValue;
        },
        withHem(newValue) {
            this.customization.hem = newValue;
            this.tshirtAttributes.type = newValue ? 'hem' : 'default';
        },
    },

    mounted() {
        const pendingProduct = this.$store.state && this.$store.state.pendingState;

        if (pendingProduct && pendingProduct.image) {
            const fileName = pendingProduct.image.split('/').pop();
            const match = fileName.match(/tshirt_(default|hem)_(black|white)_(1|2)\.png/);

            if (match) {
                this.tshirtAttributes = {
                    type: match[1],
                    color: match[2],
                    side: parseInt(match[3]),
                };
            }

            this.customization.img = this.finalTshirtSrc;
            this.customization.color = this.tshirtAttributes.color.toUpperCase();
        }
    },

    beforeUnmount() {
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
    top: 0px;
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

#parkourButtonClicked {
    width: 100vw;
    height: 110vh;
    background-color: rgba(134, 136, 139, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(10px);



    position: absolute;
    top: 0;
    z-index: 100000;

    display: flex;
    justify-content: center;
    align-items: center;
}

#window {
    width: 70%;
    height: 80%;
    border-radius: 30px;

    background-color: white;
    border: black 1px solid;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
}

#window h2 {}

#listOfParkour {
    display: flex;
}

#closeParkourMenu {
    position: absolute;
    top: 2%;
    right: 2%;

    width: 40px;
    height: 40px;
    background-color: red;
}



.parkoursOnFrontTshirt {
    width: 20%;
    border: 2px solid black;
    border-radius: 30px;
}
</style>
