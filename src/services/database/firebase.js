import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWozZb88L2577Nu_T6031t2yvAE_w_j_M",
  authDomain: "mobile-app-ddm1.firebaseapp.com",
  databaseURL: "https://mobile-app-ddm1-default-rtdb.firebaseio.com",
  projectId: "mobile-app-ddm1",
  storageBucket: "mobile-app-ddm1.appspot.com",
  messagingSenderId: "272803713616",
  appId: "1:272803713616:web:f22e0b4e7baa7359083755"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
});

export const db = getDatabase(app);