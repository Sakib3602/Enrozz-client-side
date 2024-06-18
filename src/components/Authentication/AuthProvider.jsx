import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [person, setPerson] = useState(null);
  const [forCart,setForCart] = useState(false)
  const [loading , setLoading] = useState(true)
  // create user singup
  const SingEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  };
  const updateUserData = (name, image) => {
    setLoading(true);
    
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // google

  const google = ()=>{
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  // 
  

  //   on Auth s
  useEffect(() => {
    const DeleteIt = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setPerson(user);
        console.log(user, "ok");
        //
      } else {
        setLoading(false);
        setPerson("");
      }
    });

    return () => {
      DeleteIt();
    };
  }, []);

  const info = {
    loading,
    SingEmailPass,
    logOut,
    signIn,
    person,
    updateUserData,
    google,
    setForCart,
    forCart,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
