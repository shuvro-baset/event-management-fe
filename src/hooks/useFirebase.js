import React, { useState } from 'react';
import initializeAuthentication from '../firebase/firebase.initialize'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

// initialize firebase authentication.
initializeAuthentication()

  const auth = getAuth();
  // auth provider object for google, github and facebook.
  const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {

     // use State method for user, name, email, password, error, message
  const [user, setUser] = useState({})
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  // Google signIn handler function.
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
      
  };
    return {
        user, name, email, handleGoogleSignIn
    }
};

export default useFirebase;