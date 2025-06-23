// Main entry point for the Todo application
const express = require('express');
// Import the Express framework
const app = express();

// Import the database connection
require ("dotenv").config(); 
const PORT = process.env.PORT || 3000;

//middleware to parse JSON request bodies
 app.use(express.json());


 // import routes
const todoRoutes = require('./routes/todos'); 

// mount the todo  API routes at the /api/v1 endpoint
app.use('/api/v1', todoRoutes);


//start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// connect to the database
const dbConnect = require('./config/database');
dbConnect(); // Call the function to connect to the database 


//default route to check if the server is running
app.get('/',(req, res) => {

  res.send(`</h1>Welcome to the Todo API</h1>`);
})