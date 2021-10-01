/* eslint-disable no-unused-vars */
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIPpgQOMLFRyUVgwTlYjp4pBqx3Jfrfq4",
  authDomain: "share-b4ff4.firebaseapp.com",
  projectId: "share-b4ff4",
  storageBucket: "share-b4ff4.appspot.com",
  messagingSenderId: "318445267018",
  appId: "1:318445267018:web:8e60893fac61f3d612deb3",
  measurementId: "G-J33QG5YD7F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

