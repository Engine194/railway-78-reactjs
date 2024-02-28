import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees";

const Age = ({ age }) => {
  const [employees, setEmployees] = useState([]);
  console.log("age 1");
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setEmployees(data);
    });
    console.log("component updated...");
    console.log("age 3");

    return () => {
      console.log("unmount age");
    };
  }, []);
  console.log("data...", employees);

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
            console.log(employee);
            const { id, phone, dep, fullname } = employee;
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{fullname}</td>
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