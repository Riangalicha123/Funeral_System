import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue';
import Service from '../views/Service.vue';
import Messages from '../views/Messages.vue';
import Feedback from '../views/Feedback.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import Admin from '../views/Admin/Admin.vue';
import Planholder from '../views/Admin/Planholder.vue';
import CreateAccount from '../views/Agent/CreateAccount.vue';
import Payment from '../views/Agent/Payment.vue';
import Chat from '../components/Chat.vue';
import EditProfile from '../views/Admin/EditProfile.vue';
const routes = [
  {
    path: '/', // Add a new route for registration
    name: 'home',
    component: Homeview,
  },
  {
    path: '/services', // Add a new route for registration
    name: 'Service',
    component: Service,
  },
  {
    path: '/home', // Add a new route for registration
    name: 'Messages',
    component: Messages,
  },
  {
    path: '/feedback', // Add a new route for registration
    name: 'Feedback',
    component: Feedback,
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
    path: '/agent', // Add a new route for registration
    name: 'agent',
    component: CreateAccount,
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
  },
  {
    path: '/admin/profile', // Add a new route for registration
    name: 'EditProfile',
    component: EditProfile,
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router