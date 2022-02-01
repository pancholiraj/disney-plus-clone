import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArniwMzLTw1Fbhf52b6CGqWbqwuEZFHa4",
  authDomain: "disney-clone-b66f0.firebaseapp.com",
  projectId: "disney-clone-b66f0",
  storageBucket: "disney-clone-b66f0.appspot.com",
  messagingSenderId: "1079717017230",
  appId: "1:1079717017230:web:9714aa0f82bb1d1249bbdf",
  measurementId: "G-6QGXVTDXH5",
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
// const colRef = collection(db, "movies");

// getDocs(colRef).then((snapshot) => {
//   let movies = [];
//   snapshot.docs.forEach((doc) => {
//     movies.push({ ...doc.data() });
//     console.log(doc);
//   });
//   console.log(movies);
// });
