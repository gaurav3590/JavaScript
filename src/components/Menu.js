import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Menu() {
    return (
        <div>
            <h2>Customer Management</h2>
            <Link to={'/about'}>About</Link>&nbsp;|&nbsp;
            <Link to={'/customers'}>Customers</Link>&nbsp;|&nbsp;
            <Link to={'/about'}>About</Link>&nbsp;|&nbsp;
            <Link to={'/login'}>Logout</Link>
            <hr />
        </div>
    );
}
export default Menu;