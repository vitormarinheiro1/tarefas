import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwz6eMbZ2II8m1DyKWcbJnhOrteJQB78s",
  authDomain: "tarefas-894bf.firebaseapp.com",
  projectId: "tarefas-894bf",
  storageBucket: "tarefas-894bf.appspot.com",
  messagingSenderId: "302680753965",
  appId: "1:302680753965:web:a1d4ca426500d8e491b5a4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };