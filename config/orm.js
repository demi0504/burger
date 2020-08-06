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
  insertOne: function(tableName, newDataObject, cb) {
    var queryString = 'INSERT INTO ?? SET ?';
    connection.query(queryString, [tableName, newDataObject], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // updateone to devoured
  updateOne: function (tableName, updatedDataObject, id, cb) {
    var queryString = 'UPDATE ?? SET ? WHERE id = ?'

    connection.query(queryString, [tableName, updatedDataObject, id], function (err, result) {
        if (err) throw err;
            // console.log(result);
        cb(result);
    });
  }
};
module.exports = orm;
