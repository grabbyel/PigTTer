const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  username: String,
  name: String,
  content: String,
  image: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  retweets: Number,
  likes: Number,
  date: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

tweetSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
    delete returnedObject._id;
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
