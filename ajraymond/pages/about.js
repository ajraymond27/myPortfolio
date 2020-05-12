import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const main ={

}

const content ={

}

const education ={
  minWidth: '40%',
  margin: 5,
  border: 'none',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.19)',
  color: 'var(--base2)',
}
const experience ={
  minWidth: '80%',
  margin: 5,
  border: 'none',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.19)',
  color: 'var(--base2)',
}


const aj ={
  width: '200px',
  borderRadius: '100px',
  margin: '0 auto',
  textAlign: 'center',
  display: 'flex',
}
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <main style={main}>
        <Header />
        <div style={content}>
          <img src='./aj.jpg' style={aj}/>
          <h2>A.J. Raymond</h2>
          <p style={{color: 'var(--base3)'}}>Technical innovator with 2 years experience in both professional and freelance environments. Proven ability to extract features from complex datasets, tune machine learning models, and visualize new discoveries to present in an easy-to-understand format. Seeking a technical role as a data analyst or software developer for a company where consistent challenges are faced with bold innovation.</p>
          <h4>Education</h4>

          <CardGroup>

          <Card style={education}>
            <Card.Body>
              <Card.Title>Indiana University, Kelley School of Business</Card.Title>
              <Card.Text style={{fontWeight: 'bold'}}>
                <span>May 2019</span> 
                <span style={{marginLeft: '20px'}}>3.31 / 4.00</span>
              </Card.Text>
              <Card.Text >
                <span>Master of Science in Information Systems: Business Intelligence and Analytics</span> 
            </Card.Text>
            </Card.Body>
          </Card>

          <Card style={education}>
            <Card.Body>
              <Card.Title>Indiana University, Kelley School of Business</Card.Title>
              <Card.Text style={{fontWeight: 'bold'}}>
                <span>May 2018</span> 
                <span style={{marginLeft: '20px'}}>3.43 / 4.00</span>
              </Card.Text>
              <Card.Text >
                <span>Bachelor of Science in Business: Entrepreneurship and Corporate Innovation</span> 
            </Card.Text>
            </Card.Body>
          </Card>

          <Card style={education}>
            <Card.Body>
              <Card.Title>Indiana University, Kelley School of Business</Card.Title>
              <Card.Text style={{fontWeight: 'bold'}}>
                <span>May 2018</span> 
                <span style={{marginLeft: '20px'}}>3.43 / 4.00</span>
              </Card.Text>
              <Card.Text >
                <span>Bachelor of Science in Business: Operations Management </span> 
            </Card.Text>
            </Card.Body>
          </Card>

          </CardGroup>

          <h4>Experience</h4>

          <CardGroup>

            <Card style={experience}>
              <Card.Body>

                <Card.Title>Freelance Developer - Bloomington, IN</Card.Title>
                <Card.Text style={{fontWeight: 'bold'}}>
                  <span>#RealHeroesNeedMasks</span> 
                  <span style={{marginLeft: '20px'}}>March 2020 - Present</span>
                </Card.Text>
                <Card.Text >
                  <ul>
                    <li>Raising awareness of the shortage of personal protective equipment (PPE) facing healthcare professionals globally while distributing over 55,000 masks fairly to hospitals and facilities across 10 states</li>
                    <li>Centralized all data, media, and information online allowing people to get involved on social media, donate through several forms, or participate with several similar organizations</li>
                 </ul>
              </Card.Text>

              <Card.Text style={{fontWeight: 'bold'}}>
                  <span>Metrix.News</span> 
                  <span style={{marginLeft: '20px'}}>January 2018 - February 2020</span>
                </Card.Text>
                <Card.Text >
                  <ul>
                    <li>Founded and managed an entrepreneurial venture to address five key issues facing political media </li>
                    <li>Awarded “Best Entrepreneurial Venture” by Spine Sweat Experience venture capitalists and placed as Semi-Finalist in Stu Clark Investment Competition against an international field </li>
                    <li>Designed and implemented four NLP models and trained a gradient boosted classifier to analyze daily political news stories for tone, emotion, bias, and more</li>
                 </ul>
              </Card.Text>

              <Card.Text style={{fontWeight: 'bold'}}>
                  <span>Cardno - Native Plant Nursery</span> 
                  <span style={{marginLeft: '20px'}}>January 2019 - May 2019</span>
                </Card.Text>
                <Card.Text >
                  <ul>
                    <li>Analyzed Cardno’s Native Plant Nursery data and operations to prevent hundreds of invasive plant species from spreading by emphasizing data integrity through a mobile web app</li>
                    <li>Acted as product owner with four other developers to design, develop, test, and deploy solutions in AWS using scrum methods</li>
                 </ul>
              </Card.Text>
              
              </Card.Body>
            </Card>

            <Card style={experience}>
              <Card.Body>
                <Card.Title>Aon Risk Solutions - Chicago, IL</Card.Title>
                <Card.Text style={{fontWeight: 'bold'}}>
                  <span>IT Business Analyst Intern</span> 
                  <span style={{marginLeft: '20px'}}>June 2017 - August 2017</span>
                </Card.Text>
                <Card.Text >
                  <ul>
                      <li>Collected and analyzed meta data from the CIOs of Asia, Europe, North America, and South America in order to establish a single source of truth in Aon’s application landscape from its 40 business lines</li>
                      <li>Collaborated with an international team of six developers to structure a new application taxonomy in ServiceNow to onboard newly acquired companies more efficiently</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>



        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
