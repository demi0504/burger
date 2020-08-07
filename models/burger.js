var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", cb)
    },
    insertOne: function(burger, cb) {
      orm.insertOne(burger, function(res) {
        cb(res);
      });
    },
    updateOne: function(id, cb) {
      orm.updateOne([id], function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;
