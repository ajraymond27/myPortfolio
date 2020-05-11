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
            <Card.Title>{props.project.project}</Card.Title>
            <Card.Text>
                {props.project.brief}
            </Card.Text>
            </Card.Body>
        </Card>
        <CardPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
            project = {props.project}
        />
      </>
    )
  }


  
  