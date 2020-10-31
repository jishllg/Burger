const express = require("express");
let burger = require("../models/burger.js");

let router = express.Router();

router.get("/", function(req, res) {
    burger.list(function(data) {
        console.log(data);
        res.render("index", data);
    });
});

router.post("/api/create/:name", function(req, res) {
    burger.create(req.params.name, function(result) {
      res.json(result.insertId);
    });
  });

router.put("/api/devour/:id", function(req, res) {
    burger.devour(req.params.id, function(result) {
      if (result.changedRows == 0) { return res.status(404).end(); } 
      else { res.status(200).end(); }
    });
  });