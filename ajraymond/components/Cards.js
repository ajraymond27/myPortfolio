import React from 'react';
import Card from 'react-bootstrap/Card';
import CardPopup from './CardPopup';

const card ={
    minWidth: '30%',
    margin: 5,
    border: 'none',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.19)',
    cursor: 'pointer',
    color: 'var(--base2)',
  }

export default function Cards(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
        <Card style={card} onClick={() => setModalShow(true)}>
            <Card.Body>
            <Card.Title >{props.project.project}</Card.Title>
            <Card.Text style={{fontWeight: 'bold'}}>
                {props.project.organization} <br />
                {props.project.dates}
            </Card.Text>
            <Card.Text >
                {props.project.purpose}
            </Card.Text>
            </Card.Body>
        </Card>
        <CardPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
            project = {props.project}
        />
        <style jsx>{`
          .cardstyle {
            min-width: 30%;
            margin: 5px;
            border: none;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.19);
          }
          .cardstyle:hover {
            transform: scale(1.02);
            cursor: pointer;
          }
          `}</style>
    </>
    )
  }


  
  