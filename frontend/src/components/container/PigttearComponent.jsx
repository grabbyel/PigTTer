import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/logo_blanco_cerdo.png";
import tweetService from '../../services/tweets'
import InicioComponent from "../pure/InicioComponent";

function PigComponent({user, tweets,setTweets} ) {
  const [show, setShow] = useState(false);
  const [tweetContent, setTweetContent] = useState("");

  useEffect(() => {
        
    return() => tweetService.getTweets().then(tweets => {
        setTweets(tweets)
    })


}, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTextChange = (e) => {
    e.preventDefault();
    setTweetContent(e.target.value);
  };

  const newDate = () => {
    return new Date().toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const tweetear = async (e) => {
    e.preventDefault();
    handleClose();
    const newTweet = {
      username: user.username, 
      name: user.name || user.username,
      content: tweetContent,
      image: user.image,
      date: newDate(),
      userId: user.id
    }
    const newTweets = tweets.concat(newTweet)
    //setTweets(newTweets)
    await tweetService.postTweet(newTweet)
    
    // user.tweets = user.tweets.concat(newTweet)
    // window.localStorage.clear()
    // window.localStorage.setItem('loggedUser', JSON.stringify(user))
    setTweetContent('')
  };

  return (
    <>
         <Button
        className="btn btn-primary w-75 mt-5 rounded-5 fs-4"
        variant="primary"
        onClick={handleShow}
      >
        <span
          className="fs-4 ms-1 d-none d-md-inline w-fit-content"
          style={{ color: "white" }}
        >
          Pigttear
        </span>
        <span className="d-md-none">
          <img width="50" src={logo} alt="cerdo" />{" "}
        </span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Que te ocurre, criatura?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={tweetear}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>¡Pigttea aquí!</Form.Label>
              <Form.Control as="textarea" autoFocus rows={3} onChange={handleTextChange} value={tweetContent} />
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
    </>
  );
}

export default PigComponent;
