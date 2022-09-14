import "./CommentComponent.css"
import defaultUser from "./../../assets/defaultUser.png"
const CommentComponent = ({ name, content, image, date }) => {
    return (
        <div className="commentContainer">
            <div className="commentName">
                <img src={image || defaultUser} className="commentImg" alt="avatar" />
                {name}
            </div>
            <div className="commentContent">{content}</div>
        </div>
    )
}

export default CommentComponent