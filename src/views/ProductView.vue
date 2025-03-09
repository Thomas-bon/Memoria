<template>
    <div class="Product">
        <div class="image-container">
            <img src="/src/assets/pictures/TshirtImg.svg" alt="T-shirt">
        </div>
        <div class="content">
            <h2>T-SHIRT MÉMORIA</h2>
            <div class="Descriptionproduct">
                <p>Fabriqué dans une matière respirante et légère, ce t-shirt vous garantit un confort optimal même lors
                    de vos plus longues courses. Le textile, doux au toucher et
                    à séchage rapide, permet d’évacuer efficacement la transpiration pour
                    rester au frais en toutes circonstances.</p>

                <p>Le motif, imprimé en haute définition, représente le tracé exact de votre marathon ainsi que la date
                    de votre performance.
                    <br>
                    Vous pouvez également y ajouter votre temps ou tout autre détail personnalisé pour un souvenir
                    unique et durable.
                    <br> <br>
                    Son design ergonomique et sa coupe ajustée vous offrent une liberté
                    de mouvement idéale pour vous dépasser, tout en affichant fièrement votre exploit.
                </p>
            </div>

            <div class="InfoProduct">
                <div class="buyProduct">
                    <div class="price">€35</div>
                    <div class="sizes">
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </div>
                <RouterLink :to="{ name: 'Personalize' }">
                <div id="Personalize">
                    <button class="customize">Personnalisé</button>
                </div>
            </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

template {
  height: 90vh;
  width: 100%;
}

.Product {
    height: 100vh; 
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    padding: 20px;
    max-width: 80vw; 
    margin: auto;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    height: 65vh;
    width: 35vw;
}

.image-container img {
    height: 45vh;
    width: auto;
}

.content {
    flex: 2;
    max-width: 40vw;
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
    width: 100%;
}

.buyProduct {
    display: flex;
    align-items: center;
    gap: 20px;
}

.price {
    font-size: 24px;
    font-weight: bold;
    min-width: 60px;
    text-align: center;
}

.sizes {
    display: flex;
    gap: 8px;
}

.sizes button {
    border: 1px solid black;
    padding: 5px 10px;
    background: white;
    cursor: pointer;
}

.customize {
    background: black;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

.InfoProduct {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>
