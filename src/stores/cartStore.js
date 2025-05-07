import { reactive, computed } from 'vue'


const saveCart = JSON.parse(localStorage.getItem('cart')) || [];

const state = reactive({
    items: saveCart
})

function keepUpdateCart() {
    localStorage.setItem('cart', JSON.stringify(state.items));
}

function addToCart(product) {
    const existing = state.items.find(
        item => item.id === product.id && item.size === product.size);

    if (existing) {
        existing.quantity += product.quantity;

    } else {
        state.items.push({ ...product });

    };
    // console.log(state.items)
    keepUpdateCart();
};

function removeFromCart(productID) {
    state.items = state.items.filter(item => item.id !== productID);

    keepUpdateCart();
};

function clearCart() {
    state.items = [];

    keepUpdateCart();
};

const totalItems = computed(() =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
);

const totalPrice = computed(() =>
    state.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
);

export default {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
};