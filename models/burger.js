var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (results) {
            cb(results);
        });
    },
    insertOne: function (cb) {
        orm.insertOne("burgers", cols, vals, function (results) {
            cb(results);
        });
    },
    updateOne: function (cb) {
        orm.updateOne("burgers", objColVals, condition, function (results) {
            cb(results);
        });
    }

}

module.exports = burger;





