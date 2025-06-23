const express = require('express');
const router = express.Router();

// import controllers
const { createTodo } = require('../controllers/createTodo');
const { getTodo, getTodoById } = require('../controllers/getTodo');
const { updateTodo } = require('../controllers/updateTodo'); // Uncomment if you implement update functionality
const { deleteTodo } = require('../controllers/deleteTodo'); // Uncomment if you implement delete functionality
// Define routes
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodo);            // Get all todos
router.get('/getTodos/:id', getTodoById);    // Get a todo by ID
router.put('/updateTodo/:id', updateTodo); // Update a todo by ID
router.delete('/deleteTodo/:id', deleteTodo); // Delete a todo by ID (uncomment when implemented)

module.exports = router;
