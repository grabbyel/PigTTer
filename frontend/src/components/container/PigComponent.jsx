import './PigComponent.css'
import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import tweetsService from '../../services/tweets'
import userService from '../../services/user'
import { Link } from "react-router-dom"
import PerfilComponent from '../pure/PerfilComponent'


const PigComponent = ({ username, name, content, image, id, handleDelete, tweets, setTweets, strangeUser, setStrangeId }) => {
  let activeUser = JSON.parse(window.localStorage.getItem('loggedUser'))

  const [show, setShow] = useState(false)
  const [tweetContent, setTweetContent] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const userCall = async () => {
    const userData = await userService.getUser(strangeUser.id)
    // console.log(userData)
    return userData
  }

  // const userData = userCall()

  const handleTextChange = (e) => {
    e.preventDefault()
    setTweetContent(e.target.value)
  }

  const handleEdit = (id, newTweet) => (e) => {
    e.preventDefault()
    tweetsService.updateTweet(id, newTweet)
    const filteredTweets = tweets.map(tweet => tweet.id !== id ? tweet : { ...tweet, content: newTweet })
    setTweets(filteredTweets)
    handleClose()
  }

  const handleFollow = (username) => (e) => {
    e.preventDefault()
    console.log(username)
  }

  const setId = () => {
    setStrangeId(userCall())
    console.log(userCall())
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
              <Form.Control as="textarea" rows={3} onChange={handleTextChange} value={tweetContent} />
            </Form.Group>
            <Button className="rounded-5" variant="primary" type="submit">
              Pigttear
            </Button>
            <Button
              className="rounded-5"
              variant="secondary"
              onClick={handleClose}
            >
              No Pigttear
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }

  return (
    <div key={id} className="accordion-item mb-2 h-100">
      <h2
        className="accordion-header"
        id={`id${id}`}>
        <div
          className="accordion-button collapsed"
          // type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}>

          <div className="card">
            {/* <div> */}
            <img
              src={image}
              // className="card-img-top"
              alt='imagen' />
            {/* </div> */}

            <div className="card-body">
              <Link to="/usuario" onClick={setId}>
                <h5 className="card-title">
                  {name}
                </h5>
              </Link>
              <h6>
                @{username}
                <div className='btnFollow'>
                  {
                    activeUser.username !== username ?
                      <button onClick={handleFollow(username)}>
                        Follow
                      </button> : ''}
                </div>
              </h6>
              <p className="card-text">
                {content}
              </p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            {activeUser.username === username ? <button onClick={handleShow}>Editar</button> : ''}
            {activeUser.username === username ? <button onClick={handleDelete(id)}>X</button> : ''}
            {show && editPigteo()}

          </div>
        </div >
      </h2 >
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`id${id}`}
        data-bs-parent="#listadoTweets">
        <div className="accordion-body">
          <form class="row g-3">

            <div class="col-9">
              <label for="inputComentar" class="visually-hidden">Escribe aquí tu comentario</label>
              <textarea
                class="form-control pb-1"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder='Escriba aquí su comentario' >

              </textarea>
            </div>
            <div class="col-3">
              <button type="submit" class="btn btn-primary mb-3">Publicar comentario</button>
            </div>
          </form>
          <strong>Comentarios</strong>
        </div>
      </div>
    </div >
  )
}

export default PigComponent