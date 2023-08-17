var service = {};

var customers = [
	{ id: '1', name: 'Gaurav', email: 'gaurav.k@pyther.com', phone: '9924875063' ,address:'Gandhinagar,India'},
	{ id: '2', name: 'Keyur', email: 'keyurgajera@gmail.com', phone: '7877456230' ,address:'Delhi,India'},
	{ id: '3', name: 'Neej', email: 'neejgajera@outlook.com', phone: '7885523012',address:'mumbai,India'},
	{ id: '4', name: 'Hardik', email: 'hardikpanshuriya@gmail.com', phone: '9632145870' ,address:'Kolkata,India'},
	{ id: '5', name: 'Raj', email: 'rajgajipara@gmail.com', phone: '9922758674' ,address:'London,UK'},
];

service.getCustomers = function (customer) {
	return customers;
}

service.getCustomerById = function (id) {
	let customer = {}
	for (var i = 0; i < customers.length; i++) {
		if (id == customers[i].id) {
			return customers[i];
		}
	}
	return customer;
}

service.addCustomer = function (customer) {
	customer.id = Math.round(Math.random(289) * 1000000) + '';
	customers.push(customer);
}

service.updateCustomer = function (customer) {
	for (var i = 0; i < customers.length; i++) {
		if (customer.id == customers[i].id) {
			customers[i] = customer;
			return;
		}
	}
}

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

service.deleteCustomer = function ({ id }) { //{id:7}
	var tempCustomers = [];
	for (var i = 0; i < customers.length; i++) {
		if (id != customers[i].id) {
			tempCustomers.push(customers[i]);
		}
	}
	customers = tempCustomers;
}
//console.log(service)
module.exports = service;