import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import TermsPage from "@/views/TermsPage.vue";
import PrivacyPage from "@/views/PrivacyPage.vue";
import ChatPage from "@/views/ChatPage.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;