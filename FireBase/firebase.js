// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqN16ijyue_npSR1gI7pMiqT-KYoW38YI",
  authDomain: "labmad-3420e.firebaseapp.com",
  projectId: "labmad-3420e",
  storageBucket: "labmad-3420e.appspot.com",
  messagingSenderId: "492845636834",
  appId: "1:492845636834:web:1f225d3634de12c2b452bb",
  measurementId: "G-M2222W5TEB",
  databaseURL: "https://labmad-3420e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;