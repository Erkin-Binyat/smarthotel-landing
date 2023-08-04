import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Features, Header, Hero, Download, Pricing, Clients, Services, Contact, Footer } from "@/layouts";
import { Preloader } from '@/components';
import Router from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>SmartHotel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      
      {
      loading ? <Preloader /> :
      <>
        <Header />
        <Hero />
        <Features />
        <Download />
        <Pricing />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </>
      }
    </>
  )
};


export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    },
  }
}