import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBhJ4DpM90nN1ke-IooaxFnEllvkf7DTl8",
  authDomain: "starbucks-clone-9ce2c.firebaseapp.com",
  projectId: "starbucks-clone-9ce2c",
  storageBucket: "starbucks-clone-9ce2c.appspot.com",
  messagingSenderId: "922557672911",
  appId: "1:922557672911:web:0102b32eb532d7a02a76ba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };