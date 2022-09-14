import axios from 'axios'
const url = 'http://localhost:3001/api/tweets'

// let token = null

// const setToken = newToken => {
//     token = `bearer ${newToken}`
// }

const getTweets = async () => {
    const response = await axios.get(url)
    return response.data
}

const getSingleTweet = async (id) => {
    try {
      const response = await axios.get(`${url}/${id}`)
      return response.data;
    } catch {
      alert("El tweet no existe");
    }
  };

const postTweet = async tweetInfo => {
    const response = await axios.post(url, tweetInfo)
    return response.data
}

const updateTweet = async (id, newTweet) => {
  if (newTweet.hasOwnProperty('content')) {
    const response = await axios.put(`${url}/${id}`, { content: newTweet })
    return response.data

  } else {
    const response = await axios.put(`${url}/${id}`, { likes: newTweet.likes })
    return response.data
  }
}

const addComment = async (id, newComment) => {
  const response = await axios.put(`${url}/${id}`, newComment)
  return response.data
}

const removeTweet = async id => {
    try {
      const response = await axios.delete(`${url}/${id}`)
    return response
    } catch {
      alert("El tweet no existe");
    }
}

export default {getTweets, getSingleTweet, postTweet, updateTweet, addComment, removeTweet}