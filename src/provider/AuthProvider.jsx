import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxios from "../hook/useAxios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const axiosInstance = useAxios();

  const providerGoogle = new GoogleAuthProvider();

  // Signin methods
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Signup method
  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo);
  };

  // Tracing current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      if (currUser) {
        axiosInstance.post("/jwt", { email: currUser.email }).then(() => {
          setLoading(false);
        });
      } else {
        axiosInstance.post("/logout").then(() => {
          setLoading(false);
        });
      }
    });
    return () => unSubscribe();
  }, []);
  // Signout method
  const signoutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    signinWithGoogle,
    signinUser,
    signupUser,
    updateUserProfile,
    signoutUser,
    loading,
    setLoading,
    isLoading,
    setIsLoading,
    isDark,
    setIsDark,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
