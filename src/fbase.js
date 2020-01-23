import Rebase from "re-base";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGBTVHAZk9Oe3Z5VwfJUfGM-Kk4eehA-E",
  authDomain: "bookstore-de26c.firebaseapp.com",
  databaseURL: "https://bookstore-de26c.firebaseio.com",
  projectId: "bookstore-de26c",
  storageBucket: "bookstore-de26c.appspot.com",
  messagingSenderId: "230943787353",
  appId: "1:230943787353:web:28dd44bed29c24caece448",
  measurementId: "G-36YDKKLBF9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fbase = Rebase.createClass(firebaseApp.database());

export { firebaseApp, fbase };
