import React, { useEffect, useState } from "react";
import PigComponent from "../container/PigComponent";
import "./InicioComponent.css";
import tweetsService from "../../services/tweets";
import { nanoid } from "nanoid";

const InicioComponent = ({ user, tweets, setTweets, setStrangeId }) => {
  // useEffect(() => {
  //   tweetsService.getTweets().then(tweets => {
  //     setTweets(tweets)
  //   })
  // }, [])

  useEffect(() => {
    setStrangeId({});
  }, []);

  const handleDelete = (id) => async (e) => {
    e.preventDefault();
    await tweetsService.removeTweet(id);
    const filteredTweets = tweets.filter((tweet) => tweet.id !== id);
    //setTweets(filteredTweets)

    // const currentUser = JSON.parse(window.localStorage.getItem('loggedUser'))
    // currentUser.tweets = currentUser.tweets.filter(tweet => tweet.id !== id)
    // window.localStorage.clear()
    // window.localStorage.setItem('loggedUser', JSON.stringify(currentUser))
  };

  // const handleEdit = (id, newTweet) => (e) => {
  //   e.preventDefault()
  //   tweetsService.updateTweet(id, newTweet)
  //   const filteredTweets = tweets.map(tweet => tweet.id !== id ? tweet : {...tweet, content: newTweet})
  //   setTweets(filteredTweets)
  // }

  const tweetList = () => (
    <div>
      {/* añadida key para evitar error de duplicidad */}
      {/* Warning: Each Child in a List Should Have a Unique 'key' Prop */}
      {/* {tweets.map(tweet => <li>{tweet.username}-{tweet.content}</li>)} */}
      {tweets
        .map((tweet) => {
          return (
            <div key={tweet.id}>
              <PigComponent
                user={user}
                username={tweet.username}
                name={tweet.name}
                content={tweet.content}
                image={tweet.image}
                id={tweet.id}
                objectId={tweet._id}
                comments={tweet.comments}
                handleDelete={handleDelete}
                tweets={tweets}
                setTweets={setTweets}
                date={tweet.date}
                strangeUser={tweet.user}
                setStrangeId={setStrangeId}
                likes={tweet.likes}
                userId={tweet.user}
              />
            </div>
          );
        })
        .sort()
        .reverse()}
    </div>
  );

  return (
    <div className="accordion scroll" key={"listadoTweets"} id="listadoTweets">
      {tweetList()}
    </div>
  );
};

export default InicioComponent;
