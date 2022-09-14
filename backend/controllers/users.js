const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const defaultImage = 'http://simpleicon.com/wp-content/uploads/user1-256x256.png'
const mongoose = require("mongoose");

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('tweets').populate('likes').populate('followers').populate('following')
    response.json(users)
})

usersRouter.get('/:id', async (request, response) => {
    const user = await User.findById(request.params.id).populate('tweets').populate('likes').populate('followers').populate('following')
    response.json(user)
})

usersRouter.post('/', async (request, response) => {
    const {username, name, password} = request.body
    if (password.length<5) return response.status(400).json({error: 'password must have at least 5 characters'})
    const existingUser = await User.findOne({username})
    if (existingUser) {
        return response.status(400).json({error: 'username must be unique'})
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({username, name, passwordHash, image: defaultImage})

    const savedUser = await user.save()

    response.status(201).json(savedUser)
})

usersRouter.put('/:id', async (request, response) => {
    const user = request.body
    console.log(user)
    if (user.hasOwnProperty('tweetId')){
        const tweetId = mongoose.Types.ObjectId(user.tweetId)
        const userId = request.params.id
        const userToUpdate = await User.findById(userId)
        const updatedLikes = userToUpdate.likes.concat(tweetId)
        const updatedUser = await User.findByIdAndUpdate(request.params.id, {likes: updatedLikes}, {new: true, runValidators: true, context: 'query'}).populate('tweets').populate('likes').populate('followers').populate('following')
        response.json(updatedUser)

    } else if (user.hasOwnProperty('followId')){
        const userToFollowId = mongoose.Types.ObjectId(user.followId)
        const followerId = mongoose.Types.ObjectId(request.params.id)
        const userToFollowToUpdate = await User.findById(user.followId)
        const followerToUpdate = await User.findById(request.params.id)
        const updateFollowers = userToFollowToUpdate.followers.concat(followerId)
        const updateFollowing = followerToUpdate.following.concat(userToFollowId)
        const updatedUser1 = await User.findByIdAndUpdate(user.followId, {followers: updateFollowers}, {new: true, runValidators: true, context: 'query'}).populate('tweets').populate('likes').populate('followers').populate('following')
        const updatedUser2 = await User.findByIdAndUpdate(request.params.id, {following: updateFollowing}, {new: true, runValidators: true, context: 'query'}).populate('tweets').populate('likes').populate('followers').populate('following')
        response.json(updatedUser1)
        // const userToUpdate = await User.findById(userId)
        // const updatedLikes = userToUpdate.likes.concat(tweetId)
        // const updatedUser = await User.findByIdAndUpdate(request.params.id, {likes: updatedLikes}, {new: true, runValidators: true, context: 'query'}).populate('tweets', {username: 1, name: 1, content: 1, image: 1, comments: 1, retweets: 1, likes: 1}).populate('likes')
        // response.json(updatedUser)

    } else {
        console.log('2')
        const updatedUser = await User.findByIdAndUpdate(request.params.id, user, {new: true, runValidators: true, context: 'query'}).populate('tweets').populate('likes').populate('followers').populate('following')
        response.json(updatedUser)

    }
 })

module.exports = usersRouter