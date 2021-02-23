const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  content: {
    type: String,
    required: [true, "Please provide a content"],
    minlength: [3, "Please provide a content at least 3 characters"],
    unique: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User"
  }
})

module.exports = mongoose.model('Todo', TodoSchema);