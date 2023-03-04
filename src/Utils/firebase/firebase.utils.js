import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1cGc530kyOfE5QDb6Xx3QgjAt9ENYsSo",
    authDomain: "jahai-clothing-db-49d5c.firebaseapp.com",
    projectId: "jahai-clothing-db-49d5c",
    storageBucket: "jahai-clothing-db-49d5c.appspot.com",
    messagingSenderId: "225246451138",
    appId: "1:225246451138:web:509df23cced57beae3325b"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const signOutUser = async () => signOut(auth);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInfo
            });
        }
        catch (error) {
            console.log('There was an error');
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callBack) => {
    onAuthStateChanged(auth, callBack);
};
