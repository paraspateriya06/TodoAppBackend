const Todo = require("../models/todo");


exports.deleteTodo = async (req, res) => {

    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);
       
        res.json({
            success: true,
            message: `Todo with ID deleted successfully`
        });
    
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
        

        

    }

}

 