import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import "./registerServiceWorker";

import "@/assets/css/application.scss";
import "@/assets/css/_components.scss";

Vue.config.productionTip = false;

import moment from "moment";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MMM YY");
  }
});

import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

Vue.component("base-layout", require("@/components/BaseLayout").default);
Vue.component("page-details", require("@/components/PageDetails").default);
Vue.component("text-field", require("@/components/BaseTextField").default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
