import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode as jwt_decode } from "jwt-decode";

import HomeView from '../views/HomeView.vue';
import Service from '../views/Service.vue';
import Messages from '../views/Messages.vue';
import Feedback from '../views/Feedback.vue';

import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import Admin from '../views/Admin/Admin.vue';
import PlanHolder from '../views/Admin/Planholder.vue';
import Feedbackk from '../views/Admin/Feedback.vue';
import CreateAccount from '../views/Agent/CreateAccount.vue';
import Payment from '../views/Agent/Payment.vue';
import Chat from '../components/Chat.vue';
import EditProfile from '../views/Admin/EditProfile.vue';
import Announcement from '../views/Admin/Announcement.vue';

import Forbidden from '../views/Forbidden.vue';
const routes = [
  {
    path: '/', // Add a new route for registration
    name: 'home',
    component: HomeView,
    meta:{ requiresAuth: true, allowedRoles: ['PlanHolder'] }
  },
  {
    path: '/services', // Add a new route for registration
    name: 'Service',
    component: Service,
    meta:{ requiresAuth: true, allowedRoles: ['PlanHolder'] }
  },
  {
    path: '/home', // Add a new route for registration
    name: 'Messages',
    component: Messages,
    meta:{ requiresAuth: true, allowedRoles: ['PlanHolder'] }
  },
  {
    path: '/feedback', // Add a new route for registration
    name: 'Feedback',
    component: Feedback,
    meta:{ requiresAuth: true, allowedRoles: ['PlanHolder'] }
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
    meta:{ requiresAuth: true,allowedRoles: ['Admin'] }
  },
  {
    path: '/planholder', // Add a new route for registration
    name: 'planholder',
    component: PlanHolder,
    meta:{ requiresAuth: true,allowedRoles: ['Admin'] }
  },
  {
    path: '/feedbackk', // Add a new route for registration
    name: 'Feedbackk',
    component: Feedbackk,
    meta:{ requiresAuth: true,allowedRoles: ['Admin'] }
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
  {
    path: '/announcement', // Add a new route for registration
    name: 'Announcenment',
    component: Announcement,
    meta:{ requiresAuth: true,allowedRoles: ['Admin'] }
  },
  {
    path: '/forbidden', // Add a new route for registration
    name: 'Forbidden',  
    component: Forbidden,
  },
  {
    path: '/messages', // Add a new route for registration
    name: 'Messages',  
    component: Messages,
  },
  {
    path: '/agent', // Add a new route for registration
    name: 'agent',
    component: CreateAccount,
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  if(to.meta.requiresAuth){
    if(!token){
      next('/login');
    }else{
      const decodedToken = jwt_decode(token);
      const userRole = decodedToken.aud;

      if (to.meta.allowedRoles.includes(userRole)){
        next();
      }else {
        next('/forbidden');
      }
    }
  }else {
    next();
  }
});

export default router