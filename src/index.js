import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD3o2lhVO2NXERUdsHsORPX57JXeVav7Sk",
    authDomain: "evernote-clone-87e71.firebaseapp.com",
    projectId: "evernote-clone-87e71",
    storageBucket: "evernote-clone-87e71.appspot.com",
    messagingSenderId: "700536477492",
    appId: "1:700536477492:web:0df452691a4381e55d7761",
    measurementId: "G-52K8HKZ4CV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
