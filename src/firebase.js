import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv_32K4T5SZV8raLDcQnsjk97dXDM0GIY",
  authDomain: "wedding-invitation-dhims.firebaseapp.com",
  projectId: "wedding-invitation-dhims",
  storageBucket: "wedding-invitation-dhims.firebasestorage.app",
  messagingSenderId: "294445007433",
  appId: "1:294445007433:web:4d5d992ae8711f72f1f598"
};

// Inisialisasi Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;