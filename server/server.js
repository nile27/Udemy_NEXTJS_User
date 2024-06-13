const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: uuidv4(), name, email };
  users.push(newUser);
  res.status(200).json(newUser);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const userIdx = users.findIndex((user) => user.id === id);
  if (userIdx === -1) {
    res.status(404).json({ message: "User not found" });
  } else {
    users.splice(userIdx, 1);
    res.status(200).json({ message: "User deleted" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
