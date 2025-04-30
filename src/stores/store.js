import { reactive, computed } from 'vue'

const state = reactive({
    items: []
})

function addToCart(product) {
    const existing = state.items.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;

    } else {
        existing.push({ ...product, quantity: 1 });

    };
};

function removeFromCart(productID) {
    state.items.filter(item => item.id !== productID);
};

function clearCart() {
    state.items = [];
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