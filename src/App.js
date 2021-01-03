import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import EmployeesTable from "./components/EmployeesTable";
function App() {
const [employees, setEmployees]=useState([]);
useEffect(()=>{
  axios.get("https://randomuser.me/api/?results=10&nat=us").then(response =>{
    setEmployees([...response.data.results])
  })
}, [])
console.log(employees)
  return (
    <div className="App">
      <header>
        <h1>Employee Directory</h1>
      
        
      </header>
      <EmployeesTable employees={employees}/>
    </div>
  );
}

export default App;
