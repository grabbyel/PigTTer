import React from 'react'
import './ComunidadComponent.css'
import { Link } from "react-router-dom"
import userService from '../../services/user'

const ComunidadComponent = ({users, strangeUser, setStrangeId}) => {

  const userCall = async (user) => {
    // console.log(user.id)
    const userData = await userService.getUser(user)
    // console.log(userData)
    setStrangeId(userData)

  }


  return (
    <div className="container row g-4 mt-1 ml-3">
      {users.map((user) => (
        <div className='col d-flex justify-content-center'>
          <div className="card" style={{"width": "18rem" }}>
            <img src={user.image} style={{"height": "220px"}} className="card-img-top  d-xl-block  d-none" alt="..." />
            <div className="card-body">
              <Link to="/usuario" onClick={()=>userCall(user.id)}>
                <h5 className="card-title card-title-tweet">
                  {user.name}
                </h5>
              </Link>
              {/* <h5 className="card-title">{user.name}</h5> */}
              <p className="card-text">
                @{user.username}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ComunidadComponent
