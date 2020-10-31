let connection = require("../config/connection.js");

let orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers;", function(err, result) {
            if (err) {
                throw err;
            }
            return result;
        });
    },
    insertOne: function(name) {
        let query = "INSERT INTO burgers (name) VALUES (" + name + ");";
        connection.query(query, function(err) {
            if (err) {
                throw err;
            }
        });
    },
    updateOne: function(id) {
        let query = "UPDATE burgers SET devoured = true WHERE id = " + id + ";";
        connection.query(query, function(err) {
            if (err) {
                throw err;
            }
        });
    }
}

module.exports = orm;