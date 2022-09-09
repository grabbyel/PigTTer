import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import logo from '../../assets/logo_blanco_cerdo.png'

function PigComponent() {
  const [show, setShow] = useState(false);
  const [tweetContent, setTweetContent] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTextChange = (e) => {
    e.preventDefault()
    setTweetContent(e.target.value)
    console.log('hola handle')
    console.log(tweetContent)
  }

  const tweetear = (e) => {
    e.preventDefault()
    console.log('hola tweetear')
    console.log(tweetContent)
    handleClose()
  }

  return (
    <>
    <form onSubmit={tweetear}>
      <input/>
      <button></button>
    </form>
      {/* <Button className='btn btn-primary w-75 mt-5 rounded-5 fs-4' variant="primary" onClick={handleShow}>
        <span className="fs-4 ms-1 d-none d-md-inline w-fit-content" style={{color: 'white'}}>Pigttear</span> 
        <span className="d-md-none"><img width="50" src={logo} alt="cerdo" /> </span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Que te ocurre, criatura?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={tweetear}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              
            >
              <Form.Label>¡Pigttea aquí!</Form.Label>
              <Form.Control
              onChange={handleTextChange}
              value={tweetContent} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded-5' variant="secondary" onClick={handleClose}>
            No Pigttear
          </Button>
          <Button className='rounded-5' variant="primary" type="submit">
            Pigttear
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default PigComponent;
