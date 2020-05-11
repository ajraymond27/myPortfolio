import React from 'react';
import Modal from 'react-bootstrap/Modal';


export default function CardPopup(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4>{props.project.project}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.project.brief}</p>
          <p>{props.project.description}</p>
          <p>{props.project.skills}</p>
        </Modal.Body>
      </Modal>
    );
  }
  
  