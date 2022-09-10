const tweetsRouter = require('express').Router()
const Tweet = require('../models/tweet')

tweetsRouter.get('/', async (request, response) => {
    const tweets = await Tweet.find({})
    response.json(tweets)
})

tweetsRouter.get('/:id', async (request, response) => {
    const tweet = await Tweet.findById(request.params.id)
    response.json(tweet)
})

tweetsRouter.post('/', async (request, response) => {
    const body = request.body
    const user = request.user

    const tweet = new Tweet({
        username: body.username,
        name: body.name,
        content: body.content, 
        image: body.image, 
        comments: body.comments || [],
        retweets: body.retweets || 0,
        likes: body.likes || 0
    })

    const savedTweet = await tweet.save()
    //user.tweets = user.tweets.concat(savedTweet._id)
    //await user.save()
    response.status(201).json(savedTweet)
})

tweetsRouter.delete('/:id', async(request, response) => {
    const tweet = await Tweet.findById(request.params.id)
    if(tweet){
        await Tweet.findByIdAndDelete(request.params.id)
        response.status(204).end()
    } else {
        response.status(404).json({error: 'tweet already deleted'})
    }
})

module.exports = tweetsRouter