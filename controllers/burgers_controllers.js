const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");

//GET request to grab database contents
router.get("/", (req, res) => {
  burger.selectAll(data => {
      const hbsObject = {
          burgers: data
      };
      res.render("index", hbsObject);
  });
});

//POST to create a new burger
router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [ req.body.burger_name, false], 
    result => {
      res.json({ id: result.insertId });
    });
});

//PUT to change devoured to true
router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " +  req.params.id;
  burger.updateOne({ devoured: req.body.devoured },
    condition, result => {
        if(result.changedRows == 0) {
          return res.status(404).end();
        }else{
          return res.status(200).end();
        }
    });
});

// Export
module.exports = router;

