<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyChkEU2_2Uf3vaSq19jk_5T9WtdVEvRlOE",
  authDomain: "healthcare-meds.firebaseapp.com",
  projectId: "healthcare-meds",
  storageBucket: "healthcare-meds.firebasestorage.app",
  messagingSenderId: "330443949396",
  appId: "1:330443949396:web:a3b34fea1a116c442534c1",
  measurementId: "G-Z2PBQD1BB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Make functions available globally
window.auth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;

// Add a ready event to ensure everything is loaded
window.dispatchEvent(new CustomEvent('firebaseReady'));

=======
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyChkEU2_2Uf3vaSq19jk_5T9WtdVEvRlOE",
  authDomain: "healthcare-meds.firebaseapp.com",
  projectId: "healthcare-meds",
  storageBucket: "healthcare-meds.firebasestorage.app",
  messagingSenderId: "330443949396",
  appId: "1:330443949396:web:a3b34fea1a116c442534c1",
  measurementId: "G-Z2PBQD1BB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Make functions available globally
window.auth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
>>>>>>> bd6dbf89378b4c18b20d7773bec8ecce57ff5e18
