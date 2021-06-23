// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBz8CVYMSnLv-W4eTmaw6uDXF_H6ntUnvo",
    authDomain: "twitter-clone-91735.firebaseapp.com",
    projectId: "twitter-clone-91735",
    storageBucket: "twitter-clone-91735.appspot.com",
    messagingSenderId: "150997061103",
    appId: "1:150997061103:web:58bb4cbfbab2d09fc67a1a",
    measurementId: "G-QWPRFZL913"
  };
  const firebaseAppConfig=firebase.initializeApp(firebaseConfig);
  const db=firebaseAppConfig.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth , storage , provider}
  export default db;