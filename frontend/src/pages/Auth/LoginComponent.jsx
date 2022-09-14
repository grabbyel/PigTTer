import React, { useState } from "react"
import loginService from '../../services/login'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const LoginComponent = ({ user, setUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const handleChangeUser = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }


    const handleChangePass = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }


    const login = async (e) => {
        e.preventDefault()
        const usuario = await loginService.login({ username, password })
        if (usuario) {
            setUser(usuario)
            window.localStorage.setItem('loggedUser', JSON.stringify(usuario))
        }
        

    }


    return (
        <>
            <Button className="boton-auth btn btn-primary mt-5 rounded-5 fs-4 " variant="primary" onClick={handleShow}>
                {/* <span className="fs-4 ms-1 d-none d-md-inline w-fit-content">Pigttear</span> */}
                {/* <span className="d-md-none"><img width="50" src={logo} alt="cerdo" /> </span> */}
                Iniciar Sesión
            </Button>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Inicia sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={handleChangeUser}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={handleChangePass}
                                required
                            />
                        </Form.Group>
                        <Modal.Footer className="border-0">
                            <Button className='rounded-5' variant="secondary" onClick={handleClose}>
                                Ondevá?
                            </Button>
                            <Button className='rounded-5' variant="primary" type="submit">
                                Amoadentro
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
// <form onSubmit={login}>
//     <h2>Iniciar Sesión</h2>

//     <label>Nombre de usuario</label>
//     <input onChange={handleChangeUser} type="text" />

//     <label>Contraseña</label>
//     <input onChange={handleChangePass} type="password" />

//     <button>Submit</button>
// </form>

export default LoginComponent;


