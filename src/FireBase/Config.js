import  firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore' 


var firebaseConfig = {
    apiKey: "AIzaSyCNT01q0D6zP-toPnKg0QDqEoBEMCnKrxQ",
    authDomain: "firegram-f7bee.firebaseapp.com",
    projectId: "firegram-f7bee",
    storageBucket: "firegram-f7bee.appspot.com",
    messagingSenderId: "585720435524",
    appId: "1:585720435524:web:e04544d80fc54f2d6c3d11"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };