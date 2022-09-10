import './PigComponent.css'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import tweetsService from '../../services/tweets'

const PigComponent = ({username, name, content, image, id, handleDelete, tweets, setTweets}) => {
  let activeUser = JSON.parse(window.localStorage.getItem('loggedUser'))

  const [show, setShow] = useState(false);
  const [tweetContent, setTweetContent] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTextChange = (e) => {
    e.preventDefault();
    setTweetContent(e.target.value);
  };

  const handleEdit = (id, newTweet) => (e) => {
    e.preventDefault()
    tweetsService.updateTweet(id, newTweet)
    const filteredTweets = tweets.map(tweet => tweet.id !== id ? tweet : {...tweet, content: newTweet})
    setTweets(filteredTweets)
    handleClose()
  }

  const editPigteo = () => {
    return(
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
      {activeUser.username === username ? <button onClick={handleShow}>Editar</button> : ''}
      {activeUser.username === username ? <button onClick={handleDelete(id)}>X</button> : ''}
      {show && editPigteo()}
    </div>
    )
}

export default PigComponent