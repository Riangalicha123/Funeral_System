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
import Feedbackk from '../views/Admin/Feedback.vue';
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
    meta:{ requiresAuth: true}
  },
  {
    path: '/planholder', // Add a new route for registration
    name: 'planholder',
    component: Planholder,
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
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async (to, from, next) => {
  const isLoggedin = await checkUserLogin(); // Assuming checkUserLogin is asynchronous
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedin) {
      // Pass the current route as a query parameter for redirection after login
      next({ path: "/login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});
async function checkUserLogin() {
  const userToken = sessionStorage.getItem("token");
  // Simulating an asynchronous check, replace this with your actual async logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!!userToken);
    }, 1000);
  });
}

export default router