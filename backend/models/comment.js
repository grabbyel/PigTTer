const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    username: String, 
    name: String, 
    content: String,
    image: String,  
    likes: Number,
    tweetId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }],
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
    }
})

module.exports = mongoose.model('Comment', commentSchema)