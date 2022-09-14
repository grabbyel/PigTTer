import "./CommentComponent.css"
const CommentComponent = ({ name, content }) => {
    return (
        <div className="commentContainer">
            <div className="commentName">{name}</div>
            <div className="commentContent">{content}</div>
        </div>
    )
}

export default CommentComponent