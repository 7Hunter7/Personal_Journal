// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhRWCF-DgJtJBxarFqGuZo3N7GszeQC4E",
  authDomain: "my-personal-journal-1.firebaseapp.com",
  projectId: "my-personal-journal-1",
  storageBucket: "my-personal-journal-1.firebasestorage.app",
  messagingSenderId: "734497113822",
  appId: "1:734497113822:web:87ab78cdca418e9f44644f",
  measurementId: "G-41VJJ9PN3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);