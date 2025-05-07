import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'  // Import du store Vuex

const app = createApp(App)

app.use(router)
app.use(store)  // Utilisation du store Vuex

app.mount('#app')
