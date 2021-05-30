import KEY from "./firebaseConfig.js";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: KEY.FIREBASE_API_KEY,
  authDomain: KEY.FIREBASE_AUTH_DOMAIN,
  projectId: KEY.FIREBASE_PROJECT_ID,
  storageBucket: KEY.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: KEY.FIREBASE_MESSAGING_SENDER_ID,
  appId: KEY.FIREBASE_APP_ID,
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
