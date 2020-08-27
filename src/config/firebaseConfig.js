import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjvyX1IqarZsFSyNu2WQ_p8pilH6q2qxs",
  authDomain: "event-blog-990d4.firebaseapp.com",
  databaseURL: "https://event-blog-990d4.firebaseio.com",
  projectId: "event-blog-990d4",
  storageBucket: "event-blog-990d4.appspot.com",
  messagingSenderId: "333959616825",
  appId: "1:333959616825:web:9046d989508506be85f0e8",
  measurementId: "G-0YW1B43GQN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
