const tweetsRouter = require('express').Router()
const Tweet = require('../models/tweet')

tweetsRouter.get('/', async (request, response) => {
    const tweets = await Tweet.find({})
    response.json(tweets)
})

tweetsRouter.post('/', async (request, response) => {
    const body = request.body
    const user = request.user

    const tweet = new Tweet({
        username: user.username,
        name: user.name,
        content: body.content, 
        image: user.image, 
        comments: body.comments || [],
        retweets: body.retweets || 0,
        likes: body.likes || 0
    })

    const savedTweet = await tweet.save()
    user.tweets = user.tweets.concat(savedTweet._id)
    await user.save()
    response.status(201).json(savedTweet)
})

module.exports = tweetsRouter