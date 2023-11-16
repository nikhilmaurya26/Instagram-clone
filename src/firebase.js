import React from 'react'
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA3aZxKCBboAWVVe1BzHSBTEVQhclSLCRA",
    authDomain: "instagram-clone-3d475.firebaseapp.com",
    projectId: "instagram-clone-3d475",
    storageBucket: "instagram-clone-3d475.appspot.com",
    messagingSenderId: "362879113433",
    appId: "1:362879113433:web:14736684b983e770a8c6c8",
    measurementId: "G-G97XCZKCLB"
  };

  const app =firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const storage = firebase.storage()
  const db = app.firestore()

  export {auth,db,storage}

