import "./PigComponent.css"
import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import tweetsService from "../../services/tweets"
import userService from "../../services/user"
import { Link } from "react-router-dom"
import PerfilComponent from "../pure/PerfilComponent"
import { BiEdit } from "react-icons/bi"
import { RiChatDeleteFill } from "react-icons/ri"
import CommentComponent from "./CommentComponent"
import defaultUser from "./../../assets/defaultUser.png"

const PigComponent = ({
  user,
  username,
  name,
  content,
  image,
  id,
  comments,
  handleDelete,
  strangeUser,
  setStrangeId,
  date,
  likes,
  userId,
}) => {
  let activeUser = JSON.parse(window.localStorage.getItem("loggedUser"))

  const [show, setShow] = useState(false)
  const [tweetContent, setTweetContent] = useState("")
  const [showComment, setShowComment] = useState(false)
  const visible = { display: showComment ? "" : "none" }

  const [commentContent, setCommentContent] = useState("");
  const [userLikes, setUserLikes] = useState([]);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleVisible = (e) => {
    e.preventDefault()
    showComment ? setShowComment(false) : setShowComment(true)
  }

  const userCall = async () => {
    const userData = await userService.getUser(strangeUser.id)
    setStrangeId(userData)
  }

  const handleTextChange = (e) => {
    e.preventDefault()
    setTweetContent(e.target.value)
  }

  const handleEdit = (id, newTweet) => async (e) => {
    e.preventDefault()
    await tweetsService.updateTweet(id, newTweet)
    // const filteredTweets = tweets.map((tweet) =>
    //   tweet.id !== id ? tweet : { ...tweet, content: newTweet }
    // );
    //setTweets(filteredTweets)
    handleClose()
  }

  const setId = () => {
    userCall()
  }

  const handleCommentChange = (e) => {
    e.preventDefault()
    setCommentContent(e.target.value)
  }

  const postComment = (e) => {
    e.preventDefault()

    const newComment = {
      username: user.username,
      name: user.name,
      content: commentContent,
      image: user.image,
      userId: user.id,
    }

    tweetsService.addComment(id, newComment)
    setCommentContent("")
  }

  const editPigteo = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Arrepentido de tu pigtteo?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEdit(id, tweetContent)}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>¡Cambia de opinion!</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleTextChange}
                value={tweetContent}
              />
            </Form.Group>
            <Modal.Footer className="border-0">
              <Button
                className="rounded-5"
                variant="secondary"
                onClick={handleClose}
              >
                No Pigttear
              </Button>
              <Button className="rounded-5" variant="primary" type="submit">
                Pigttear
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }

  const handleLike = (id) => async () => {
    const check = userLikes.includes(user.id);
    if (!check) {
      const likesSaved = {
        likes: likes + 1,
      };
      await tweetsService.updateTweet(id, likesSaved);
      await userService.addLike(user.id, id);
      setUserLikes(userLikes.concat(user.id));
    }
  };

  const processString = () => {
    const array = content.split(" ");
    const result = array.find((x) => x.includes(".gif"));
    const position = content.search("http");
    const url = content.substring(position, content.length);
    if (result && array.length === 1) {
      return (
        <div className="card-text text-center">
          <img src={url} />
        </div>
      );
    } else if (result && array.length > 1) {
      return (
        <div className="text-and-gif">
          <div className="card-text">
            <p className="card-text">{content.substring(0, position)}</p>
          </div>

          <div className="card-text  my-4">
            <img src={url} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="mb-4 ">
          <p className="card-text ">{content}</p>
        </div>
      );
    }
  }

  const giveLike = () => {
    if (likes !== 0) {
      return (
        <i className="bi bi-heart-fill red like" onClick={handleLike(id)}></i>
      );
    } else {
      return <i className="bi bi-heart like" onClick={handleLike(id)}></i>
    }
  }

  const condition =
    window.location.pathname === "/perfil" ||
    window.location.pathname === "/usuario";

  return (
    <div key={id} className=" mb-2 h-100">
      <div id={`id${id}`}>
        <div>
          <div className="card card-tweet">
            <div className="header-container">
              <img
                src={image || defaultUser}
                alt="imagen"
                className="imgAvatar me-3"
              />
              <div>
                {condition ? (
                  <h5 className="card-title card-title-tweet">{name}</h5>
                ) : (
                  <Link to="/usuario" onClick={setId}>
                    <h5 className="card-title card-title-tweet">{name}</h5>
                  </Link>
                )}

                <h6>@{username}</h6>
              </div>
            </div>

            <div className="card-body card-text">
              {processString()}

              <div className="card-likes-date">
                <div>
                  {giveLike()} {likes} piggylikes
                </div>

                <div className="fecha">{date || "01/01/1970"}</div>
              </div>

              <div className="btnEdit">
                {activeUser.username === username ? (
                  <i
                    onClick={handleDelete(id)}
                    class="bi bi-x-square  fs-4 delete-icon"
                    style={{ color: "#0d6efd", cursor: "pointer" }}
                  ></i>
                ) : (
                  ""
                )}

                <div className="comments-container">
                  <i
                    onClick={handleVisible}
                    title="Ver comentarios"
                    className="d-block fs-4 bi-chat-dots "
                    style={{ color: "#0d6efd", cursor: "pointer" }}
                  ></i>
                  <p>{comments && comments.length}</p>
                </div>
              </div>
            </div>
          </div>

          {show && editPigteo()}
        </div>
      </div>

      <div style={visible} className="container">
        <div className="row m-1">
          <form className="row g-3" onSubmit={postComment}>
            <div className="input-group mb-3">
              <textarea
                value={commentContent}
                onChange={handleCommentChange}
                rows="1"
                type="text"
                className="form-control rounded-2"
                placeholder="Escribe aquí tu comentario"
                aria-label="Escribe aquí tu comentario"
                aria-describedby="button-addon2"
                style={{ borderRadius: "2px" }}
              ></textarea>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
                style={{ backgroundColor: "#0d6efd", color: "white" }}
              >
                Comentar
              </button>
            </div>
          </form>
        </div>

        <div className="row m-1">
          <div
            className="col 12 border  rounded mb-2 "
            style={{ borderColor: "#0d6efd" }}
          >
            <h3 className="comentarios">Comentarios</h3>
            {comments &&
              comments
                .map((com) => (
                  <CommentComponent
                    name={com.name}
                    content={com.content}
                    image={com.image}
                    date={com.username}
                    id={com.id}
                    userId={com.userId}
                    com={com}
                  />
                ))
                .reverse()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PigComponent
