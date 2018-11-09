// Require mongoose & schema variable to reference constructor
var mongoose = require("mongoose")
var Schema = mongoose.Schema

// Schema of object that stores the "title" and "body" of the user commment 
var NoteSchema = new Schema ({
  title: String,
  body: String
})

// Create mongoose model from schema
var Note = mongoose.model("Note", NoteSchema)

// Export model
module.exports = Note