'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'
import styles from '@/app/ui/login/login.module.css'

const GoogleLoginPage = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log('Token state changed:', token);
  }, [token]);


  useEffect(() => {
    // Check for the state and code parameters in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const code = urlParams.get('code');
    console.log('state', state)
    console.log('token', code)

    
    if (state && code) {
      // Make a request to your backend to exchange the code for an access token
      const fetchToken = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:7000/api/v1/callback' + location.search, {});
          // setToken(response.data.access_token)
          
          return response
        }
        catch (error) {
          console.error('error!!!!!!', error)
        }
      } ;
      fetchToken().then((response) => {
          console.log(response)
          const accessToken = response.data.access_token;
          setLoading(false);
          // Set the access token in your state or perform other actions as needed
          setToken(accessToken);
        
        })
    }
  }, []);


  return (
    <div className={styles.loginContainer}>
      
      {loading ? (
        <h1>Login 중....</h1>
      ) : (
        <>
          <h1>Login 성공! </h1>
          <p>토큰: {token}</p>
          <Link href="/dashboard" legacyBehavior>
              <button>Go to Dashboard</button>
          </Link>
        </>
      )}
    </div>
  );
  
};

export default GoogleLoginPage;
