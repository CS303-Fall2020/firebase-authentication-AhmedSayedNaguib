import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALif9SyBWAYubyMPceSTZWFsSRZypD3DE",
  authDomain: "task-397af.firebaseapp.com",
  databaseURL: "https://task-397af.firebaseio.com",
  projectId: "task-397af",
  storageBucket: "task-397af.appspot.com",
  messagingSenderId: "451460917917",
  appId: "1:451460917917:web:9b3bc18e8f4ccdf4a28274",
  measurementId: "G-C8S75S2HFS"
};

firebase.initializeApp(firebaseConfig);

export default firebase;