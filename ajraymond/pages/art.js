import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

import Header from '../components/Header';
import VidScroller from '../components/VidScroller';
import ImgGallery from '../components/ImgGallery';

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
          <ImgGallery />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
