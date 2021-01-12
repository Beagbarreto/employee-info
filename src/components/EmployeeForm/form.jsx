import React, { useState } from 'react';
import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';

function Form() {
const [employeeData, setEmployeeData] = useState('');

  return (
    <div>
      <h1>Data belongs here</h1>
      <div class="row">
        <form class="col s8">
          <div class="row">
            <div class="input-field col s8">
              <input id="name" type="text" class="validate" />
              <label for="name">Last Name</label>
              <span class="helper-text" data-error="wrong" data-success="right"/>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s8">
              <input id="email" type="email" class="validate"/>
              <label for="email">Email</label>
              <span class="helper-text" data-error="wrong" data-success="right"/>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s8">
              <input id="date" type="date" class="validate"/>
              <label for="date">Birthdate</label>
              <span class="helper-text" data-error="wrong" data-success="right"/>
            </div>
          </div>
          {/* <input type="text" class="datepicker" />*/}
          <div class="row">
            <div class="input-field col s8">
              <input id="address" type="text" class="validate" />
              <label for="address">Address</label>
              <span class="helper-text" data-error="wrong" data-success="right"/>
            </div>
          </div>
        </form>
      </div>
    </div> 
  )
}

export default Form;