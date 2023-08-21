import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useHistory, useParams } from 'react-router'
import { getCustomers, getCustomerById, deleteCustomer, updateCustomer, addCustomer } from '../services/CustomerData';

export function CustomerAddEdit() {
    const [state, setState] = useState({
        items: getCustomers(), name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
    });
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        console.log("useParams", params);
        if (typeof (params.id) !== 'undefined') {
            let customer = getCustomerById(params.id);
            if (typeof (customer.name) !== 'undefined') {
                setState({ ...customer, bLabel: 'Update' })
                console.log("useParams", params.id);
            }
        }
    }, [])
    let reloadCustomer = () => {
        setState({ ...state, items: getCustomers() });
    }
    let doDelete = (id) => {
        console.log("delete comp id:" + id);
        deleteCustomer({ id })
        reloadCustomer();
    }
    let doEdit = (id) => {
        console.log("doEdit comp id:" + id);
        let tempCustomers = state.items.filter((item) => (item.id == id));
        if (tempCustomers.length > 0) {
            var customer = tempCustomers[0];
            setState({ ...state, ...customer, bLabel: "Update" }); //id
        }
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
        //setState({ ...state, name: "Vivek" });
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
        if (state.id !== 0) { //update
            newItem.id = state.id;
            updateCustomer(newItem);
        } else { //add
            addCustomer(newItem);
        }
        history.push("/customers");
        //this.setState({}) //object pass to setState
        //this.setState((oldState)=>{return {}}) //function pass to setState
    }
    return (
        <div>
            <Menu />
            <h3>Customers</h3>
            <input name="name" placeholder="Name"
                onChange={handleChange}
                value={state.name}
            /> <br /><br />
            <input name="email" placeholder="Email"
                onChange={handleChange}
                value={state.email}
            /> <br /><br />
            <input name="phone" placeholder="Phone"
                onChange={handleChange}
                value={state.phone}
            /> <br /><br />
            <input name="address" placeholder="Address"
                onChange={handleChange}
                value={state.address}
            /> <br /><br />
            <button onClick={handleSubmit}>
                {state.bLabel}
            </button> &nbsp;&nbsp;
            <button onClick={handleCancel}>
                Cancel
            </button>
            <hr />
        </div>
    );
}