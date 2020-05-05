import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const main ={

}

const content ={

}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <main style={main}>
        <Header />
        <div style={content}>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
