import React from 'react';
import Modal from 'react-bootstrap/Modal';

const header = {
  color: 'var(--base3)',
  fontWeight: 'bold',
  width: '100%',

}

const links ={
  // display: 'flex',
  // justifyContent: 'space-around',
}


export default function CardPopup(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{borderBottom: 'solid 1px var(--orange)'}}>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4>{props.project.project}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={header}>
                  {props.project.organization} <br />
                  {props.project.dates}<br />
                  {props.project.skills}
          </p>
          <p >{props.project.brief}</p>
          <p >{props.project.purpose}</p>
          <p>{props.project.description}</p> 
          <div style={links}>
            <a href={props.project.repository}>{props.project.repository}</a><br />
            <a href={props.project.link1}>{props.project.link1}</a><br />
            <a href={props.project.link2} >{props.project.link2}</a>       
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  
  