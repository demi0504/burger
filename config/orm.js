var connection = require("../config/connection.js");

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   };
//   console.log('connected as id ' + connection.threadId);
// });

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
  updateOne: function(burgerID, cb) {
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  }
};
module.exports = orm;
