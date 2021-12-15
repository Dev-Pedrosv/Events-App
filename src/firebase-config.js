import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDYJGRBI-YhkPM1C4HvjlfpGQePeXCfFpE",
    authDomain: "authentication-mblabs.firebaseapp.com",
    projectId: "authentication-mblabs",
    storageBucket: "authentication-mblabs.appspot.com",
    messagingSenderId: "909735578747",
    appId: "1:909735578747:web:935c85e95532db2e50a6de",
    measurementId: "G-EM49VLTLLK"
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
