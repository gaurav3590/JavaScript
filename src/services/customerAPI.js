var apiEndPoint = "https://nodeapi.pyther.com/customer";
// GET https://nodeapi.pyther.com/customer  fetch RECORDS
// POST https://nodeapi.pyther.com/customer ADD RECORD
// PUT https://nodeapi.pyther.com/customer UPDATE RECORD
// DELETE https://nodeapi.pyther.com/customer DELETE RECORD

var customers = [
    { id: 1, name: "Gaurav", email: 'gaurav@abc.com', address: "India", phone: "9911223344" },
    { id: 2, name: "Fenil", email: 'fenil@abc.com', address: "Ahmedabad", phone: "8989001122" },
    { id: 3, name: "Mohit", email: 'mohit@abc.com', address: "Gandhinanagr", phone: "8090114477" }
];

var saveLocalStorage = () => {
    localStorage.setItem('customers', JSON.stringify(customers));
    saveLocalStorage();
}

export var getCustomers = () => {
    return fetch(apiEndPoint, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response));
            return response;
        }).catch(function (error) {
            console.log(error);
        });
}

export var addCustomer = (customer) => {
    return fetch(apiEndPoint, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(customer)
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response));
            return response;
        }).catch(function (error) {
            console.log(error);
        });
}

export var deleteCustomer = ({ id }) => {
    return fetch(apiEndPoint, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ id })
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response));
            return response;
        }).catch(function (error) {
            console.log(error);
        });
}

export var getCustomerById = (id) => {
    return fetch(apiEndPoint + "/" + id, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response));
            return response;
        }).catch(function (error) {
            console.log(error);
        });
}

export var updateCustomer = (customer) => {
    return fetch(apiEndPoint, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(customer)
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response));
            return response;
        }).catch(function (error) {
            console.log(error);
        });
}