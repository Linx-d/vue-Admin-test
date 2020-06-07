import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login/login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
