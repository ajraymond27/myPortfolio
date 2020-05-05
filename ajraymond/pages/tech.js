import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

import Header from '../components/Header';
import CardGroups from '../components/CardGroups';


const main ={


}
const intro ={
  textAlign: 'center',
  color: 'var(--base1)',
}

const skills = {
  background: 'var(--orange)',
  padding: 20,
  color: '#fff',
  textAlign: 'center',
}

const white={
  color: '#fff',
}






// function App() {

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <Popup
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }


export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container">
      <Head>
        <title>Technology</title>
      </Head>
      <Header />
      <main style={main}>

      <h4>Technology</h4>
      <p style={intro}>simply visualize complex analytics</p>
      <p style={intro}>face consistent challenges with bold innovation</p>

      <div style={skills}>
        <h4 style={white}>Programming and Scripting </h4>
        <p>Python, JS, Java, HTML5, CSS3</p>
        <h4 style={white}>Analytics </h4>
        <p>Scikit-learn, TensorFlow, NLTK, Matplotlib, R, Tableau, Excel, SPSS Modeler</p>
        <h4 style={white}>Databases </h4>
        <p>MySQL</p>
        <h4 style={white}>Tools and Platforms </h4>
        <p>AWS, DigitalOcean, Vercel, Git, VS Code, Jupyter, Postman, Slack</p>
      </div>

      <CardGroups />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
