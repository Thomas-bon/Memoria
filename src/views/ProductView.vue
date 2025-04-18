<script>
export default {
    data() {
        return {
            unitPrice: 40,
            quantity: 1,
            selectedSize: null,
            defaultImage: new URL('../assets/pictures/tshirt/tshirt_seville_white_1.svg', import.meta.url).href,
            hoverImage: new URL('../assets/pictures/tshirt/tshirt_seville_white_2.svg', import.meta.url).href,
            currentImage: ''
        }
    },
    created() {
        this.currentImage = this.defaultImage
    },
    methods: {
        selectSize(size) {
            if (this.selectedSize === size) {
                this.selectedSize = null; // si je clique encore dessus ça annule
            } else {
                this.selectedSize = size;
            }
        },
        changeImage() {
            this.currentImage = this.hoverImage;
        },
        resetImage() {
            this.currentImage = this.defaultImage;
        },
        increaseQuantity() {
            this.quantity++;
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        }
    },
    computed: {
        totalPrice() {
            return this.unitPrice * this.quantity;
        }
    }
}

</script>



<template>
    <div class="Product">
        <div class="image-container">
            <img :src="currentImage" alt="T-shirt" @mouseover="changeImage" @mouseout="resetImage">
        </div>
        <div class="content">
            <div class="Descriptionproduct">
                <div id="txtDescription">
                    <p>Fabriqué dans une matière respirante et légère, ce t-shirt vous garantit un confort optimal même
                        lors
                        de vos plus longues courses. Le textile, doux au toucher et
                        à séchage rapide, permet d’évacuer
                        efficacement la transpiration pour
                        rester au frais en toutes circonstances.</p>
                </div>

                <div id="txtDescription">
                    <p>Le motif, imprimé en haute définition, représente le tracé exact de votre marathon ainsi que la
                        date
                        de votre performance. Vous pouvez également
                        y ajouter votre temps ou tout autre détail personnalisé pour un souvenir unique et durable.
                    </p>
                </div>
            </div>

            <div class="InfoProduct">
                <div class="buyProduct">
                    <div class="quantity">
                        <div class="quantity-buttons">
                            <button @click="decreaseQuantity">-</button>
                            <span>{{ quantity }}</span>
                            <button @click="increaseQuantity">+</button>
                        </div>
                    </div>

                    <div class="sizes">
                        <button v-for="size in ['XS', 'S', 'M', 'L', 'XL']" :key="size" @click="selectSize(size)"
                            :class="{ active: selectedSize === size }">
                            {{ size }}
                        </button>
                    </div>
                </div>

                <div id="Personalize">
                    <div class="price">€{{ totalPrice }}</div>
                    <RouterLink :to="{ name: 'Personalize' }">
                        <button class="customize"><span>Personnalisé</span></button>
                    </RouterLink>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'Monomaniac One';
    src: url('../assets/font/MonomaniacOne-Regular.ttf');
}

* {
    box-sizing: border-box;
    font-family: 'Monomaniac One';
}

template {
    height: 90vh;
    width: 100%;
}

.Product {
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 95px;
    padding: 20px;
    margin: auto;
    background-color: #8AA7AE4D;
    margin-top: 110px;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A8BFCA;
    padding: 20px;
    height: 85vh;
    width: 35vw;
}

.image-container img {
    height: 55vh;
    width: auto;
}


.content {
    flex: 2;
    max-width: 45vw;
}

.content h2 {
    font-size: 2em;
    font-weight: bold;
}

.content p {
    font-size: 1.5em;
    margin-top: 10px;
}

.Descriptionproduct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

#txtDescription {
    font-size: 1.1em;
    width: 95%;
}

.buyProduct {
    display: flex;
    align-items: center;
    gap: 120px;

}


.price {
    font-size: 5em;
    min-width: 180px; /* ou width: 200px; selon ce que tu préfères */
}

.quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 24px;
    background-color: #D9D9D9;
    padding: 7px;
    min-width: 120px;
}

.quantity-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 1.6em;
}

.quantity-buttons>button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    text-align: inherit;
    text-decoration: none;
    cursor: pointer;
    outline: none;
}


.sizes {
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
}

.sizes>button {
    border: 1px solid black;
    padding: 5px 10px;
    background: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5em;
    border: 1px solid black;
    background: #FFFFFF;
    cursor: pointer;
    border-radius: 5px;
    width: 80px;
}

.sizes button.active {
    background-color: #73020C;
    color: white;
    border: 2px solid #000;
}


#Personalize {
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 20px; */
    justify-content: flex-start;
    gap: 60px;

}

button.customize {
  width: 250px;
  height: 75px;
  background-color: #73020C;
  color: white;
  font-family: "MonoManiac One";
  font-size: 40px;
  border: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

button.customize::before {
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

button.customize:hover::before {
  left: 0;
}

button.customize span {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

button.customize:hover span {
  color: #73020C;
}


.InfoProduct {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>
