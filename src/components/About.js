import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import CompositionExample from './CompositionEx'
import HoCExample from './HoCExample'
import ReducerExample from './ReducerExample'
import StudentApp from './StudentWithReducer'
import ContextEx from './ContextEx'
import { useHistory, useParams } from 'react-router'
import { getCustomers, getCustomerById, deleteCustomer, updateCustomer, addCustomer } from '../services/CustomerAPI';

// useState
// useEffect
// useReducer
// useContext

// useHistory
// useParams

function About() {
   const [count, setCount] = useState('');

   let loadComp = async () => {
      let list = await getCustomers();
      setCount(list.length);
   }
   useEffect(() => {
      loadComp()
   }, [])
   return (
      <div>
         <Menu />
         <h2>About</h2>
         <p>System has {count} customers</p>
         <CompositionExample />
         <ContextEx />
      </div>
   );
}
export default About;