import React, {useState} from "react";
import "./PerfilComponent.css";
import userService from '../../services/user'
import EditarPerfilComponent from "./EditarPerfilComponent";

const PerfilComponent = ({ user, setUser }) => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [edit, setEdit] = useState(false)

  const updateName = (e) => {
    e.preventDefault()
    const newUser = {...user, name: name}
    userService.editar(user.id, newUser)
    setUser(newUser)
    window.localStorage.removeItem('loggedUser')
    window.localStorage.setItem('loggedUser', JSON.stringify(newUser))
    setName('')
  }

  const updateImage = (e) => {
    e.preventDefault()
    const newUser = {...user, image: image}
    userService.editar(user.id, newUser)
    setUser(newUser)
    window.localStorage.removeItem('loggedUser')
    window.localStorage.setItem('loggedUser', JSON.stringify(newUser))
    setImage('')
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
    <div className="background-div p-4 bg-light">
      <div className="photo-div">
        <img
          src={user.image ?  user.image : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"}
          alt="user"
          className=" img"
        />
      </div>
      <div className="py-3">
        <h3>{user.name}</h3>
        {/* Actualizar con user.name cuando esté en el registro actualizado */}
        <p>@{user.username}</p>
        {edit 
        ? <EditarPerfilComponent name={name} handleNameChange={handleNameChange}
        updateName={updateName} updateImage={updateImage}
        image={image} handleImageChange={handleImageChange} setEdit={setEdit}/>
        : <button onClick={() => setEdit(true)}>Editar Perfil</button>}
      </div>

      <div className="botones d-flex justify-content-center align-items-center">
        <p className=" mx-5 fs-5">Tweets</p>
        <p className=" fs-5">Me gusta</p>
      </div>
    </div>
  );
};

export default PerfilComponent;
