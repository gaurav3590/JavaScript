var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'smartant',
    database: 'nodejs'
});

var service = {};

service.getCustomers = function () {
    return new Promise((resolve, reject) => {
        //promise inside
        pool.query('SELECT * from customer', function (error, results, fields) {
            if (error) {
                resolve([]);
                throw error;
            } else {
                resolve(results);
            }
        });
        //promise inside ends
    })
}

service.addCustomer = function (customer, callback) {
    pool.getConnection(function (err, connection) {
        if (err) { console.log(err); callback({ result: "fail" }); return; }
        connection.query("INSERT INTO customer set ? ", customer, function (err, results) {
            if (err) {
                console.log("Error Selecting : %s ", err);
                callback({ result: "fail" });
            } else {
                callback({ result: "success" });
            }
        });
    });
};

service.deleteCustomer = function (id, callback) {
    var sql = "delete FROM customer where id='" + id + "'";
    pool.getConnection(function (err, connection) {
        if (err) { console.log(err); callback({ result: "fail" }); return; }
        // make the query
        connection.query(sql, function (err, results) {
            connection.release();
            if (err) { console.log(err); callback({ result: "fail" }); return; }
            callback({ result: "success" });
        });
    });
};
service.getCustomerById = function (id, callback) {
    var record = {};
    var sql = "SELECT * FROM customer where id='" + id + "'";
    console.log("sql:" + sql);
    pool.getConnection(function (err, connection) {
        if (err) { console.log(err); callback({}); return; }
        // make the query
        connection.query(sql, function (err, results) {
            connection.release();
            if (err) { console.log(err); callback({}); return; }
            if (results.length == 0) {
                callback(record);
            }
            callback(results[0]);
        });
    });

};
service.updateCustomer = function (customer, callback) {
    pool.getConnection(function (err, connection) {
        if (err) { console.log(err); callback({ result: "fail" }); return; }
        connection.query("UPDATE customer set ? WHERE id = ? ", [customer, customer.id], function (err, results) {
            if (err) {
                console.log("Error Selecting : %s ", err);
                callback({ result: "fail" });
            } else {
                callback({ result: "success" });
            }
        });
    });
};

service.getCustomersBySearch = function (field, text) {
    text = text.toLowerCase();
    var tempCustomers = []
    for (var i = 0; i < customers.length; i++) {
        if (customers[i][field].toLowerCase().startsWith(text)) {
            tempCustomers.push(customers[i]);
        }
    }
    return tempCustomers;
}


module.exports = service;