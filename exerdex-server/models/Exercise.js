var mongoose = require('mongoose');

// Create the MovieSchema.
var ExerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tips: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = ExerciseSchema;
