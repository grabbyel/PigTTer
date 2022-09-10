import './PigComponent.css'

const PigComponent = ({username, name, content, image}) => {
    return(
      <div class="card">
      <img src={image} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{name}</h5><h6>@{username}</h6>
        <p class="card-text">
         {content}
        </p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
    )
}

export default PigComponent