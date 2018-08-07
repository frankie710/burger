var connection = require("../config/connection.js");


var orm = {
    selectAll: function (input, cb) {
        var queryString = "SELECT * FROM " + input + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    insertOne: function (table, col, value, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += count(value.length);
        queryString += ") ";


        connection.query(queryString, value, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    updateOne: function (table, value, where, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += convert(value);
        queryString += " WHERE ";
        queryString += where;


        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};


function count(a) {
    var arr = [];
    for (var i = 0; i < a; i++) {
        arr.push("?");
    }
    return arr.toString();
}


function convert(obj) {
    var arr = [];
    for (var key in obj) {
        arr.push(key + "=" + obj[key]);
    }
    return arr.toString();
}


module.exports = orm;