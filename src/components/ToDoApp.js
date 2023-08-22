import React, { useState } from 'react';
import Menu from './Menu';

export class ToDoAppC extends React.Component {
    constructor(props) {
        super(props); //
        this.state = {
            items: [
                { id: 1, name: "Gaurav", email: 'gaurav@abc.com', address: "India", phone: "9911223344" },
                { id: 2, name: "Fenil", email: 'fenil@abc.com', address: "Ahmedabad", phone: "8989001122" },
                { id: 3, name: "Mohit", email: 'mohit@abc.com', address: "Gandhinanagr", phone: "8090114477" }
            ], name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
        };
        //Another approach to handle this 
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    doDelete = (id) => {
        console.log("delete comp id:" + id);
        let tempCustomers = this.state.items.filter((item) => (item.id !== id));
        this.setState({ items: tempCustomers });
    }
    doEdit = (id) => {
        console.log("doEdit comp id:" + id);
        let tempCustomers = this.state.items.filter((item) => (item.id === id));
        if (tempCustomers.length > 0) {
            var customer = tempCustomers[0];
            this.setState({ ...customer, bLabel: "Update" });
        }
    }
    handleCancel = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            address: '',
            id: 0,
            bLabel: 'Add'
        })
    }

    render() {
        return (
            <div>
                <h3>Customer App</h3>
                <input name="name" placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.name}
                /> <br /><br />
                <input name="email" placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.email}
                /> <br /><br />
                <input name="phone" placeholder="Phone"
                    onChange={this.handleChange}
                    value={this.state.phone}
                /> <br /><br />
                <input name="address" placeholder="Address"
                    onChange={this.handleChange}
                    value={this.state.address}
                /> <br /><br />
                <button onClick={this.handleSubmit}>
                    {this.state.bLabel}
                </button> &nbsp;&nbsp;
                <button onClick={this.handleCancel}>
                    Cancel
                </button>
                <hr />
                <CustomerList items={this.state.items} delCustomer={this.doDelete} editCustomer={this.doEdit} />
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name.length) {
            return;
        }
        const newItem = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            id: Date.now()
        };
        if (this.state.id !== 0) {
            newItem.id = this.state.id;
            for (let i = 0; i < this.state.items.length; i++) {
                if (this.state.items[i].id === newItem.id) {
                    this.setState.items[i] = newItem;
                    break;
                }
            }
            this.setState((prevState) => ({
                id: 0,
                name: '',
                email: '',
                phone: '',
                address: '',
                bLabel: 'Add'
            }));
        } else {
            this.setState((prevState) => ({
                id: 0,
                items: prevState.items.concat(newItem),
                name: '',
                email: '',
                phone: '',
                address: '',
                bLabel: 'Add'
            }));
        }
        //this.setState({}) //object pass to setState
        //this.setState((oldState)=>{return {}}) //function pass to setState
    }
}
class CustomerList extends React.Component {
    render() {
        return (
            <div>
                <table border={"1px"}>
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
                        {this.props.items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td><button onClick={() => { this.props.editCustomer(item.id) }}>Edit</button></td>
                                <td><button onClick={() => { this.props.delCustomer(item.id) }}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        );
    }
}
export function ToDoAppF() {
    const [state, setState] = useState({
        items: [
            { id: 1, name: "Gaurav", email: 'gaurav@abc.com', address: "India", phone: "9911223344" },
            { id: 2, name: "Fenil", email: 'fenil@abc.com', address: "Ahmedabad", phone: "8989001122" },
            { id: 3, name: "Mohit", email: 'mohit@abc.com', address: "Gandhinanagr", phone: "8090114477" }
        ], name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
    });

    let doDelete = (id) => {
        console.log("delete comp id:" + id);
        let tempCustomers = state.items.filter((item) => (item.id !== id));
        setState({ ...state, items: tempCustomers });
    }
    let doEdit = (id) => {
        console.log("doEdit comp id:" + id);
        let tempCustomers = state.items.filter((item) => (item.id === id));
        if (tempCustomers.length > 0) {
            var customer = tempCustomers[0];
            setState({ ...state, ...customer, bLabel: "Update" }); //id
            //this.setState({name:customer.name,,bLabel:"Update"});
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
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === newItem.id) {
                    state.items[i] = newItem;
                    break;
                }
            }
            setState((prevState) => ({
                ...state,
                id: 0,
                name: '',
                email: '',
                phone: '',
                address: '',
                bLabel: 'Add'
            }));
        } else { //add
            setState((prevState) => ({
                ...state,
                id: 0,
                items: prevState.items.concat(newItem),
                name: '',
                email: '',
                phone: '',
                address: '',
                bLabel: 'Add'
            }));
        }
        //this.setState({}) //object pass to setState
        //this.setState((oldState)=>{return {}}) //function pass to setState
    }
    return (
        <div>
            <h3>Customer App</h3>
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
            <CustomerList items={state.items}
                delCustomer={doDelete}
                editCustomer={doEdit} />
        </div>
    );
}
export function CustomerListF({ items, editCustomer, delCustomer }) {
    return (
        <div>
            <table>
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
            </table>
        </div>
    );
}
