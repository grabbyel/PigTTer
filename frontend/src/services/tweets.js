import axios from 'axios'
const url = 'http://localhost:3001/api/tweets'

const getTweets = async () => {
    const response = await axios.get(url)
    return response.data
}

const postTweet = async tweetInfo => {
    const response = await axios.post(url, tweetInfo)
    return response.data
}

export default {getTweets, postTweet}