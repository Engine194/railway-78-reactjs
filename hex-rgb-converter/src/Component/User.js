import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const User = () => {
    const {userId} = useParams();
    console.log(userId);
    const [user, setUser] = useState();


    useEffect(() => {



        const USER_URL = process.env.REACT_APP_USER_API_URL;       
        axios.get(`${USER_URL}/${userId}`).then(({data}) => {
            setUser(data);


        });
        

    }, []);
     

    return (

        
        <div>
            <h1>User Detail</h1>
            <div>
                <p>FullName: {user?.fullname}</p>
                <p>Email: {user?.email}</p>
                <p>UserName: {user?.username}</p>
                <p>Gender: {user?.gender}</p>
                <p>Date of Birth: {user?.dateofbirth}</p>
                <p>Favotite: {user?.favorite}</p>

            </div>
        </div>
    )}

    export default User;