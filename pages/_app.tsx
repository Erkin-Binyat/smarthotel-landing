"use client"
import 'bootstrap/dist/css/bootstrap.css'
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import AOS from "aos";
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';

function App({ Component, pageProps }: AppProps) {  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
      duration: 600
    });
  }, []);
  
  return <>
    <Component {...pageProps} /><ToastContainer/>
  </>
}

export default appWithTranslation(App);