var orm = require("../config/orm.js");


var burger = {
  SelectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },


  insertOne: function(col, value, cb) {
    orm.insertOne("burgers", col, value, function(res) {
      cb(res);
    });
  },


  updateOne: function(value, where, cb) {
    orm.updateOne("burgers", value, where, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;