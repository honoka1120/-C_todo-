import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
Vue.config.productionTip = false
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDkbappHTM02ID2pyx8UNkgRJz7akpbRsA",
    authDomain: "groupc-todo.firebaseapp.com",
    projectId: "groupc-todo",
    storageBucket: "groupc-todo.appspot.com",
    messagingSenderId: "366569889664",
    appId: "1:366569889664:web:287becb3c77449d7ecab65",
    measurementId: "G-MGWNE7HGH1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
