import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserContext from './UserContext';
function Menu() {
    const userContext = useContext(UserContext);
    return (
        <div>
            {/* this is commect*/}
            <h2>Customer Management</h2>
            <Link to={'/home'}>Home</Link>&nbsp;|&nbsp;
            <Link to={'/customers'}>Customers</Link>&nbsp;|&nbsp;
            <Link to={'/about'}>About</Link>&nbsp;|&nbsp;
            <Link onClick={() => {
                console.log(">> logout");
                userContext.doLogin(false);
            }} to={'/login'}>Logout</Link>
            <hr />
        </div>
    );
}
export default Menu;