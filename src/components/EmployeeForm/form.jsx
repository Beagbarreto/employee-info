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
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
          <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
    </form>
  </div>
    </div>
    
  )
}

export default Form;