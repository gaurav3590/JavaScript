let customers = [
    { id: 1, name: "Gaurav", email: 'gaurav@abc.com', address: "India", phone: "9911223344" },
    { id: 2, name: "Fenil", email: 'fenil@abc.com', address: "Ahmedabad", phone: "8989001122" },
    { id: 3, name: "Mohit", email: 'mohit@abc.com', address: "Gandhinanagr", phone: "8090114477" }
];
var saveLocalStorage = () => {
    localStorage.setItem('customers', JSON.stringify(customers));
}
if (localStorage.getItem('customers') == null) {
    saveLocalStorage();
} else {
    customers = JSON.parse(localStorage.getItem('customers'));
}

export const getCustomers = function (customer) {
    return customers;
}

export var getCustomerById = (id) => {
    var list = customers.filter((item) => (item.id === id));
    if (list.length > 0) {
        return list[0];
    } else {
        return {}
    }
}

export const addCustomer = function (customer) {
    customer.id = Math.round(Math.random(289) * 1000000) + '';
    customers.push(customer);
    saveLocalStorage();
}

export var updateCustomer = (customer) => {
    var list = customers.filter((item) => (item.id === customer.id));
    if (list.length > 0) {
        list[0].name = customer.name;
        list[0].email = customer.email;
        list[0].phone = customer.phone;
        list[0].address = customer.address;
    }
    saveLocalStorage();
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
export const deleteCustomer = function ({ id }) {
    var tempCustomers = [];
    for (var i = 0; i < customers.length; i++) {
        if (id !== customers[i].id) {
            tempCustomers.push(customers[i]);
        }
    }
    customers = tempCustomers;
    saveLocalStorage();
}
