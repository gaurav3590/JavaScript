let customers = [
    { id: 1, name: "Gaurav", email: 'gaurav@abc.com', address: "India", phone: "9911223344" },
    { id: 2, name: "Fenil", email: 'fenil@abc.com', address: "Ahmedabad", phone: "8989001122" },
    { id: 3, name: "Mohit", email: 'mohit@abc.com', address: "Gandhinanagr", phone: "8090114477" }
];

export const getCustomers = function (customer) {
    return customers;
}

export const getCustomerById = function (id) {
    let customer = {}
    for (var i = 0; i < customers.length; i++) {
        if (id === customers[i].id) {
            return customers[i];
        }
    }
    return customer;
}

export const addCustomer = function (customer) {
    customer.id = Math.round(Math.random(289) * 1000000) + '';
    customers.push(customer);
}

export const updateCustomer = function (customer) {
    for (var i = 0; i < customers.length; i++) {
        if (customer.id === customers[i].id) {
            customers[i] = customer;
            return;
        }
    }
}

export const getCustomersBySearch = function (field, text) {
    text = text.toLowerCase();
    var tempCustomers = []
    for (var i = 0; i < customers.length; i++) {
        if (customers[i][field].toLowerCase().startsWith(text)) {
            tempCustomers.push(customers[i]);
        }
    }
    return tempCustomers;
}
export const deleteCustomer = function ({ id }) { //{id:7}
    var tempCustomers = [];
    for (var i = 0; i < customers.length; i++) {
        if (id !== customers[i].id) {
            tempCustomers.push(customers[i]);
        }
    }
    customers = tempCustomers;
}
