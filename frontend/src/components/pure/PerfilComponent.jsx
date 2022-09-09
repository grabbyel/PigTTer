import React, {useState} from "react";
import "./PerfilComponent.css";
import userService from '../../services/user'

const PerfilComponent = ({ user, setUser }) => {

  const [name, setName] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    const newUser = {...user, name: name}
    userService.editar(user.id, newUser)
    setUser(newUser)
    setName('')
  }

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  return (
    <div className="background-div p-4 bg-light">
      <div className="photo-div">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="user"
          className=" img"
        />
      </div>
      <div className="py-3">
        <h3>{user.name}</h3>
        {/* Actualizar con user.name cuando esté en el registro actualizado */}
        <p>@{user.username}</p>
        <input placeholder="nuevo nombre" value={name} onChange={handleNameChange}/>
        <button onClick={handleClick}>Editar perfil</button>
      </div>

      <div className="botones d-flex justify-content-center align-items-center">
        <p className=" mx-5 fs-5">Tweets</p>
        <p className=" fs-5">Me gusta</p>
      </div>
    </div>
  );
};

export default PerfilComponent;
