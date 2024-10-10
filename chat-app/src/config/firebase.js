// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {doc, getFirestore, setDoc} from 'firebase/firestore';
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
    //api key
  apiKey: "AIzaSyAJmVv12puaqY9Wp4gx-2Cf7TYzaID-Wcc",
  authDomain: "chat-app-15s.firebaseapp.com",
  projectId: "chat-app-15s",
  storageBucket: "chat-app-15s.appspot.com",
  messagingSenderId: "374805289267",
  appId: "1:374805289267:web:f3828da871873354548646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//create account------------------------

const signup = async (username,email,password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastSeen: Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
         chatData:[]
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

//---------------------log in------------------

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

//------------------logout------------

const logout = async ()=>{
 try {
    await  signOut(auth);
 }catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
}
 
   
}

export {signup, login,logout, auth, db};