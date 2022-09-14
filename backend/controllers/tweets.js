const tweetsRouter = require('express').Router()
const Tweet = require('../models/tweet')
const User = require('../models/user')
const Comment = require('../models/comment')
const mongoose = require("mongoose");
const comment = require('../models/comment');

const updateTweet = async (tweet) => {
    const user = await User.findOne({ 'username': tweet.username })
    await Tweet.updateMany({username: user.username}, {name: user.name, image: user.image})
}

tweetsRouter.get('/', async (request, response) => {
        const tweets = await Tweet.find({})
        await tweets.map(tweet => updateTweet(tweet))
        const updatedTweets = await Tweet.find({}).populate('user', { username: 1, name: 1, image: 1, tweets: 1, followers: 1, following: 1 }).populate('comments')
        response.json(updatedTweets)
})

tweetsRouter.get('/:id', async (request, response) => {
    const tweet = await Tweet.findById(request.params.id).populate('user', { username: 1, name: 1, image: 1, tweets: 1, followers: 1, following: 1 }).populate('comments')
    response.json(tweet)
})

tweetsRouter.post('/', async (request, response) => {
    const body = request.body
    const user = await User.findById(body.userId)
    const tweet = new Tweet({
        username: body.username,
        name: body.name,
        content: body.content,
        image: body.image,
        comments: body.comments || [],
        retweets: body.retweets || 0,
        likes: body.likes || 0,
        date: body.date,
        user: user._id
    })

    const savedTweet = await tweet.save()
    user.tweets = user.tweets.concat(savedTweet._id)
    await user.save()
    response.status(201).json(savedTweet)
})

tweetsRouter.put('/:id', async (request, response) => {
    const tweet = request.body
    
    if(tweet.hasOwnProperty('username')){
        const tweetId = mongoose.Types.ObjectId(request.params.id)
        const userId = mongoose.Types.ObjectId(tweet.userId)
        const newComment = new Comment({
            username: tweet.username, 
            name: tweet.name, 
            content: tweet.content, 
            image: tweet.image || '',
            likes: tweet.likes || 0,
            tweetId: tweetId, 
            userId: userId
        })
        const savedComment = await newComment.save()
        const tweetToUpdate = await Tweet.findById(request.params.id)
        const updatedComments = tweetToUpdate.comments.concat(savedComment._id)
        const objectToUpdate = {comments: updatedComments}
        const updatedTweet = await Tweet.findByIdAndUpdate(request.params.id, objectToUpdate, { new: true, runValidators: true, context: 'query' }).populate('user', { username: 1, name: 1, image: 1, tweets: 1, followers: 1, following: 1 }).populate('comments')
        console.log(updatedTweet)
        response.json(updatedTweet)
    } else {
        const updatedTweet = await Tweet.findByIdAndUpdate(request.params.id, tweet, { new: true, runValidators: true, context: 'query' }).populate('user', { username: 1, name: 1, image: 1, tweets: 1, followers: 1, following: 1 }).populate('comments')
        response.json(updatedTweet)

    }
})

tweetsRouter.delete('/:id', async (request, response) => {
    const tweet = await Tweet.findById(request.params.id)
    if (tweet) {
        const userId = tweet.user._id.toString()
        const user = await User.findById(userId)
        const userTweets = user.tweets.filter(x => x.toString() !== request.params.id)
        await User.findByIdAndUpdate(userId, {tweets: userTweets})
        await Tweet.findByIdAndDelete(request.params.id)
        response.status(204).end()
    } else {
        response.status(404).json({ error: 'tweet already deleted' })
    }
})

module.exports = tweetsRouter