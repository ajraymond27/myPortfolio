import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

import Header from '../components/Header';
import VidScroller from '../components/VidScroller';


const main ={

}

const content ={

}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Art</title>
      </Head>
      <Header />
      <main style={main}>
        <div style={content}>
          <VidScroller />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
