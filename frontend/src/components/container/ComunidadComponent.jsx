import React from 'react'
import './ComunidadComponent.css'

const ComunidadComponent = ({users}) => {


  return (
    <div className="container row g-4 mt-1 ml-3">
      {users.map((user) => (
        <div className='col d-flex justify-content-center'>
          <div className="card" style={{"width": "18rem" }}>
            <img src={user.image} style={{"height": "220px"}} className="card-img-top  d-xl-block  d-none" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
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
