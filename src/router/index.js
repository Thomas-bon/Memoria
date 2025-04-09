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
      path: '/Game',
      name: 'Game',
      component: JeuxView,
    },
  ],
});

export default router;
