import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBU8Y-QjijG6XEA3XyPdtlKluDxkXYNMyY",
  authDomain: "faculty-connect.firebaseapp.com",
  projectId: "faculty-connect",
  storageBucket: "faculty-connect.appspot.com",
  messagingSenderId: "718542881188",
  appId: "1:718542881188:web:8dc394c952fecbedb64131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);







export const auth=getAuth(app);
export const googleProvider= new GoogleAuthProvider();
export const emailJsConfig = {
  serviceId: 'service_ze02s2b',
  templateId: 'template_4od35ut',
  userEmail: 'varshinis1812@gmail.com',
};
export const db = getFirestore(app);
export const storage = getStorage(app);