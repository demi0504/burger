var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

//GET request to grab database contents
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
      var hbsObject = {
          burgers: data
      };
      res.render("index", hbsObject);
  });
});

//POST to create a new burger
router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [ req.body.burger_name, false], 
    function(result) {
      res.json({ id: result.insertId });
    });
});

//PUT to change devoured to true
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " +  req.params.id;
  burger.updateOne({ devoured: req.body.devoured },
    condition, function(result) {
        if(result.changedRows == 0) {
          return res.status(404).end();
        }else{
          return res.status(200).end();
        }
    });
});

// Export
module.exports = router;

