<script>
import cartStore from '../stores/cartStore';
import pendingProduct from '../stores/store'

export default {
    name: 'Product',
    data() {
        return {
            product: null,
            unitPrice: 0,
            quantity: 1,
            selectedSize: null,
            currentImage: ''
        }
    },
    created() {
        const productId = this.$route.params.id;

        const products = [
            {
                id: 'annecy-black',
                name: 'T-shirt Annecy Noir',
                price: 40,
                img1: new URL('../assets/pictures/tshirt/tshirt_annecy_default_black_1.png', import.meta.url).href,
                img2: new URL('../assets/pictures/tshirt/tshirt_annecy_default_black_2.png', import.meta.url).href,
                description1: "Ce t-shirt de sport à la fois sobre et percutant a été conçu pour rendre hommage à ta participation au Marathon d’Annecy, l’un des marathons les plus pittoresques de France. L’élégance du noir rencontre l’énergie du tracé pour une pièce à la fois stylée et symbolique.",
                description2: "Le motif, imprimé en haute définition, représente le tracé exact de votre marathon ainsi que la date de votre performance. Vous pouvez également y ajouter votre temps ou tout autre détail personnalisé pour un souvenir unique et durable.",
            },
            {
                id: 'annecy-white',
                name: 'T-shirt Annecy Blanc',
                price: 40,
                img1: new URL('../assets/pictures/tshirt/tshirt_annecy_default_white_1.png', import.meta.url).href,
                img2: new URL('../assets/pictures/tshirt/tshirt_annecy_default_white_2.png', import.meta.url).href,
                description1: "Ce t-shirt de sport blanc et léger est une création unique, pensée pour marquer ta participation au Marathon d’Annecy, l’un des plus beaux parcours de France, longeant les eaux turquoise du lac et traversant les paysages alpins. Garde un souvenir de ton parcours mémorable.",
                description2: "Le motif, imprimé en haute définition, représente le tracé exact de votre marathon ainsi que la date de votre performance. Vous pouvez également y ajouter votre temps ou tout autre détail personnalisé pour un souvenir unique et durable.",
            },
            {
                id: 'seville-black',
                name: 'T-shirt Seville Noir',
                price: 40,
                img1: new URL('../assets/pictures/tshirt/tshirt_seville_default_black_1.png', import.meta.url).href,
                img2: new URL('../assets/pictures/tshirt/tshirt_seville_default_black_2.png', import.meta.url).href,
                description1: "Ce t-shirt de sport au design unique a été spécialement conçu pour célébrer ta participation au Marathon de Séville. Fabriqué dans une matière technique respirante, il allie confort  et style pour accompagner tes performances.",
                description2: "Le motif, imprimé en haute définition, représente le tracé exact de votre marathon ainsi que la date de votre performance. Vous pouvez également y ajouter votre temps ou tout autre détail personnalisé pour un souvenir unique et durable.",
            },
            {
                id: 'seville-white',
                name: 'T-shirt Seville Blanc',
                price: 40,
                img1: new URL('../assets/pictures/tshirt/tshirt_seville_default_white_1.png', import.meta.url).href,
                img2: new URL('../assets/pictures/tshirt/tshirt_seville_default_white_2.png', import.meta.url).href,
                description1: "Fabriqué dans une matière respirante et légère, ce t-shirt vous garantit un confort optimal même lors de vos plus longues courses. Le textile, doux au toucher et à séchage rapide, permet d’évacuer efficacement la transpiration pour rester au frais en toutes circonstances.",
                description2: "Le motif, imprimé en haute définition, représente le tracé exact de votre marathon ainsi que la date de votre performance. Vous pouvez également y ajouter votre temps ou tout autre détail personnalisé pour un souvenir unique et durable.",
            },
        ];

        this.product = products.find(p => p.id === productId);

        if (!this.product) {
            this.$router.push('/404');
            return;
        }

        this.unitPrice = this.product.price;
        this.defaultImage = this.product.img1;
        this.hoverImage = this.product.img2;
        this.currentImage = this.defaultImage;
    }

    ,
    methods: {
        selectSize(size) {
            this.selectedSize = this.selectedSize === size ? null : size;
        },
        changeImage() {
            this.currentImage = this.product.img2;
        },
        resetImage() {
            this.currentImage = this.product.img1;
        },
        increaseQuantity() {
            this.quantity++;
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        addtoCart() {
            if (this.selectedSize === null) {
                alert("Choisissez une taille !");
                return;
            }

            const productToAdd = {
                id: this.product.id,
                name: this.product.name,
                price: this.unitPrice,
                quantity: this.quantity,
                size: this.selectedSize,
                image: this.currentImage,
                customization: null,
            };

            pendingProduct.dispatch('savePendingProduct', productToAdd)
            console.log("Le produit à bien été enregistré !")
            this.$router.push({ name: 'Personalize' });
        },
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
                    <p>{{ product.description1 }}</p>
                </div>
                <div id="txtDescription">
                    <p>{{ product.description2 }}</p>
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
                    <button class="customize" @click="addtoCart"><span>Personnalisé</span></button>
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
    min-width: 180px;
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
