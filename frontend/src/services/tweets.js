import axios from 'axios'
const url = 'http://localhost:3001/api/tweets'

const postTweet = async tweetInfo => {
    const response = await axios.post(url, tweetInfo)
    return response.data
}

export default {postTweet}