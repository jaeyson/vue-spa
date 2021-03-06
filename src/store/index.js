import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import firebase from "firebase";
import "firebase/auth";

Vue.use(Vuex);

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
});

const auth = firebase.auth();

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
    message: ""
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    userLogin({ commit }, { email, password }) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/login");
        });
    },
    userLogout({ commit }) {
      auth
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/login");
          console.log("logout successful");
        })
        .catch(error => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/login");
          console.log(error);
        });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },
  modules: {}
});
