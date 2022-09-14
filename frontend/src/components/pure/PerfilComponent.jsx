import React, { useState, useEffect } from "react";
import "./PerfilComponent.css";
import userService from "../../services/user";
import tweetsService from "../../services/tweets";
import EditarPerfilComponent from "./EditarPerfilComponent";
import { nanoid } from "nanoid";
import PigComponent from "../container/PigComponent";

const PerfilComponent = ({ user, setUser, strangeUser, setStrangeUser, tweets, setTweets }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [currentProfile, setCurrentProfile] = useState(
    strangeUser ? strangeUser : user
  );
  const [show, setShow] = useState(true)

  const condition = !strangeUser || user.id === strangeUser.id;

  useEffect(() => {
    userService.getUser(user.id).then((updatedUser) => {
      setUser(updatedUser);
    });
  }, [user.id]);

  useEffect(() => {
    
    strangeUser ? setCurrentProfile(strangeUser) : setCurrentProfile(user);
    return () => {
      setCurrentProfile(user);
    };
  }, [user, currentProfile]);

  useEffect(() => {
    window.location.pathname === '/perfil' ? setCurrentProfile(user) : setCurrentProfile(strangeUser)
  })
  

  const updateName = (e) => {
    e.preventDefault();
    userService.editarNombre(user.id, name);
    const newUser = { ...user, name: name };
    setUser(newUser);
    setName("");
    // const newUser = {...user, name: name}
    // userService.editar(user.id, newUser)
    // setUser(newUser)
    // window.localStorage.removeItem('loggedUser')
    // window.localStorage.setItem('loggedUser', JSON.stringify(newUser))
    // setName('')
  };

  const updateImage = (e) => {
    e.preventDefault();
    userService.editarImagen(user.id, image);
    const newUser = { ...user, image: image };
    setUser(newUser);
    setImage("");
    // const newUser = {...user, image: image}
    // userService.editar(user.id, newUser)
    // setUser(newUser)
    // window.localStorage.removeItem('loggedUser')
    // window.localStorage.setItem('loggedUser', JSON.stringify(newUser))
    // setImage('')
  };
  // let botonOpcional
  const userLog = () => {
    if (condition) {
      return (
        <EditarPerfilComponent
          name={name}
          handleNameChange={handleNameChange}
          updateName={updateName}
          updateImage={updateImage}
          image={image}
          handleImageChange={handleImageChange}
        />
      );
    } else {
      return <button>Follow</button>;
    }
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    setImage(e.target.value);
  };

  // const tweetsCargar = condition ? user.tweets : strangeUser.tweets;

  

  const tweetList = () => {
    return (
      <div>
        {tweets 
          .map((tweet) => {
            if (currentProfile.username === tweet.username) {
              return (
                <div key={tweet.id}>
                  <PigComponent
                    username={tweet.username}
                    name={tweet.name}
                    content={tweet.content}
                    image={tweet.image}
                    id={tweet.id}
                    handleDelete={handleDelete}
                    tweets={tweets}
                    setTweets={setTweets}
                    date={tweet.date}
                  />
                </div>
              );
            } else {
              return "";
            }
          })
          .sort()
          .reverse()}
      </div>
    );
  };

  const likesList = () => {
    console.log(currentProfile.likes)
    return (
      <div>
        {currentProfile.likes && currentProfile.likes 
          .map((tweet) => {
              return (
                <div key={tweet.id}>
                  <PigComponent
                    username={tweet.username}
                    name={tweet.name}
                    content={tweet.content}
                    image={tweet.image}
                    id={tweet.id}
                    handleDelete={handleDelete}
                    tweets={tweets}
                    setTweets={setTweets}
                    date={tweet.date}
                  />
                </div>
              );
            } 
          )
          .sort()
          .reverse()}
      </div>
    );
  };

  const handleDelete = (id) => (e) => {
    e.preventDefault();
    tweetsService.removeTweet(id);
    const filteredTweets = tweets.filter((tweet) => tweet.id !== id);
    setTweets(filteredTweets);
  };

  return (
    <div className="background-div p-4 bg-light row">
      <div className="photo-div col-6">
        <img
          // src={user.image ?
          //   user.image : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"}
          src={condition ? user.image : strangeUser.image}
          alt="Imagen de usuario"
          className=" img"
        />
      </div>
      <div className="col-12 py-3">
        <h3>{condition ? user.name : strangeUser.name}</h3>
        {/* Actualizar con user.name cuando esté en el registro actualizado */}
        <p>@{condition ? user.username : strangeUser.username}</p>
      </div>
      <div className="col-12">{userLog()}</div>

      <div className="botones d-flex justify-content-center align-items-center">
        <p className=" mx-5 fs-5"><button onClick={() => setShow(true)}>Tweets</button></p>
        <p className=" fs-5"><button onClick={() => setShow(false)}>Me gusta</button></p>
      </div>
      <div>{show && tweetList()}</div>
      <div>{!show && likesList()}</div>
    </div>
  );
};

export default PerfilComponent;

// {edit
//   ? <EditarPerfilComponent name={name} handleNameChange={handleNameChange}
//   updateName={updateName} updateImage={updateImage}
//   image={image} handleImageChange={handleImageChange} setEdit={setEdit}/>
//   : <button className="btn btn-dark mt-2 rounded-5 " onClick={() => setEdit(true)}>Editar Perfil</button>}
