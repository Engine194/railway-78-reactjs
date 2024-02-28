import React, { useEffect, useState } from 'react';
import axios from "axios";

const URL = 'https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees'

const Age = ({ age }) => {
    const [employees, setEmpployees] = useState([]); 
    console.log("age 1");

    useEffect(() => {
        axios.get(URL).then(({data}) => {
            console.log("data...", data);
            setEmpployees(data);
        })
        console.log('component updated...'); // fetch api || addEventListener
        console.log('age 3');
    }, []) // sự phụ thuộc, sự thay đổi
    console.log("employees...", employees);
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
                        const {id, fullname, phone, dep} = employee;
                        return <tr key={index}>
                            <td>{id}</td>
                            <td>{fullname}</td>
                            <td>{phone}</td>
                            <td>{dep}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Age;