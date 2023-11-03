// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Import your existing components
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import Payment from '../views/Payment.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register', // Add a new route for registration
    name: 'register',
    component: Register,
  },
  {
    path: '/login', // Add a new route for registration
    name: 'login',
    component: Login,
  },
  
  {
    path: '/account', // Add a new route for registration
    name: 'account',
    component: Account,
  },
  {
    path: '/payment', // Add a new route for registration
    name: 'payment',
    component: Payment,
  },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
