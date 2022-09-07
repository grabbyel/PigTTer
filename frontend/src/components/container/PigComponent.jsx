import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function PigComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn btn-primary w-100 mt-5 rounded-5 fs-4' variant="primary" onClick={handleShow}>
        Pigttear
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Que te ocurre, criatura?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>¡Pigttea aquí!</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded-5' variant="secondary" onClick={handleClose}>
            No Pigttear
          </Button>
          <Button className='rounded-5' variant="primary" onClick={handleClose}>
            Pigttear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PigComponent;
