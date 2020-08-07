var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
      arr.push("?");
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = "'" + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

//selectAll, insertOne, updateOne orm functions
var orm = {
  selectAll: function(table, cb){
      var queryString = "SELECT * FROM " + table + ";"
      connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
      });
  },
  insertOne: function(table, cols, values, cb){
      var queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(values.length);
      queryString += ") ";

      connection.query(queryString, values, function(err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },
  updateOne: function(table, objColVals, condition, cb) {
      console.log(objColVals)
      var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },
}
module.exports = orm;
