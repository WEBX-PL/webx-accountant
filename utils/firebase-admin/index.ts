import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const firebaseServiceAccount = JSON.parse(
  process.env.FIREBASE_SA || "{}"
);
const projectId = firebaseServiceAccount["project_id"];

const apps = getApps();
const app = apps?.length
  ? apps[0]
  : initializeApp({
      credential: cert(firebaseServiceAccount),
      databaseURL: `https://${projectId}.firebaseio.com`,
    });

export const db = getFirestore(app);
