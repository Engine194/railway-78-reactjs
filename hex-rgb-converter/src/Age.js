import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
const URL = 'https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees';

const Age = ({age}) => {
    const [employees, setEmployees] = useState([])
    console.log('age 1')

    useEffect(() => {   //component did update  
        axios.get(URL).then(({data}) => {
            
            setEmployees(data)
        })
        console.log("component updated...")     // fetch API || addEventListener
        console.log('age 3')
         
        return () => {          //clean up function
            console.log('Unmount Age...')
        }
    }, [])
    console.log("employees...", employees)

    useEffect(() => {
        console.log('listen to employees', employees, age)
    }, [employees, age])

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
                    console.log(employee)
                    const {id, fullname,dep, phone} = employee
                    console.log(id, fullname,dep, phone)
                    return <tr key = {index}>
                        <td>{id}</td>
                        <td>{fullname}</td>
                        <td>{phone}</td>
                        <td>{dep}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Age