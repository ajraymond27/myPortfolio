import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardGroups from '../components/CardGroups';

import tech from '../data/tech';

const main ={

}

const intro ={
  textAlign: 'center',
  color: 'var(--base3)',
}

const skills = {
  background: 'var(--orange)',
  opacity: '100%',
  padding: 10,
  color: '#fff',
  textAlign: 'center',
}

const white={
  color: '#fff',
}

export default class Home extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      tech
    }
  }
  render() {

  // const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container">
      <Head>
        <title>Technology</title>
      </Head>
      <Header />
      <main style={main}>

      <h2>Technology</h2>
      <p style={intro}>Through independent, volunteer, and freelance projects, I have been building my tech skills over the past year </p>

      <div style={skills}>
        <h4 style={white}>Programming and Scripting </h4>
        <p>Python, JS, HTML5, CSS3</p>
        <h4 style={white}>Analytics </h4>
        <p>Scikit-learn, TensorFlow, NLTK, Matplotlib, R, Tableau, Excel, SPSS Modeler</p>
        <h4 style={white}>Databases </h4>
        <p>MySQL</p>
        <h4 style={white}>Tools and Platforms </h4>
        <p>AWS, DigitalOcean, Vercel, Git, VS Code, Jupyter, Postman, Slack</p>
        <h4 style={white}>Soft Skills </h4>
        <p>Design Thinking, UX Testing, Agile, Idea Pitching, Innovation</p>
      </div>
      {this.state.tech.map((tech) => (
            <CardGroups tech={tech} />
          ))}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
}
