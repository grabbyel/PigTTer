import React, { useRef, useState } from "react";
import registerService from "../../services/user";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // comprobación de coincidencia de contraseñas
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  function checkPassword(){
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    return password===confirmPassword;
  }

  const handleChangeUser = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleChangePass = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const register = async (e) => {
    e.preventDefault();

    if (checkPassword()){
      const usuario = await registerService.register({ username, name, password });
      handleClose();
    } else {
      alert('¡Las contraseñas deben coincidir!')
    }

  };

  return (
    <>
      <Button
        className="boton-auth btn btn-primary mt-5 rounded-5 fs-4 "
        variant="primary"
        onClick={handleShow}
      >
        {/* <span className="fs-4 ms-1 d-none d-md-inline w-fit-content">Pigttear</span> */}
        {/* <span className="d-md-none"><img width="50" src={logo} alt="cerdo" /> </span> */}
        Registrarse
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Registro de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={register}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre y apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej. Juan Pérez"
                autoFocus
                onChange={handleChangeName}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej. Ninja Pig. Este será tu usuario para logearte"
                autoFocus
                onChange={handleChangeUser}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Mínimo 5 caracteres"
                onChange={handleChangePass}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Repite contraseña</Form.Label>
              <Form.Control
                ref={confirmPasswordRef}
                type="password"
                required
              />
            </Form.Group>
            <Modal.Footer className="border-0">
              <Button
                className="rounded-5"
                variant="secondary"
                onClick={handleClose}
              >
                Ondevá?
              </Button>
              <Button className="rounded-5" variant="primary" type="submit">
                Registrarse
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterComponent;