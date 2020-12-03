import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

//We need to seed the database

//Config here
const config ={
    apiKey: "AIzaSyC4iSSW4OKLOOa8AdaRURsc_z9wgBWnC5A",
    authDomain: "webflix-51be8.firebaseapp.com",
    projectId: "webflix-51be8",
    storageBucket: "webflix-51be8.appspot.com",
    messagingSenderId: "601081488808",
    appId: "1:601081488808:web:4b405c1c0000983dca699d"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };