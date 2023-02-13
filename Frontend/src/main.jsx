import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ0Tvxq8wro4RuXat32ZjehaAf-jpo4_Q",
  authDomain: "members-only-1bfe3.firebaseapp.com",
  projectId: "members-only-1bfe3",
  storageBucket: "members-only-1bfe3.appspot.com",
  messagingSenderId: "524542359248",
  appId: "1:524542359248:web:bc18c827e2eda9007dd0d5",
  measurementId: "G-HXB76WWVRN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
