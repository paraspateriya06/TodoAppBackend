const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {

    // The unique identifier for the todo item
     title: {
        type: String,
        required: true,
        maxLength: 50,
     },
// The title of the todo item, e.g., 'Buy groceries'
        description: {
            type: String,
            required: true,
            maxLength: 200,
        },
// The status of the todo item, e.g., 'pending', 'completed'
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        // The date when the todo was last updated
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },


  }

);

module.exports = mongoose.model('Todo', todoSchema);
// Export the Todo model based on the todoSchema