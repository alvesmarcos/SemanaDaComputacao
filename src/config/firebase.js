import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAQDgHESlS1P1WxXO77bwyyiS1PJ66-DNc",
  authDomain: "semanadacomputacao-e5eb3.firebaseapp.com",
  databaseURL: "https://semanadacomputacao-e5eb3.firebaseio.com",
  projectId: "semanadacomputacao-e5eb3",
  storageBucket: "",
  messagingSenderId: "258049249836"
};

export default app = firebase.apps.length ? firebase.app() : firebase.initializeApp(config)
