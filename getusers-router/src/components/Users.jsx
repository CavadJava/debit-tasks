import { useEffect, useState } from 'react';
import {fetchUsers} from './user.api.js';
import {Link } from "react-router-dom";

const Users = () => {
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const users = async () => {
        const resp = await fetchUsers()
        setUserData(resp?.users);
        console.log(resp?.users);
        return resp?.users;
    }

    useEffect(() => {
        try{
            users();
            console.log(userData)
        } catch(error){
            setErrorMessage(error)
        }
    }, []);

    return (
        <>
            <div>
                {
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>FIRST NAME</td>
                                <td>LAST NAME</td>
                                <td>DETAIL</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData!=null && userData.length>0 ?
                                    userData.map((ud,index)=>(
                                        <tr key={index}>
                                            <td>{ud.id}</td>
                                            <td>{ud.firstName}</td>
                                            <td>{ud.lastName}</td>
                                            <td>
                                                <Link to={`/user?id=${ud.id}`}>user info</Link>
                                            </td>
                                        </tr>
                                    ))
                                : 
                                <tr><td>{errorMessage}</td></tr> 
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
    );
};

export default Users;