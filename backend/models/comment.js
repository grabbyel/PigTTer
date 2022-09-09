const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    username: String, 
    name: String, 
    content: String,
    image: String,  
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes: Number 
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
    }
})

module.exports = mongoose.model('Comment', commentSchema)