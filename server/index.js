// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js"); //refers to dabase
const controller = require("./controllers.js");
const path = require("path");


app.use(cors());

var joinedPath = path.join(__dirname, "../client/dist")
app.use(express.static(joinedPath))

app.use(express.json());

app.post('/groceryList', (req, res) => {
  let item = req.body;
  console.log(item)
  let quantity = 100;

  db.query(`INSERT INTO groceryList VALUES (null, '${item.itemName}', '${quantity}')`, (err, result) => {
    if (err) {
      res.status(400)
      res.send(err)
    } else {
      res.status(200)
      res.end()
    }
  })
})

app.get('/groceryList', controller.getAll)//takes in endpoitn and a handler

app.get('/', (req, res) => {
  res.status(200);
  res.send("i am a get req");
})

app.listen(port, () => {
  console.log("listening on 8080");
});
