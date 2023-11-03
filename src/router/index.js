import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import Admin from '../views/Admin.vue';
const routes = [
  {
    path: '/', // Add a new route for registration
    name: 'home',
    component: Homeview,
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
    path: '/admin', // Add a new route for registration
    name: 'admin',
    component: Admin,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
