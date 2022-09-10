import './PigComponent.css'

const PigComponent = ({username, name, content, image}) => {
    return(
      <div className="card">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5><h6>@{username}</h6>
        <p className="card-text">
         {content}
        </p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    )
}

export default PigComponent