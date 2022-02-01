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
        <h2>AR</h2>
        <div>
          <a rel="ar" href="https://developer.apple.com/augmented-reality/quick-look/models/cosmonaut/CosmonautSuit_en.reality">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" style={content}/>
          </a>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
