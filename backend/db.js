const mongoose = require("mongoose"); // imported the mongoose
// the below is how to connect to mongodb instances

/**mongoose.connect(
  "mongodb+srv://jbhdsbhjmbdjljkbwikjeulgiu378ye732yuenkcs.mongodb.net/todos",
);**/

// now we are saving such secret in .env file and exporting it in here
require("dotenv").config(); // load .env variables

// Connect to MongoDB using secret from .env
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

// the below is how to describe the mongoose schema for the app()
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
// the below is That line of code which is defining a Mongoose model for your MongoDB collection. This function creates a model based on a schema.
//"todos": This is the name of the collection in MongoDB. Mongoose will automatically pluralize it if needed
//This is the schema you defined earlier, which describes the structure of documents in the collection (fields, types, validation rules, etc.).
const todo = mongoose.model("todos", todoSchema);

// then exporting the model todo
module.exports = {
  connectDB, //// Export both connection and mode
  todo,
};
