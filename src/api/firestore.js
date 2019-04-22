import * as firebase from 'firebase/app'

import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAa5Pg61qvaeT9NTpslZNTIlFuAGyeVmUY",
  authDomain: "mini-fruit-ninja.firebaseapp.com",
  databaseURL: "https://mini-fruit-ninja.firebaseio.com",
  projectId: "mini-fruit-ninja",
  storageBucket: "mini-fruit-ninja.appspot.com",
  messagingSenderId: "737855357113"
};

firebase.initializeApp(config)

const db = firebase.firestore()
export default db
