//import React, { Component } from "react";
import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Form from './EmployeeForm/form';
import List from './EmployeeList/list';

const Main = () => {

    return (
<HashRouter>
<div>
  <h1>Employee App</h1>
  <ul className="header">
    <li><NavLink to="/">Form</NavLink></li>
    <li><NavLink to="/list">List</NavLink></li>
  </ul>
  <div className="content">
    <Route exact path="/" component={Form}/>
    <Route path="/list" component={List}/>
  </div>
</div>
</HashRouter>

    );
}
 
export default Main;