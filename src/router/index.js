import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import BookInfo from "@/views/BookInfo.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/book/:id", component: BookInfo },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
