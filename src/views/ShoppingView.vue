<template>
    <div class="container">
        <h1>VOS ACHATS</h1>

        <div class="cart-item">
            <img src="/src/assets/pictures/TshirtImg.svg" alt="T-shirt">
            <div class="details">
                <p><strong>T-SHIRT MÉMORIA</strong><br>
                    TAILLE : M <br>
                    QUANTITÉ : 1 <br>
                    PRIX : 35€</p>
            </div>
            <div class="close-btn">✖</div>
        </div>
        <button class="product-btn">VOIR PRODUIT</button>

        <div class="cart-item">
            <img src="/src/assets/pictures/TshirtImg.svg " alt="T-shirt">
            <div class="details">
                <p><strong>T-SHIRT MÉMORIA</strong><br>
                    TAILLE : S <br>
                    QUANTITÉ : 1 <br>
                    PRIX : 35€</p>
            </div>
            <div class="close-btn">✖</div>
        </div>
        <button class="product-btn">VOIR PRODUIT</button>

        <div class="trash-icon">
            <img src="/src/assets/pictures/trashIcon.svg" alt="">
        </div>
    </div>

    <div class="cart-footer">
        <button class="validate-btn">VALIDER MON PANIER</button>
        <div class="total">TOTAL : 70€</div>
    </div>
</template>

<style scoped>
template {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 80vh;
    width: 80%;
    margin: 0 auto;
}

h1 {
    font-size: 24px;
    font-weight: bold;
}

.cart-item {
    display: flex;
    align-items: center;
    background: #ddd;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 15px;
    position: relative;
    width: 60%;
}

.cart-item img {
    width: 60px;
    margin-right: 15px;
}

.cart-item .details {
    flex: 1;
    font-size: 14px;
    text-align: left;
}

.close-btn {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 10px;
}

.product-btn {
    background: #ddd;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 15px;
}

.cart-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ddd;
    padding: 15px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.validate-btn {
    background: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
}

.total {
    font-size: 18px;
    font-weight: bold;
}

.trash-icon {
    width: 80px;
    height: 80px;
    background: #ddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 125px;
    right: 55px;
}
</style>
