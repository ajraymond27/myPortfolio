import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from '../components/NavLink';
import Footer from '../components/Footer';


const main ={
  backgroundImage: 'url("./violet.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '98vh',
}

const content ={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: '#fff',
  padding: 10,
  width: '100%',
}

const button ={
  background: '#fff',
  borderRadius: '10px',
  border: 'none',
  color: 'var(--base2)',
  fontWeight: 'bold',
  width: 250,
  padding: 15,
  margin: 10,
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anthony Raymond</title>
      </Head>
      <main style={main}>
        <Header />
        <div style={content}>
          <h1>Anthony Raymond</h1>
          <p>innovator, data analyst, artist</p>
          <Link href="/tech"><button style={button}>Technology Projects</button></Link>
          <Link href="/art"><button style={button}>Artisitic Projects</button></Link>

        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}


