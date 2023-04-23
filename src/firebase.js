import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4L-hdtZ1SwOrJsxayhO0f_RzqCvtJ3sI",
  authDomain: "ataraxia-ed08e.firebaseapp.com",
  projectId: "ataraxia-ed08e",
  storageBucket: "ataraxia-ed08e.appspot.com",
  messagingSenderId: "174136131862",
  appId: "1:174136131862:web:f37377b17a8e1e60745037"
};


const app = initializeApp(firebaseConfig);

export default app