import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import ShopppingView from '../views/ShoppingView.vue'
import ProductView from '../views/ProductView.vue'
import PersonalizeView from '../views/PersonalizeView.vue'
import JeuxView from '../views/JeuxView.vue'
import POC from '../views/POCparkourView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
      path: '/Game',
      name: 'Game',
      component: JeuxView,
    },
    {
      path: '/POC',
      name: 'POC',
      component: POC,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: ProductView,
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          resolve();
        }, 150);
      });
    }
    return { top: 0 };
  }
});

export default router;
