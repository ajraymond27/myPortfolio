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

const intro ={
  textAlign: 'center',
  color: 'var(--base3)',
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Photography</title>
      </Head>
      <Header />
      <main style={main}>
        <h2>Photography</h2>
        <p style={intro}>As a hobby, I enjoy hiking in the wilderness with my camera and friends</p>
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
