let connection = require("../config/connection.js");

let orm = {
    selectAll: function(sendUp) {
        connection.query("SELECT * FROM burgers;", function(err, result) {
            if (err) {
                throw err;
            }
            sendUp(result);
        });
    },
    insertOne: function(name, sendUp) {
        let query = "INSERT INTO burgers (name) VALUES (" + name + ");";
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            sendUp(result);
        });
    },
    updateOne: function(id, sendUp) {
        let query = "UPDATE burgers SET devoured = true WHERE id = " + id + ";";
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            sendUp(result);
        });
    }
}

module.exports = orm;