// import the model
const Todo = require("../models/todo");

// GET /api/v1/getTodos - fetch all todos
exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      message: "All todos fetched successfully",
      data: todos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// GET /api/v1/getTodos/:id - fetch single todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found with the given ID",
      });
    }

    res.status(200).json({
      success: true,
      message: `Todo ${id} fetched successfully`,
      data: todo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
