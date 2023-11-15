import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode as jwt_decode } from "jwt-decode";

import Homeview from '../views/HomeView.vue';
import Service from '../views/Service.vue';
import Messages from '../views/Messages.vue';
import Feedback from '../views/Feedback.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import Admin from '../views/Admin/Admin.vue';
import PlanHolderr from '../views/Admin/Planholder.vue';
import Feedbackk from '../views/Admin/Feedback.vue';
import CreateAccount from '../views/Agent/CreateAccount.vue';
import Payment from '../views/Agent/Payment.vue';
import Chat from '../components/Chat.vue';
import EditProfile from '../views/Admin/EditProfile.vue';
import Announcement from '../views/Admin/Announcement.vue';



//Planholder Portal
import Planholder from '../views/planholder/layout/Planholder.vue'
import PlanHome from '../views/planholder/content/PlanHome.vue'
import PlanService from '../views/planholder/content/PlanService.vue'
import PlanMessage from '../views/planholder/content/PlanMessage.vue'
import PlanFeedback from '../views/planholder/content/PlanFeedback.vue'



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
    path: '/planholder', // Add a new route for registration
    name: 'planholder',
    component: Planholder,
    meta:{ requiresAuth: true, allowedRoles: ['PlanHolder'] },
    children:[
      {
        path: 'home',
        name: 'planholder-home',
        component: PlanHome
      },
      {
        path: 'service',
        name: 'planholder-service',
        component: PlanService
      },
      {
        path: 'message',
        name: 'planholder-message',
        component: PlanMessage
      },
      {
        path: 'feedback',
        name: 'planholder-feedback',
        component: PlanFeedback
      },
    ]
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
    path: '/planholderr', // Add a new route for registration
    name: 'planholderr',
    component: PlanHolderr,
  },
  {
    path: '/feedbackk', // Add a new route for registration
    name: 'Feedbackk',
    component: Feedbackk,
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
  {
    path: '/announcement', // Add a new route for registration
    name: 'Announcenment',
    component: Announcement,
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