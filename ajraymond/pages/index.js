import Head from 'next/head';
import Header from '../components/Header';
import { useRouter } from 'next/router';


const main ={
  backgroundImage: 'url("./violet.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '95vh',
}

const content ={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: '#fff',
  padding: 10,

}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello Universe</title>
      </Head>
      <main style={main}>
        <Header />
        <div style={content}>
          <h1>Anthony Raymond</h1>
          <h2>innovator, data analyst, artist</h2>
        </div>
      </main>

      <footer>

      </footer>

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
