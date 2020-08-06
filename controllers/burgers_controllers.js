var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
      //console.log(hbsObject);
     res.render("index", { burgers: data });
  });
});

//create a new burger
router.post("/burger/create", function(req, res) {
  burger.insertOne(req.body, function(data) {
    res.redirect('/index');
  });
});

//devour a burger
router.put("/burgers/:id", function(req, res) {    
  burger.updateOne({ devoured: 1 }, req.params.id, function(data) {
    res.sendStatus(200);
  });
});

module.exports = router;
