import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyD0k2Ugk5k_dp28FhIqCfeCy03_tyDCGGE",
    authDomain: "ecommerce-gabrielaguirre.firebaseapp.com",
    projectId: "ecommerce-gabrielaguirre",
    storageBucket: "ecommerce-gabrielaguirre.appspot.com",
    messagingSenderId: "142309112454",
    appId: "1:142309112454:web:af1120b40c8c2d81246f07"
    });

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}


