import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "@babel/polyfill"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
    this.$store.dispatch("getMemberInfo")
  },
  render: (h) => h(App)
}).$mount("#app")
