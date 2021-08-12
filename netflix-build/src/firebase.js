import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4vosYNs38EDueDZOgfn-Oarm81pEYnJo",
    authDomain: "netflix-build-745d6.firebaseapp.com",
    projectId: "netflix-build-745d6",
    storageBucket: "netflix-build-745d6.appspot.com",
    messagingSenderId: "793774761130",
    appId: "1:793774761130:web:9074f9b30b294daa8a9cd3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;