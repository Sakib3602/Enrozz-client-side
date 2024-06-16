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
  const [person, setPerson] = useState("");
  const [forCart,setForCart] = useState(false)
  // create user singup
  const SingEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logOut
  const logOut = () => {
    return signOut(auth)
  };
  const updateUserData = (name, image) => {
    
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // google

  const google = ()=>{
    return signInWithPopup(auth, provider)
  }

  //   on Auth s
  useEffect(() => {
    const DeleteIt = onAuthStateChanged(auth, (user) => {
      if (user) {
        setPerson(user);
        console.log(user, "ok");
        //
      } else {
        setPerson("");
      }
    });

    return () => {
      DeleteIt();
    };
  }, []);

  const info = {
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
