import React from 'react';
import Card from 'react-bootstrap/Card';
import CardPopup from './CardPopup';

const card ={
    minWidth: '30%',
    margin: 5,
  }

export default function Cards(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
        <Card style={card} onClick={() => setModalShow(true)}>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
        </Card>
        <CardPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
      </>
    )
  }


  
  