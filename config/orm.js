var connection = require("../config/connection.js");


//selectAll, insertOne, updateOne orm functions
var orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers;", function(err, result) {
      if (err) throw err;
      cb(result);
        });
  },
  insertOne: function(burger_name, cb) {
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false
    }, function(err, result) {
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
