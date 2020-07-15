import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import firebase from "firebase";

require("dotenv").config();

Vue.config.productionTip = false;

// firebase.initializeApp({
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
//   projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_FIREBASE_APP_ID
// });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
