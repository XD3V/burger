// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

let burger = {

    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers",cols, vals, cb, function(res){
            cb(res);
          });
        },

        updateOne: function(condition,cb){
            orm.updateOne("burgers",condition,function(res){
                cb(res);
            })
        }
    }

// Export the database functions for the controller burgerController.js).
module.exports = burger;
