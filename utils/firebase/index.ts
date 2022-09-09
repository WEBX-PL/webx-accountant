import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CONFIG || "{}"
);

const apps = getApps();
const app = apps?.length ? apps[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
