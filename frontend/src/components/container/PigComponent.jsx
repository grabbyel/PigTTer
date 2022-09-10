import './PigComponent.css'

const PigComponent = ({username, name, content, image, id, handleDelete}) => {
  let activeUser = JSON.parse(window.localStorage.getItem('loggedUser'))

    return(
      <div className="card">
      <img src={image} className="card-img-top" alt='imagen'/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5><h6>@{username}</h6>
        <p className="card-text">
         {content}
        </p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
      {activeUser.username == username ? <button onClick={handleDelete(id)}>X</button> : ''}
    </div>
    )
}

export default PigComponent