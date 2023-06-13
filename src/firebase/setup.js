import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBb02u8O0xSzGQynNd_-TzVPp1EnD-VRWo",
    authDomain: "gaigo-6a1df.firebaseapp.com",
    projectId: "gaigo-6a1df",
    storageBucket: "gaigo-6a1df.appspot.com",
    messagingSenderId: "20940403760",
    appId: "1:20940403760:web:8c2f3e815afc343bdb29f5",
    measurementId: "G-C2FH3SXCY7"
};

const app = initializeApp(firebaseConfig);

export { app }