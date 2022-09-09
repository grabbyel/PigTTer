const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
})

usersRouter.post('/', async (request, response) => {
    const {username, name, password} = request.body

    const existingUser = await User.findOne({username})
    if (existingUser) {
        return response.status(400).json({error: 'username must be unique'})
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({username, name, passwordHash})

    const savedUser = await user.save()

    response.status(201).json(savedUser)
})

usersRouter.put('/:id', async (request, response) => {
    const user = request.body
    const updatedUser = await User.findByIdAndUpdate(request.params.id, user, {new: true, runValidators: true, context: 'query'})
    response.json(updatedUser)
 })

module.exports = usersRouter