import React, { useEffect, useState } from 'react'
import axios from 'axios';

const URL = 'https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees';

const Age = ({ age }) => {
    console.log('age 1');

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get(URL).then(({data}) => {

            setEmployees(data);
        });

        console.log('component updated...');
        console.log('age 3');
    }, []);

    console.log('employees...', employees);


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
                        const {id, phone, dep, fullname} = employee;
                        console.log(id, phone, dep, fullname);
                        return <tr key={index}>
                            <td>{id}</td>
                            <td>{phone}</td>
                            <td>{dep}</td>
                            <td>{fullname}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    ) 
}

export default Age