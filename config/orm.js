// Import MySQL connection.
var connection = require("../config/connection.js");
 
// Object for all our SQL statement functions.
let orm = {  
    
selectAll: function(tableInput,cb){

    let  queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
},


 insertOne :  function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += (vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

},
  updateOne:function(table, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
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

// Export the orm object for the model (burger.js).
module.exports = orm; 