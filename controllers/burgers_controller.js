var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var results = {
      burgers: data
    };
    //res.render("index", results);
    //Don't have a main handlebar yet, come back later. 
  });
});


router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});


router.put("/:id", function(req, res) {
  var where = "id = " + req.params.id;
  burger.updateOne({
    devoured: req.body.devoured
  }, where, function() {
    res.redirect("/");
  });
});


module.exports = router;
