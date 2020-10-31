let orm = require("../config/orm.js");

var burger = {
    list: function(sendUp) {
        orm.selectAll(function(result) {
            sendUp(result);
          });
    },
    create: function(name, sendUp) {
        orm.insertOne(name, function(result) {
            sendUp(result);
        });
    },
    devour: function(id, sendUp) {
        orm.updateOne(id, function(result) {
            sendUp(result);
        });
    }
}

module.exports = burger;