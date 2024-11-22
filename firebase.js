import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Function to post live scores
export const updateScore = (matchId, score) => {
  db.collection("liveScores").doc(matchId).set({
    score,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
