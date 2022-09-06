const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String, 
    name: String, 
    passwordHash: String
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
        delete returnedObject.passwordHash
    }
})

module.exports = mongoose.model('User', userSchema)