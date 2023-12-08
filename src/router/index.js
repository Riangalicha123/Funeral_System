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
import AgentRecord from '../views/Admin/AgentRecord.vue';
import Feedbackk from '../views/Admin/Feedback.vue';
import Chat from '../components/Chat.vue';
import EditProfile from '../views/Admin/EditProfile.vue';
import Announcement from '../views/Admin/Announcement.vue';

import CreateAccount from '../views/Agent/CreateAccount.vue';
import Payment from '../views/Agent/Payment.vue';

import Forbidden from '../views/Forbidden.vue';
const routes = [
  {
    path: '/', 
    name: 'home',
    component: HomeView,
    meta:{allowedRoles: ['PlanHolder'] }
  },
  {
    path: '/services', 
    name: 'Service',
    component: Service,
    meta:{ requiresAuth: true, allowedRoles: ['PlanHolder'] }
  },
  {
    path: '/messages', 
    name: 'Messages',
    component: Messages,
    meta:{ requiresAuth: true, allowedRoles: ['PlanHolder'] }
  },
  {
    path: '/feedback', 
    name: 'Feedback',
    component: Feedback,
    meta:{ requiresAuth: true, allowedRoles: ['PlanHolder'] }
  },
  
  {
    path: '/register', 
    name: 'register',
    component: Register,
  },
  {
    path: '/login', 
    name: 'login',
    component: Login,
  },
  {
    path: '/account', 
    name: 'account',
    component: Account,
  },
  {
    path: '/payment', 
    name: 'payment',
    component: Payment,
  },
  {
    path: '/admin', 
    name: 'admin',
    component: Admin,
    meta:{ requiresAuth: true,allowedRoles: ['Admin'] }
  },
  {
    path: '/planholder', 
    name: 'planholder',
    component: PlanHolder,
    meta:{ requiresAuth: true,allowedRoles: ['Admin'] }
  },
  
  {
    path: '/feedbackk', 
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
    path: '/admin/profile', 
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/announcement', 
    name: 'Announcenment',
    component: Announcement,
    meta:{ requiresAuth: true,allowedRoles: ['Admin'] }
  },
  {
    path: '/admin-record', 
    name: 'AgentRecord',
    component: AgentRecord,
    meta:{ requiresAuth: true,allowedRoles: ['Admin'] }
  },
  {
    path: '/forbidden', 
    name: 'Forbidden',  
    component: Forbidden,
  },
  {
    path: '/messages', 
    name: 'Messages',  
    component: Messages,
    meta:{ requiresAuth: true,allowedRoles: ['PlanHolder'] }
  },
  {
    path: '/agent', 
    name: 'agent',
    component: CreateAccount,
    meta:{ requiresAuth: true,allowedRoles: ['Agent'] }
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
      next('/');
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