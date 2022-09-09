import React from 'react'

const InicioComponent = ({tweets}) => {

  const tweetList = () => (
    <div>
      {tweets.map(tweet => <li>{tweet.username}-{tweet.content}</li>)}
    </div>
  )
  return (
    <div>
      {tweetList()}
    </div>
  )
}

export default InicioComponent