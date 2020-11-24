import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
function EmployeesTable({ employees }) {
  const emp = employees;
  console.log(emp);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((employee) => {
            return (
              <tr>
                <td>
                  <img src={employee.picture.medium} />
                </td>
                <td>
                  {employee.name.last} {employee.name.first}
                </td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeesTable;
