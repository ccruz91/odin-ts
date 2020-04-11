import React, { useEffect, useState, useContext, createContext } from 'react';
import { setAccessToken } from './accessToken';

const AuthContext = createContext({})

// Intended to wrap something high level, probably <App />, so children can access auth object
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{ children }</AuthContext.Provider>
}

// Hook intended for child components to access the auth object and re-render when it changes
export const useAuth = () => {
  return useContext(AuthContext)
}

const useProvideAuth = () => {
  // loading defaults to true; intended to run when <App /> mounts
  const [loading, setLoading] = useState(true); 
  const [user, setUser] = useState({});
  
  const signIn = () => {};
  const signOut = () => {};
  const signUp = () => {};
  const sendPasswordResetEmail = () => {};
  const confirmPasswordReset = () => {};

  useEffect(() => {
    // intended to be called when <App /> mounts. If a valid refresh_token is in the cookie, 
    // we fetch and store a access_token.
    fetch("http://localhost:4000/access_token", {
      method: "POST",
      credentials: "include"
    }).then(async response => {
      const { access_token, email } = await response.json();
      setAccessToken(access_token);
      setUser({email})
      setLoading(false);
    }).catch(err => {
      console.error('unable to connect to auth server', err)
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return {
    loading,
    user,
    signIn,
    signOut,
    signUp,
    sendPasswordResetEmail,
    confirmPasswordReset
  }
}

