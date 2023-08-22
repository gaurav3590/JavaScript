import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import { CustomerAppF } from './components/CustomerList';
import { CustomerAddEdit } from './components/CustomerAdd';
import UserCtx from './components/UserContext'
import Protected from './components/Protected'

function App() {
   var loginStatus = () => {
      if (localStorage.getItem('isLoggedIn') === 'true') {
         return true;
      } else {
         return false;
      }
   }
   const [isLoggedIn, setIsLoggedIn] = useState(loginStatus());
   // context UserCtx.Provider {isLoggedIn:true/false, setIsLoggedIn=(){}}
   // login protect is from isLoggedIn
   return (
      <Router>
         <UserCtx.Provider
            value={{
               isLoggedIn,
               doLogin: (code) => {
                  if (code) {
                     setIsLoggedIn(true);
                     localStorage.setItem('isLoggedIn', "true");
                     // in real app this is access_token 
                  } else {
                     localStorage.removeItem('isLoggedIn');
                     setIsLoggedIn(false)
                  }
               }
            }} >
            <div style={{ paddingLeft: '8px', backgroundColor: "white", height: '100vh' }}>
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Protected isLoggedIn={isLoggedIn} exact path="/customers/add"><CustomerAddEdit /></Protected>
                  <Protected isLoggedIn={isLoggedIn} exact path="/customers/edit/:id">
                     <Route exact path='/customers/edit/:id' component={CustomerAddEdit} />
                  </Protected>
                  <Protected isLoggedIn={isLoggedIn} exact path="/customers"><CustomerAppF /></Protected>
                  <Route exact path='/login' component={Login} />
                  <Protected isLoggedIn={isLoggedIn} exact path="/home"><Home /></Protected>
                  <Protected isLoggedIn={isLoggedIn} exact path="/about"><About /></Protected>
               </Switch>
            </div>
         </UserCtx.Provider>
      </Router>
   );
}
export default App;