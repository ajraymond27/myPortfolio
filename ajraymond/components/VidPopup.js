import React from 'react';
import Video from './Video';
import Modal from 'react-bootstrap/Modal';

const modal ={
    border: 'none',
    backgroundColor: '#000',
    align: 'top',
}

function Content(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={modal}
    >
      <Modal.Header closeButton style={modal} />
      <Modal.Body style={modal}>
          <Video videos={props.videos}/>
      </Modal.Body>
    </Modal>
  );
}

export default function Popup(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <img  onClick={() => setModalShow(true)} src={props.videos.coverImg} className='coverImg'/>

      <Content
        videos = {props.videos}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

  <style jsx>{`
    .coverImg {
      width: 100%;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
    }
    .coverImg:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
    `}</style>
    </>
  );
}