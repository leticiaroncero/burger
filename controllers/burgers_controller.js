var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (data) {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {

    var condition = "id = " + req.params.id
    burger.updateOne({ devoured: true }, condition, function (data) {
        if (data.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;