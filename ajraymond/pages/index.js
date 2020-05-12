import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from '../components/NavLink';
import Footer from '../components/Footer';

const main ={
  backgroundImage: 'url("./violet.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '87vh',
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
  width: '250px',
  padding: 15,
  margin: 10,
  textAlign: 'center',
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>A.J. Raymond</title>
      </Head>
      <Header />
      <main style={main}>
        <div style={content}>
          <h2>A.J. Raymond</h2>
          <span>when tech meets art</span><br/>
          <span>an idealist innovator</span><br/>
          <span>seeks to change the world</span>

          <p></p>
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


