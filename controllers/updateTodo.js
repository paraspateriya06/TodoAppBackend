const Todo = require("../models/todo");


exports.updateTodo = async (req, res) => {

    try{
        const{id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id: id},  
            
            {title, description, updatedAt: Date.now()},)

            res.status(200).json({
                success: true,
                message: `updated successfully`,
                data: todo
            });
       

    
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "update error in server",
            error: error.message
        });

        

    }

}

 