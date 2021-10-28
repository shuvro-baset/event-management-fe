import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.initialize'
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'

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
  const [isLoading, setIsLoading] = useState(true)



  // Google signIn handler function.
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      
  };

   // logout functionality
   const logout = () => {
  signOut(auth)
      .then(() => {
          setUser({});
      })
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
      setIsLoading(false);

    });
    return () => unsubscribe;
  }, [])
    return {
        user, name, email, handleGoogleSignIn, logout, setIsLoading
    }
};

export default useFirebase;