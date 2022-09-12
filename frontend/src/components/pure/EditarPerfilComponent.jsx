
import { useState } from "react";
import Button from "react-bootstrap/esm/Button"
import Modal from "react-bootstrap/Modal";

const EditarPerfilComponent = ({name, updateName, image, updateImage, handleNameChange, handleImageChange}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function updateNameRefresh(e) {
        if (name==='' || name===' ') {
            alert('Escribe el nombre bien')
        } else {
            updateName(e);
            handleClose();
        }
    }

    function updateImageRefresh(e) {
        updateImage(e);
        handleClose();
    }

    return(
        <>
            <Button className="btn btn-dark mt-2 rounded-5 fs-6 ms-1 d-none d-md-inline w-fit-content" style={{ color: "white" }} variant="primary" onClick={handleShow}>
                    Editar perfil
            </Button>
            <Button className="btn btn-dark mt-2 rounded-5 fs-5 ms-1 d-md-none w-fit-content" style={{ color: "white" }} variant="primary" onClick={handleShow}>
                    <i className='bi-pencil-square fs-5 text-white' style={ {fontSize:'25px'}}></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <div className="input-group mb-3 mt-3">
                        <input type="text" className="form-control" minLength={3} placeholder="Nuevo nombre" aria-label="Nuevo nombre" aria-describedby="button-addon1" onChange={handleNameChange} value={name}/>
                        <button style={{width:'9rem'}} className=" btn btn-outline-secondary" type="button" id="btnEditName" onClick={updateNameRefresh} >Editar nombre</button>
                    </div>
                    <div className="input-group mb-3 mt-2">
                        <input type="text" className="form-control" placeholder="Pega la url, max 100x100px" aria-label="Nuevo nombre" aria-describedby="button-addon2" onChange={handleImageChange} value={image}/>
                        <button style={{width:'9rem'}} className=" btn btn-outline-secondary" type="button" id="btnEditImage" onClick={updateImageRefresh}>Editar foto</button>
                    </div>
                    <Modal.Footer className="border-0">
                        <Button id="btnCancel" className='rounded-5' variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditarPerfilComponent

