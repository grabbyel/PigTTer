import React, {useState} from "react";
import "./PerfilComponent.css";
import userService from '../../services/user'
import EditarPerfilComponent from "./EditarPerfilComponent";

const PerfilComponent = ({ user, setUser }) => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const updateName = (e) => {
    e.preventDefault()
    // const newUser = {...user, name: name}
    // userService.editar(user.id, newUser)
    // setUser(newUser)
    // window.localStorage.removeItem('loggedUser')
    // window.localStorage.setItem('loggedUser', JSON.stringify(newUser))
    // setName('')
  }

  const updateImage = (e) => {
    e.preventDefault()
    // const newUser = {...user, image: image}
    // userService.editar(user.id, newUser)
    // setUser(newUser)
    // window.localStorage.removeItem('loggedUser')
    // window.localStorage.setItem('loggedUser', JSON.stringify(newUser))
    // setImage('')
  }

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    setImage(e.target.value)
  }
  return (
    <div className="background-div p-4 bg-light row">
      <div className="photo-div col-6">
        <img
          src={user.image ?
           user.image : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"}
          alt="Imagen de usuario"
          className=" img"
        />
      </div>
      <div className="col-12 py-3">
        <h3>{user.name}</h3>
        {/* Actualizar con user.name cuando esté en el registro actualizado */}
        <p>@{user.username}</p>
      </div>
      <div className="col-12">
       <EditarPerfilComponent name={name} handleNameChange={handleNameChange}
         updateName={updateName} updateImage={updateImage}
         image={image} handleImageChange={handleImageChange} />
      </div>

      <div className="botones d-flex justify-content-center align-items-center">
        <p className=" mx-5 fs-5">Tweets</p>
        <p className=" fs-5">Me gusta</p>
      </div>
    </div>
  );
};

export default PerfilComponent;


// {edit 
//   ? <EditarPerfilComponent name={name} handleNameChange={handleNameChange}
//   updateName={updateName} updateImage={updateImage}
//   image={image} handleImageChange={handleImageChange} setEdit={setEdit}/>
//   : <button className="btn btn-dark mt-2 rounded-5 " onClick={() => setEdit(true)}>Editar Perfil</button>}