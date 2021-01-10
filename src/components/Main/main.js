//import React, { Component } from "react";
import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Form from '../EmployeeForm/form';
import List from '../EmployeeList/list';

const Main = () => {

    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Form</a></li>
            <li><a href="/contact">List</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
}
 
export default Main;