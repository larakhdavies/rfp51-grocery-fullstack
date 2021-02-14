const db = require("../db/index.js");

module.exports = {
  getAll: function (req, res) {
    db.query('SELECT foodName, quantity from groceryList', (err, result) => {
      if (err){
        console.log("here err")
        res.status(400);
        res.send(err);
      } else {
        console.log(result)
        res.status(200);
        res.send(result);
      }
    })
  }
}

