import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import TermsPage from "@/views/TermsPage.vue";
import PrivacyPage from "@/views/PrivacyPage.vue";
import ChatPage from "@/views/ChatPage.vue";
import MarketPlace from "@/views/MarketPlace.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { requiresAuth: false, landingPage: true, title: ` ⊹ GameScribe` }
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/terms",
    name: "Terms",
    component: TermsPage,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: PrivacyPage,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatPage,
  },
  {
    path: "/marketplace",
    name: "marketplace",
    component: MarketPlace,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const DEFAULT_TITLE = ""
router.beforeEach(async (to, from, next) => {
    document.title = typeof (to.meta?.title) === 'string' ? DEFAULT_TITLE + to.meta?.title.toString() : DEFAULT_TITLE;
    next();
})


export default router;