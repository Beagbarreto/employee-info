import './App.css';
import List from './components/EmployeeList/list';
import Form from './components/EmployeeForm/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List />
        < Form />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
