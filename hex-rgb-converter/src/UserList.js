import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { User } from "./model/user";
import UserItem from "./UserItem";
import Menu from "./Menu";

export default function UserList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    if (USER_URL) {
      setLoading(true);
      try {
        const result = await fetch(USER_URL).then((res) => res.json());
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <h1>Something went wrong! =\</h1>;
  } else if (loading) {
    return <Loading />;
  } else if (data?.length > 0) {
    return (
      <>
      <Menu/>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
            <th>BirthDate</th>
            <th>Gender</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            const current = new User(user);
            return <UserItem key={index} data={current} />;
          })}
        </tbody>
      </table>
      </>
    );
  } else {
    return null;
  }
}
