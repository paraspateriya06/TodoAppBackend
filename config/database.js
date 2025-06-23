const mongoose = require("mongoose");

require("dotenv").config();

// Connect to MongoDB using Mongoose

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    .then(() => console.log("Connected to MongoDB successfully"))

    .catch((error) => {
      console.error("Error connecting to MongoDB:");
      console.error(error.message);
      
      // Exit the process with failure
      process.exit(1);
    });
};



module.exports = dbConnect;