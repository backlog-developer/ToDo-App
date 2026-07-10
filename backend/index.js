const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo, todo } = require("./db");

const app = express;

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: " you sent he wrong input",
    });
    return;
  }

  //put the info in mongodb
  // now we come here after writing db.js---where we:-
  //  1st npm install mongoose, 2nd define the mongoose schema, 3rd created a function or model This function creates a model based on a schema. 4th connect the mongodb connections with mongoose.connect , 5th then exported the model  and here we come and import that model
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
});

res.json({
  mssg: "todo created",
});

app.get("/todos", async function (req, res) {
  const todo = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id, //why _id: ?--- bcz inside mongodatabse any entry in mongo is uniquely identified and i have to mark completed as true for this entry which has this uniquely
    },
    { completed: true },
  );
});
