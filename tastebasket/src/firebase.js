// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcd6eNbpGBJYBGDlPGlemwEgtiCqP8g78",
  authDomain: "tastebasket-f340a.firebaseapp.com",
  projectId: "tastebasket-f340a",
  storageBucket: "tastebasket-f340a.appspot.com",
  messagingSenderId: "835978821364",
  appId: "1:835978821364:web:56804f04c54a487a19e8a1",
  measurementId: "G-RJQ856MJM3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);