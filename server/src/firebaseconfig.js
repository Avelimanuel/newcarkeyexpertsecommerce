import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDMMJ1ZNmeZ6ZRgBqObN54IBNRUginPVB8",
  authDomain: "car-key-ecommerce.firebaseapp.com",
  projectId: "car-key-ecommerce",
  storageBucket: "car-key-ecommerce.appspot.com",
  messagingSenderId: "4840146925",
  appId: "1:4840146925:web:0730a98072f4c7689a09e4",
  measurementId: "G-JG1MV84Z2J",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export { ref, uploadBytesResumable, getDownloadURL };

