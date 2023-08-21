var service = {};

var customers = [
	{ id: '1', name: 'Vivek', email: 'vivek@gmail.com', address: 'Ahmedabad, India', phone: '9724232340' },
	{ id: '2', name: 'Samridh', email: 'samdrih@gmail.com', address: 'Bengaluru, India', phone: '9724237840' },
	{ id: '3', name: 'Mahi', email: 'Mahi@pyther.com', address: 'Delhi, India', phone: '9728937840' }
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