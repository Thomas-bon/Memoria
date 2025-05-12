<script>
export default {
    data() {
        return {
            showPaymentForm: false,
            showBankForm: false,
            currentStep: 1,
            phoneNumber: '',
            cvc: ''
        };
    },
    methods: {
        validateOrder() {
            this.showPaymentForm = true;
            this.currentStep = 2;
        },
        confirmShipping() {
            this.showPaymentForm = false;
            this.showBankForm = true;
            this.currentStep = 3;
        },
        finalizePayment() {
            this.currentStep = 1;
            this.showBankForm = false;
            this.$router.push('/');
        },
        formatCardNumber(event) {
            let value = event.target.value.replace(/\D/g, '');
            value = value.replace(/(.{4})/g, '$1 ').trim();
            event.target.value = value;
        },
        formatPhone() {
            let value = this.phoneNumber.replace(/\D/g, '');

            if (value.length === 10) {

                this.phoneNumber = value.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
            } else {

                this.phoneNumber = value;
            }
        },
        validateCVC() {
            this.cvc = this.cvc.replace(/\D/g, '').slice(0, 3);
        }
    },
    mounted() {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        this.cartItems = cartData;
    },
};
</script>




<template>
    <div class="container">

        <div class="steps">
            <div class="Step" :class="{ activeStep: currentStep === 1 }">
                <h1>1.&nbsp;</h1>
                <p>panier</p>
            </div>
            <div class="Step" :class="{ activeStep: currentStep === 2 }">
                <h1>2.</h1>
                <p>livraison</p>
            </div>
            <div class="Step" :class="{ activeStep: currentStep === 3 }">
                <h1>3.</h1>
                <p>virement</p>
            </div>
        </div>

        <div class="content">

            <div class="youritems">
                <div id="purchase">
                    <div id="item">
                        <img src="../assets/pictures/tshirt/tshirt_seville_black_1.svg" alt="">
                    </div>
                    <div id="iteminfo">
                        <h2>T-SHIRT PERSONNALISÉ</h2>
                        <h1>MARATHON DE SEVILLE</h1>
                        <h3>COULEUR NOIRE</h3>
                        <h3>TAILLE S</h3>
                        <h1>€40</h1>
                    </div>
                </div>

                <div id="line"></div>

                <div id="moreItems" v-if="showBankForm">
                    <h2>Livraison gratuite dès le premier achat</h2>
                    <h1>MERCI !</h1>
                </div>

            </div>


            <div class="rightPane">
                <div class="payment" v-if="!showPaymentForm && !showBankForm">
                    <div class="totalPrices">
                        <div id="prices">
                            <h2>Montant du panier</h2><span>40€</span>
                        </div>
                        <div id="shipping">
                            <h2>Livraison</h2><span>10€</span>
                        </div>
                        <div id="total">
                            <h1>TOTAL</h1><span>50€</span>
                        </div>
                    </div>

                    <div id="promoCode">
                        <input id="inputCode" type="text" placeholder="CODE PROMO :">
                    </div>

                    <div class="paymentButton">
                        <button id="confirm" class="button-animated" @click="validateOrder">
                            <span>VALIDER MA COMMANDE</span>
                        </button>
                        <br>
                        <h2>LIVRAISON OFFERTE DÈS 100€ D'ACHATS</h2>
                    </div>

                    <div id="contact">
                        <h2>UNE QUESTION ? <RouterLink :to="{ name: 'Contact' }"><a id="contactUs"
                                    href="#">CONTACTEZ-NOUS</a></RouterLink>
                        </h2>
                    </div>
                </div>

                <div class="shippingForm" v-if="showPaymentForm">
                    <h2>Coordonnées de Livraison</h2>
                    <form>
                        <input type="text" placeholder="Nom" required>
                        <input type="text" placeholder="Prénom" required>
                        <input type="text" placeholder="Adresse" required>
                        <input type="number" placeholder="Code Postal" required>
                        <input type="text" placeholder="Ville" required>
                        <input type="tel" v-model="phoneNumber" @blur="formatPhone" placeholder="Téléphone" required>
                        <button type="button" class="button-animated" @click="confirmShipping">
                            <span>Confirmer la livraison</span>
                        </button>
                    </form>
                </div>


                <div class="bankForm" v-if="showBankForm">
                    <div id="applePay">
                        <img src="../components/Icons/applePay.svg" alt="">
                    </div>

                    <div id="otherOption">
                        <div id="line2"></div>
                        <h2>Ou payez par carte</h2>
                        <div id="line2"></div>
                    </div>

                    <form @submit.prevent="finalizePayment">
                        <div class="form-group">
                            <label for="mail">E-mail</label>
                            <input type="email" id="mail" required>
                        </div>

                        <div class="form-group">

                            <label for="cardCode">Information de la carte</label>
                            <input id="cardCode" type="text" maxlength="19" @input="formatCardNumber"
                                placeholder="1234 1234 1234 1234" required>

                            <div id="cardInfo">
                                <input type="date" value="MM/AA" placeholder="MM/AA" required>
                                <input type="text" maxlength="3" v-model="cvc" @input="validateCVC" placeholder="CVC"
                                    required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="name">Nom du titulaire de la carte</label>
                            <input type="text" id="name" required>
                        </div>

                        <div class="form-group">
                            <label for="country">Pays</label>
                            <input type="text" id="country" required>
                        </div>

                        <button type="submit" class="button-animated">
                            <span>Payer</span>
                        </button>
                    </form>
                </div>

            </div>

        </div>
        <div class="OthersItems" v-if="!showPaymentForm && !showBankForm">
            <div id="moreItems" v-if="!showPaymentForm && !showBankForm">
                <h1 id="encadre">ET SI ON LE COMPLÉTAIT AVEC VOS EXPLOITS ?</h1>
            </div>
            <div class="gridOthersItems" v-if="!showPaymentForm && !showBankForm">
                <img src="../assets/pictures/tshirt/tshirt_annecy_white_1.svg" alt="">
                <img src="../assets/pictures/tshirt/tshirt_annecy_black_1.svg" alt="">
                <img src="../assets/pictures/tshirt/tshirt_seville_white_1.svg" alt="">
            </div>
        </div>
    </div>


