import React from 'react'

const InicioComponent = ({tweets}) => {

  const tweetList = () => (
    <div>

    {/* añadida key para evitar error de duplicidad */}
    {/* Warning: Each Child in a List Should Have a Unique 'key' Prop */}
    {/* {tweets.map(tweet => <li>{tweet.username}-{tweet.content}</li>)} */}
    
    { tweets.map((tweet, index) => {
          return (
            <li key={index}>
                {tweet.username}-
                {tweet.content}
            </li>
          )
          
      })
    }
      
    </div>
  )
  return (
    <div>
      {tweetList()}
    </div>
  )
}

export default InicioComponent