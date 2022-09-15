import "./CommentComponent.css"
import defaultUser from "./../../assets/defaultUser.png"
import commentService from '../../services/comments'


const CommentComponent = ({ name, content, image, date, id, userId, com }) => {

    let activeUser = JSON.parse(window.localStorage.getItem("loggedUser"))
    const condition = com.userId[0] === activeUser.id




    const handleDelete = (id) => async (e) => {
        e.preventDefault()
        await commentService.removeComment(id)
    }

    return (
        <div className="commentContainer">
            <div className="commentName">
                <img src={image || defaultUser} className="commentImg" alt="avatar" />
                {name}
            </div>
            <div className="commentContent">{content}
                {condition && <i className="bi bi-trash3  " style={{ cursor: "pointer", color: "red" }} onClick={handleDelete(id)} />}
            </div>

        </div>
    )
}

export default CommentComponent