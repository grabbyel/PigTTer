import "./CommentComponent.css"
import defaultUser from "./../../assets/defaultUser.png"
import commentService from '../../services/comments'


const CommentComponent = ({ name, content, image, date, id, userId, com }) => {

    let activeUser = JSON.parse(window.localStorage.getItem("loggedUser"))
    const condition = com.userId[0] === activeUser.id

    const processString = () => {
        const array = content.split(" ")
        const result = array.find(x => x.includes('.gif'))
        const position = content.search('http')
        const url = content.substring(position, content.length)
        if (result && array.length === 1) {
            return (
                <div className="commentContent"><img src={url} />
                {condition && <i className="bi bi-trash3  " style={{ cursor: "pointer", color: "red" }} onClick={handleDelete(id)} />}
                </div>
            )
        } else if (result && array.length > 1) {
            return(
                <div className="commentContent"><p>{content.substring(0, position)}</p><img src={url} />
                {condition && <i className="bi bi-trash3  " style={{ cursor: "pointer", color: "red" }} onClick={handleDelete(id)} />}
                </div>
            )

        } else {
            return(<div className="commentContent"><p>{content}</p>
            {condition && <i className="bi bi-trash3  " style={{ cursor: "pointer", color: "red" }} onClick={handleDelete(id)} />}
        </div>)
        }
    }


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
            {processString()}
            {/* {!content.includes('.gif') && <div className="commentContent">{content}
                {condition && <i className="bi bi-trash3  " style={{ cursor: "pointer", color: "red" }} onClick={handleDelete(id)} />}
            </div>}
            {content.includes('.gif') && <div className="commentContent"><img src={content} />
                {condition && <i className="bi bi-trash3  " style={{ cursor: "pointer", color: "red" }} onClick={handleDelete(id)} />}
            </div>} */}
            

        </div>
    )
}

export default CommentComponent