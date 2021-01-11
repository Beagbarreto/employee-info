import React, { useState } from 'react';
import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';

function List() {
const [employees, setEmployees] = useState([
{name: 'Roger Vormittog', address: '11 Jackson Av, Scarsdale, NY', id: 1},
{name: 'Giselle knowles', address: '15 Heathcote Road, Scarsdale, NY', id: 2},
{name: 'Lauren George', address: '53 Winter Hill Rd, Tuckahoe, NY', id: 3}
]);
 
 return (
   <div>
     <h1>List belongs here</h1>
     <div>
     {employees.map((employee) => (
       <div key={employee.id}>
         <ul>
           <li>{employee.name}</li>
         </ul>
       </div>
     ))}
     </div>
     </div>
 )
}
 
export default List;