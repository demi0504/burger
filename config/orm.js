var connection = require("../config/connection.js");


//selectAll, insertOne, updateOne orm functions
var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableName], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(burger, cb) {
    var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
    connection.query(queryString, [burger], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // updateone to devoured
  updateOne: function (id, cb) {
    var queryString = 'UPDATE burgers SET devoured = true WHERE id = ?'

    connection.query(queryString, [id], function (err, result) {
        if (err) throw err;
            // console.log(result);
        cb(result);
    });
  }
};
module.exports = orm;
