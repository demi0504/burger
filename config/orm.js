var connection = require("../config/connection.js");

// //selectAll, insertOne, updateOne
// function printQuestionMarks(num) {
//     var arr = [];
  
//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }
  
//   // Helper function to convert object key/value pairs to SQL syntax
//   function objToSql(ob) {
//     var arr = [];
  
//     // loop through the keys and push the key/value as a string int arr
//     for (var key in ob) {
//       var value = ob[key];
//       // check to skip hidden properties
//       if (Object.hasOwnProperty.call(ob, key)) {
//         // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }
//         arr.push(key + "=" + value);
//       }
//     }
  
//     // translate array of strings to a single comma-separated string
//     return arr.toString();
//   }
  
  // Object for all our SQL statement functions.
  var orm = {
    selectAll: function(cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
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
