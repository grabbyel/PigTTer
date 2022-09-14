const commentsRouter = require('express').Router()
const Comment = require('../models/comment')
const Tweet = require('../models/tweet')

commentsRouter.get('/', async (request, response) => {
    const comments = await Comment.find({}).populate('tweetId').populate('userId')
    response.json(comments)
})

commentsRouter.get('/:id', async (request, response) => {
    const comment = await Comment.findById(request.params.id).populate('tweetId').populate('userId')
    response.json(comment)
})

commentsRouter.delete('/:id', async (request, response) => {
    const comment = await Comment.findById(request.params.id)
    if (comment) {
        const tweetId = comment.tweetId.toString()
        const tweet = await Tweet.findById(tweetId)
        const tweetComments = tweet.comments.filter(x => x.toString() !== request.params.id)
        await Tweet.findByIdAndUpdate(tweetId, {comments: tweetComments})
        await Comment.findByIdAndDelete(request.params.id)
        response.status(204).end()
    } else {
        response.status(404).json({ error: 'comment already deleted' })
    }
})

module.exports = commentsRouter