</template>


<style scoped>
@font-face {
    font-family: 'Monomaniac One';
    src: url('../assets/font/MonomaniacOne-Regular.ttf');
}

@font-face {
    font-family: "Inter";
    src: url(../assets/font/Inter_18pt-ExtraBold.ttf);
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

@font-face {
    font-family: "InterLight";
    src: url(../assets/font/Inter_18pt-Light.ttf);
}

* {
    font-family: 'Monomaniac One';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

template {
    height: 100vh;
    width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background: linear-gradient(#FFFFFF, #A8BFCA);
    padding: 40px;
    margin-top: 50px;
}

.content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 50px;
    max-width: 1400px;
    width: 100%;
    margin: 50px auto 0 auto;
}


.activeStep h1 {
    color: #73020C;
}


.steps {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    font-weight: bold;
    font-size: 1.3em;
    margin-top: 50px;
}

.steps h1 {
    font-size: 3em;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #D9D9D9;
}

.steps p{
    font-family: "InterRegular";
}

.Step {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.youritems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 55px;
    margin-top: 50px;
}

.youritems,
.rightPane {
    flex: 1;
    max-width: 500px;
}

#purchase {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: flex-start;

}


#item {
    background-color: #A8BFCA;
    padding: 25px;
}

#item>img {
    height: 12vh;
    width: 12vh;
}

#iteminfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    font-size: 0.7em;
    max-width: 250px;
    word-break: break-word;
}

#iteminfo h1 {
    font-size: 1.8em;
    font-weight: bold;

}

#iteminfo h2 {
    margin-bottom: 5px;
}

#line {
    width: 150%;
    height: 1px;
    background-color: #000000;
    margin-left: 50%;
}

#moreItems {
    font-size: 1em;
    font-weight: bold;
}

#encadre {
    border: 2px solid black;
    padding: 15px;
    display: inline-block;
    font-family: "InterMedium";
}

.payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.totalPrices {
    align-items: center;
    justify-content: center;
    gap: 20px;
}


#prices {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    font-size: 1.1em;
}

#prices>h2 {
    font-size: 1.3em;
    font-family: "InterMedium";
}

#prices>span {
    font-size: 1.3em;
    font-family: "InterRegular";
}

#shipping {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    font-size: 1.1em;
}

#shipping>h2 {
    font-size: 1.3em;
    font-family: "InterMedium";
}

#shipping>span {
    font-size: 1.3em;
    font-family: "InterRegular";
}


#total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    font-size: 1.3em;
}

#total>h1 {
    font-size: 1.5em;
    font-family: "Inter";
}

#total>span {
    font-size: 1.5em;
    font-family: "Inter";
}

#inputCode {
    border-color: #000000;
    text-align: flex-start;
    padding: 5px;
    width: 100%;
    background-color: #FFFFFF;
}

input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #000000;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
}

input::placeholder {
    font-weight: bold;
    opacity: 1;
    color: #000000;
}

#confirm {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #73020C;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    height: 7vh;
    width: 100%;
    font-size: 0.8em;
    border: 2px solid #000000;
    text-decoration: none;
    transition: background 0.3s ease;
}

#confirm:hover {
    background: #590109;
}

#confirm h1 {
    margin: 0;
    font-size: 1.2em;
    color: #FFFFFF;
}

.paymentButton>h2 {
    display: flex;
    align-items: flex-start;
    font-size: 1.2em;
    color: #000000;
    font-family: "InterLight";
}

.button-animated {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background-color: #73020C;
    color: white;
    font-family: "Monomaniac One";
    border: none;
    transition: background 0.3s ease;
}

.button-animated::before {
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

.button-animated:hover::before {
    left: 0;
}

.button-animated span {
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
}

.button-animated:hover span {
    color: #73020C;
}



#contact {
    display: flex;
    align-items: flex-start;
    font-size: 0.7em;
    font-family: "InterLight";
}

#contact h2 {
    font-family: "InterLight";
}

#contactUs {
    color: #000000;
}

.OthersItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    width: 100%;
    margin-top: 100px;
}

.gridOthersItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

}

.gridOthersItems>img {
    height: 45vh;
    width: 43vh;
    background-color: #92B0C0;
    padding: 20px;
}

.shippingForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
    text-align: left;
    width: 100%;
}

.shippingForm input,
.shippingForm button {
    padding: 10px;
    border: 1px solid #D9D9D9;
    width: 70%;
}

.shippingForm input::placeholder {
    color: #AFAFAF;
}

.shippingForm button {
    background: #73020C;
    color: white;
    border: 2px solid #000000;
    cursor: pointer;
    margin-top: 10px;
}

.shippingForm button:hover {
    background: #590109;
}


.bankForm {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 50px;
    text-align: left;
    width: 100%;
}

.bankForm input,
.bankForm button {
    padding: 10px;
    border: 1px solid #D9D9D9;
    width: 100%;
}

.bankForm input::placeholder {
    color: #AFAFAF;
}

.bankForm button {
    background: #73020C;
    color: white;
    border: 2px solid #000000;
    cursor: pointer;
}

.bankForm button:hover {
    background: #590109;
}

#cardCode {
    background-image: url('../components/Icons/giftCardLogo.svg'),
        url('../components/Icons/masterCard.svg'),
        url('../components/Icons/visaLogo.svg');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: right;
    background-position: right 10px center, right 45px center, right 80px center;
}

#cardInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#cardInfo input {
    margin: 0;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}


label {
    color: #AFAFAF;
}


#line2 {
    width: 29%;
    height: 1px;
    background-color: #AFAFAF;
    margin-top: 20px;
}

#otherOption {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

#otherOption>h2 {
    font-size: 1.2em;
    color: #AFAFAF;
}

#applePay {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    padding: 10px 20px;
    cursor: pointer;
    height: 7.5vh;
    width: 100%;
    text-decoration: none;
}

#cardInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
}

#cardCode {
    margin-bottom: 0;
}
</style>
