// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5jHmVin30w9hjc8fWy295QZwYoWAjokU",
  authDomain: "quora-clone-ca3cc.firebaseapp.com",
  projectId: "quora-clone-ca3cc",
  storageBucket: "quora-clone-ca3cc.appspot.com",
  messagingSenderId: "447064755383",
  appId: "1:447064755383:web:69d7edb43d7a6cb09e5132"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
