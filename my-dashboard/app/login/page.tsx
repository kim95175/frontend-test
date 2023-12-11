'use client';

import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '@/app/ui/login/login.module.css'
// import Link from 'next/link'

const LoginPage = () => {
  const [authUrl, setAuthUrl] = useState('');
  // const router = useRouter();


  useEffect(() => {
    console.log('authUrl state changed:', authUrl);
  }, [authUrl]);

  useEffect(() => {
    const fetchAuthUrl = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:7000/api/v1/authorize', {
          params: {
            'authorize_redirect_url': "http://127.0.0.1:3000/login/success",
          },
          headers: {
            'Accept': 'application/json',
          },
        });
        const data = response.data;
        setAuthUrl(data.authorization_url);
      } catch (error) {
        console.error('Error fetching OAuth URL:', error);
      }
    };
    fetchAuthUrl();
  }, []);

  const handleAuthorize = () => {
    // Redirect to the authorization URL
    window.location.href = authUrl;
  };

  return (
    <div className={styles.container}>
      <div className={styles.centercontainer}>
        <form action="" className={styles.form}>
          <h1>Login</h1>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
        <button className={styles.googlebutton} onClick={handleAuthorize}>Google Login</button>
      </div>
    </div>

  );
};

export default LoginPage;