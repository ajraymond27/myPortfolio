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
  color: 'var(--base2)',
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Art</title>
      </Head>
      <Header />
      <main style={main}>
        <h4>Art</h4>
        <p style={intro}>all beauty stems from nature</p>
        <p style={intro}>so I go straight to the source</p>
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
