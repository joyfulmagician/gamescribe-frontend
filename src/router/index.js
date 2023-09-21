import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import TermsPage from "@/views/TermsPage.vue";
import PrivacyPage from "@/views/PrivacyPage.vue";
import ChatPage from "@/views/ChatPage.vue";

const baseUrl = 'https://game-scribe-frontend.vercel.app';

const routes = [
  {
    path: baseUrl + "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: baseUrl + "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: baseUrl + "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: baseUrl + "/terms",
    name: "Terms",
    component: TermsPage,
  },
  {
    path: baseUrl + "/privacy",
    name: "Privacy",
    component: PrivacyPage,
  },
  {
    path: baseUrl + "/chat",
    name: "chat",
    component: ChatPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;