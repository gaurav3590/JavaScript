import React, { useState } from 'react';
import Menu from './Menu';
import Table from "react-bootstrap/Table"
import { getCustomers, getCustomerById, deleteCustomer, updateCustomer, addCustomer } from '../services/CustomerData';
import { useHistory } from 'react-router';

export function CustomerAppF() {
    const [state, setState] = useState({
        items: getCustomers(), name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
    });
    const history = useHistory();
    let reloadCustomer = () => {
        setState({ ...state, items: getCustomers() });
    }
    let doDelete = (id) => {
        console.log("delete comp id:" + id);
        deleteCustomer({ id })
        reloadCustomer();
    }
    let doEdit = (id) => {
        history.push("/customers/edit/" + id);
    }
    let handleCancel = () => {
        setState({
            ...state,
            name: '',
            email: '',
            phone: '',
            address: '',
            id: 0,
            bLabel: 'Add'
        })
    }
    let handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (!state.name.length) {
            return;
        }
        const newItem = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            address: state.address,
            id: Date.now()
        };
        if (state.id !== 0) { 
            newItem.id = state.id;
            updateCustomer(newItem);
            reloadCustomer();
            setState((prevState) => ({
                ...state,
                id: 0,
                name: '',
                email: '',
                phone: '',
                address: '',
                bLabel: 'Add'
            }));
        } else { 
            addCustomer(newItem);
            reloadCustomer();
            setState((prevState) => ({
                ...state,
                id: 0,
                name: '',
                email: '',
                phone: '',
                address: '',
                bLabel: 'Add'
            }));
        }
    }
    return (
        <div>
            <Menu />
            <h3>Customers</h3>
            <button onClick={() => {
                history.push("/customers/add");
            }}>Add Customer</button><br /><br />
            <CustomerList items={state.items}
                delCustomer={doDelete}
                editCustomer={doEdit} />
        </div>
    );
}
console.log(getCustomerById);
function CustomerList({ items, editCustomer, delCustomer }) {
    return (
        <div>
            <Table className='Table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td><button onClick={() => { editCustomer(item.id) }}>Edit</button></td>
                            <td><button onClick={() => { delCustomer(item.id) }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}