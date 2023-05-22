import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBurTLybQZ8XVUxqNRuuPm0oJ8GluikH9U",
  authDomain: "react-ecommerce-ea528.firebaseapp.com",
  projectId: "react-ecommerce-ea528",
  storageBucket: "react-ecommerce-ea528.appspot.com",
  messagingSenderId: "742829687123",
  appId: "1:742829687123:web:f2bd2e1ff3d67a108521a6"
}


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

