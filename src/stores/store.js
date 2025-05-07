// store.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        pendingState: {
            id: null,
            name: '',
            price: 0,
            quantity: 0,
            size: null,
            image: '',
            customization: null,
        }
    },
    mutations: {
        setPendingProduct(state, product) {
            state.pendingState = { ...product };
        },
        updateQuantity(state, quantity) {
            state.pendingState.quantity = quantity;
        },
        updateSize(state, size) {
            state.pendingState.size = size;
        },
        updateCustomization(state, customization) {
            state.pendingState.customization = customization;
        }
    },
    actions: {
        savePendingProduct({ commit }, product) {
            commit('setPendingProduct', product);
        },
        changeQuantity({ commit }, quantity) {
            commit('updateQuantity', quantity);
        },
        changeSize({ commit }, size) {
            commit('updateSize', size);
        },
        updateCustomization({ commit }, customization) {
            commit('updateCustomization', customization);
        }
    }
});
