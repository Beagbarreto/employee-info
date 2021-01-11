import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import Form from './EmployeeForm/form';
import List from './EmployeeList/list';

const Main = () => {

  return (
    <HashRouter>
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">Employee App</a>
          </div>
        </nav>
        <div class="row">
          <div class="col s3" >
            <div class="row" className="Button-margin">
              <NavLink to="/"><a class="waves-effect waves-light btn">Form</a></NavLink>
            </div>
            <div class="row" className="Button-margin">
              <NavLink to="/list"><a class="waves-effect waves-light btn">List</a></NavLink>
            </div>
          </div>
          <div class="col s9" className="Content-centered">
            <div >
              <Route exact path="/" component={Form}/>
              <Route path="/list" component={List}/>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
 
export default Main;