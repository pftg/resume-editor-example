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

import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

import TextField from "@/components/TextField";
import PageDetails from "@/components/PageDetails";
import BaseLayout from "@/components/BaseLayout.vue";

Vue.component("text-field", TextField);
Vue.component("page-details", PageDetails);
Vue.component("base-layout", BaseLayout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
