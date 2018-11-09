// Require mongoose & schema variable to reference constructor
var mongoose = require("mongoose")
var Schema = mongoose.Schema

// Schema of object to store specified article information 
var ArticleSchema = new Schema ({
  // Store title of article
  title: {
    type: String,
    required: true
  },
  // Store link to article
  link: {
    type: String,
    required: true 
  },
  // Store ID of a note with respect to it's corresponding article
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
})

// Create mongoose model from schema
var Article = mongoose.model("Article", ArticleSchema)

// Export model
module.exports = Article