import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import { CustomerAppF } from './components/CustomerList';
import { CustomerAddEdit } from './components/CustomerAdd';

function App() {
   return (
      <Router>
         <div style={{ marginLeft: '8px' }}>
            <Switch>
               <Route exact path='/' component={Login} />
               <Route exact path='/customers' component={CustomerAppF} />
               <Route exact path='/customers/add' component={CustomerAddEdit} />
               <Route exact path='/customers/edit/:id' component={CustomerAddEdit} />
               <Route exact path='/login' component={Login} />
               <Route exact path='/home' component={Home} />
               <Route exact path='/about' component={About} />
            </Switch>
         </div>
      </Router>
   );
}
export default App;