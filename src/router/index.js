import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import Admin from '../views/Admin/Admin.vue';
import Planholder from '../views/Admin/Planholder.vue';
<<<<<<< Updated upstream
import CreateAccount from '../views/Agent/CreateAccount.vue';
=======
import Chat from '../components/Chat.vue';
>>>>>>> Stashed changes

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
  {
    path: '/planholder', // Add a new route for registration
    name: 'planholder',
    component: Planholder,
  },
  {
<<<<<<< Updated upstream
    path: '/agent', // Add a new route for registration
    name: 'agent',
    component: CreateAccount,
=======
    path: '/chat',
    name: 'chat',
    component: Chat,
>>>>>>> Stashed changes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
