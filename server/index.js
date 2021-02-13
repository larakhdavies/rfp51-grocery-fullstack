// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js"); //refers to dabase
const controller = require("./controllers.js");


app.use(cors());

app.use(express.static('src'))

app.get('/groceryList', controller.getAll)//takes in endpoitn and a handler

app.get('/', (req, res) => {
  res.status(200);
  res.send("i am a get req");
})

app.listen(port, () => {
  console.log("listening on 8080");
});
