import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true) {
    alert("이미 로그인을 하였습니다.")
    next("/") // 홈페이지로 이동
  }
  next() // router 입장 허용
}
const rejectOnlyAuth = (to, from, next) => {
  if(store.state.isLogin === false) {
    alert("로그인을 해주세요.")
    next("/login") // 로그인 페이지로 이동
  }
  next() // router 입장 허용
}
const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: rejectAuthUser,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter: rejectOnlyAuth,
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/Mypage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
