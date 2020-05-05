import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


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

const card ={
  minWidth: '30%',
  margin: 5,
}


export default function Home() {
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

        <h4>Data Science</h4>
        <CardGroup>
          <Card style={card}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={card}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={card}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={card}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
      </CardGroup>

      <h4>UI / UX</h4>
      <CardGroup>
          <Card style={card}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={card}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={card}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={card}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
      </CardGroup>


      </main>

      <footer>

      </footer>
    </div>
  )
}
