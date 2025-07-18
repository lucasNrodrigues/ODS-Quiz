import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDgJXxgXxgXxgXxgXxgXxgXxgXxgXxgXx", // substitua pela sua chave real
  authDomain: "mylucas.firebaseapp.com",
  projectId: "mylucas",
  storageBucket: "mylucas.appspot.com",
  messagingSenderId: "827662171982",
  appId: "1:827662171982:web:xxxxxxxxxxxxxxxx" // substitua pelo seu App ID real
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
