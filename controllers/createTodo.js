// import the model

const Todo = require('../models/todo');
// Create a new todo item



exports.createTodo = async (req, res) => {

    try{
        // Extract the title and description from the request body

        const {title, description} = req.body;
        // Create a new todo obj and insert it into the db

        const response = await Todo.create({title, description});
        // Send a success response with the created todo item   
    res.status(200).json({
            success: true,
            message: "Entry created successfully",
            data: response
        });
    
    
    }
    catch(error){

        console.error(error);
        // Send an error response if something goes wrong
        console.log(error);
// Log the error to the console for debugging
        // Send a 500 Internal Server Error response
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        });

    }

}

 