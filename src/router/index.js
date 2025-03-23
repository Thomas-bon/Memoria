import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import ShopppingView from '../views/ShoppingView.vue'
import ProductView from '../views/ProductView.vue'
import PersonalizeView from '../views/PersonalizeView.vue'
import JeuxView from '../views/JeuxView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: ShopView,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: ShopppingView,
    },
    {
      path: '/Product',
      name: 'Product',
      component: ProductView,
    },
    {
      path: '/Personalize',
      name: 'Personalize',
      component: PersonalizeView,
    },
    {
      path: '/game',
      name: 'game',
      component: JeuxView,
    },
  ],
});

// Gestion du défilement vers les ancres après chaque navigation
router.afterEach((to) => {
  if (to.hash) {
    // Si un hash est là, on attend la fin du rendu de la page et on effectue le scroll
    setTimeout(() => {
      const element = document.getElementById(to.hash.slice(1)); // retire le #
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); 
  }
});

export default router;
