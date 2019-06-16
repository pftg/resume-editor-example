import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import "./registerServiceWorker";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

import moment from "moment";
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MMM YY");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
