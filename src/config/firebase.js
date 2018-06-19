import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDPBuO9ua-gFBO1BHdLnbDcZXsP8u7GewM",
  authDomain: "semanadacomputacao-44e98.firebaseapp.com",
  databaseURL: "https://semanadacomputacao-44e98.firebaseio.com",
  projectId: "semanadacomputacao-44e98",
  storageBucket: "semanadacomputacao-44e98.appspot.com",
  messagingSenderId: "868019117900"
};

export default app = firebase.apps.length ? firebase.app() : firebase.initializeApp(config)
