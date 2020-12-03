import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

//We need to seed the database

//Config here
const config ={
    apiKey: "AIzaSyC4iSSW4OKLOOa8AdaRURsc_z9wbBWnC5A",
    authDomain: "webflix-51bc8.firebaseapp.com",
    projectId: "webflix-51bc8",
    storageBucket: "webflix-51bc8.appspot.com",
    messagingSenderId: "601081488008",
    appId: "1:601081408808:web:4b405e1c0000983dca699d"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
