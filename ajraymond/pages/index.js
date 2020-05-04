import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello Universe</title>
      </Head>

      <main>
        Hello Universe
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
