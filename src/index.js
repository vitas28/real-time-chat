import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import firebase from 'firebase';
import { Context } from './context/context';

firebase.initializeApp({
  apiKey: "AIzaSyB5TPZMj90mUczuTmUraaNSOvYwN2gdC5Q",
  authDomain: "chat-73bc3.firebaseapp.com",
  projectId: "chat-73bc3",
  storageBucket: "chat-73bc3.appspot.com",
  messagingSenderId: "655303646958",
  appId: "1:655303646958:web:62b5587d7dfad27727ddff",
  measurementId: "G-6BD6QS7BMC"
});


const auth = firebase.auth();
const firestore = firebase.firestore();


ReactDOM.render(
  <Context.Provider value={{
    firebase, auth, firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
