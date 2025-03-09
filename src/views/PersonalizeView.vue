<template>
    <div class="wrapper">
        <div class="align">
            <div class="container">
                <div class="options">
                    <div class="option">Couleurs</div>
                    <div class="option">0:00+<br>Chronos</div>
                    <div class="option">Tracé</div>
                    <div class="option">Impression</div>
                </div>

                <div class="nav-btn nav-left">&lt;</div>

                <div class="shirt-container">
                    <img src="/src/assets/pictures/TshirtImg.svg" alt="T-shirt">
                </div>

                <div class="nav-btn nav-right">&gt;</div>
            </div>

            <div class="bottom-bar">
                <button class="cart-btn">Ajouter à mon panier d’achat</button>
                <div class="heart">
                    <img src="/src/assets/pictures/HeartLike.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
template {
    height: 90vh;
    width: 100%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.align{
    display: flex;
    flex-direction: column;
    gap: 65px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 80%;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 35px;
    position: absolute;
    left: -390px;
}

.option {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 70px;
    background: #ddd;
    border-radius: 10px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
}

.shirt-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.shirt-container img {
    width: 250px;
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
    position: absolute;
}

.nav-left {
    left: -130px;
}

.nav-right {
    right: -130px;
}

.bottom-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin-top: 20px;
}

.cart-btn {
    background: #ddd;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

.heart {
    width: 40px;
    height: 40px;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
}

.heart img {
    height: 20px;
    width: 20px;
}
</style>
