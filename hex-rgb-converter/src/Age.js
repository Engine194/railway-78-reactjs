import React, { useEffect, useState } from "react";
import axios from "axios";
const URL = "https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees";

const Age = ({ age }) => {
  const [employees, setEmployees] = useState([]);
  console.log("age1");
  useEffect(() => {
    // component did update
    axios.get(URL).then(({ data }) => {
      console.log("data...", data);
      setEmployees(data);
    });
    console.log("component updated..."); //fetch api || addEvenListener
    console.log("age3");
    return () => {
      //clean up function
    };
  }, []);
  console.log("employees...", employees);
  useEffect(() => {
    console.log("listen to employees", employees);
  }, [employees]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Fullname</th>
            <th>Phone</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            const { id, phone, dep, fullname } = employee;
            console.log(id, phone, dep, fullname);
            return (
              <tr key={index}>
                <td>{id}</td>
                <td> {fullname}</td>
                <td>{phone}</td>
                <td>{dep}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Age;
