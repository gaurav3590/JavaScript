import React, { useState, useEffect, useReducer } from 'react';
import Menu from './Menu';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { getCustomers, addCustomer, deleteCustomer, updateCustomer } from '../services/CustomerData';
// function 
//export default About;
const initialState = {
    id: 0, name: '', email: '', phone: '', address: '', label: 'Add'
};

function reducer(state, action) {
    console.log("action:" + JSON.stringify(action))
    //function takes action and based on action it will modify the state
    switch (action.type) {
        case 'reset':
            return { ...initialState };
        case 'updateField':
            var newState = { ...state };
            newState[action.field] = action.data;
            return newState;
        case 'update':
            var newState = { ...action };
            console.log("newState", newState);
            delete (newState.type);
            return newState;
        default:
            throw new Error();
    }
}

export default function StudentApp() { //p 46
    //
    // destructure useState
    const [items, setItems] = useState(getCustomers());
    const [state, dispatch] = useReducer(reducer, initialState);

    var deleteItem = (id) => {
        deleteCustomer({ id });
        setItems(getCustomers());
    }
    var handleChange = (e) => {
        dispatch({ type: "updateField", field: e.target.name, data: e.target.value });
    }

    var resetForm = (e) => {
        e.preventDefault();
        dispatch({ type: 'reset' });
    }
    var editItem = (id) => {
        var customers = items.filter((item) => (item.id === id))
        if (customers.length > 0) {
            let customer = customers[0];
            dispatch({
                type: 'update', ...customer, label: "Update"
            });
        }
        //this.setState({items:customers});
    }
    var handleSubmit = (e) => {
        e.preventDefault();
        if (!state.name.length) {
            return;
        }
        const newItem = {
            ...state,
            id: Date.now()
        };
        if (state.id !== 0) { //edit
            newItem.id = state.id;
            updateCustomer(newItem);
        } else { //new
            addCustomer(newItem);
            //tempItems = items.concat(newItem);
        }
        dispatch({ type: 'reset' });
        setItems(getCustomers());
    }
    return (
        <div>
            <Menu />
            <h3>Student</h3>
            <form>
                <input name='name' placeholder="name"
                    onChange={handleChange}
                    value={state.name}
                /> <br /><br />
                <input name='email' placeholder="email"
                    onChange={handleChange}
                    value={state.email}
                /> <br /><br />
                <input name='phone' placeholder="phone"
                    onChange={handleChange}
                    value={state.phone}
                /> <br /><br />
                <input name='address' placeholder="address"
                    onChange={handleChange}
                    value={state.address}
                /> <br /><br />
                <Button onClick={handleSubmit}>
                    {state.label}
                </Button>&nbsp;&nbsp;
                <Button variant="secondary" onClick={resetForm}>
                    Cancel
                </Button>
            </form><br />
            <CustomerList items={items} editItem={editItem} deleteItem={deleteItem} />
        </div>
    );
}

function CustomerList({ items, editItem, deleteItem }) {
    return (
        <div>
            <Table style={{ width: "100%" }} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td id={item.id}> {item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td><Button variant="info" onClick={() => editItem(item.id)} >Edit</Button></td>
                            <td><Button variant="danger" onClick={() => deleteItem(item.id)}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table><br /><br />
        </div>
    );
}
