import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Adicionando as importações para doc e setDoc
import { getMessaging, getToken } from "firebase/messaging"; // Adicionando a importação para getToken

const firebaseConfig = {
    apiKey: "AIzaSyCql10VFWN-dfVKT-3hYfHgyM0Ng9vMClQ",
    authDomain: "gestao-times.firebaseapp.com",
    projectId: "gestao-times",
    storageBucket: "gestao-times.appspot.com",
    messagingSenderId: "161931863200",
    appId: "1:161931863200:web:07dd3f12bfcc37219795c5",
    measurementId: "G-R9D2B7Q9CT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

const requestPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" });
    if (token) {
      console.log("Token de notificação recebido:", token);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "members", user.uid), { notificationToken: token }, { merge: true });
      }
    } else {
      console.log("Nenhum token de registro disponível. Permissão não concedida.");
    }
  } catch (error) {
    console.log("Erro ao obter token de notificação:", error);
  }
};

requestPermission();

export { auth, db, messaging };