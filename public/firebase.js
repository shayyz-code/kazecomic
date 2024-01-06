// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase, connectDatabaseEmulator } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChvLfFmv4KBo49J_bbRwYvArMORrf32Ho",
  authDomain: "kazecomics-818a4.firebaseapp.com",
  projectId: "kazecomics-818a4",
  storageBucket: "kazecomics-818a4.appspot.com",
  messagingSenderId: "144172382894",
  appId: "1:144172382894:web:a010b44bab466bedfa4b3f",
  measurementId: "G-ZNKYJM0DVM",
  databaseURL:
    "https://kazecomics-818a4-default-rtdb.asia-southeast1.firebasedatabase.app",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Realtime Database
const database = getDatabase(app)

// if (location.hostname === "localhost") {
//   connectDatabaseEmulator(database, "127.0.0.1", 9000)
// }

export default database
