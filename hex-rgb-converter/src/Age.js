import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/employees";

const Age = ({ age }) => {
  const [emloyees, setEmloyees] = useState([]);
  console.log("age 1");

  useEffect(() => {
    // component did update
    axios.get(URL).then(({ data }) => {
      setEmloyees(data);
    });
    console.log("component updated..."); // fetch api ||  addEventListener
    console.log("age ");
    return () => {
      console.log("unmount Age..");
    };
  }, []);
  console.log("emloyees...", emloyees);

  useEffect(() => {
    console.log("listen to employees", emloyees);
  }, [emloyees]);

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
        {emloyees.map((emloyee, index) => {
          // console.log(emloyee);
          const { id, fullname, phone, dep } = emloyee;
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
