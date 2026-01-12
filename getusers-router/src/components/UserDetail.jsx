import { Link, useSearchParams } from "react-router-dom";
import {fetchUser} from './user.api';
import { useState } from "react";
import { useEffect } from "react";

function UserDetail(){
  const [searchParams, setSearchParams] = useSearchParams();
  const [userData,setUserData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const userId = searchParams.get("id")

  const userDetail = async (id) => {
    const resp = await fetchUser(id);
    setUserData(resp);
    console.log(resp);
    return resp;
  }
  useEffect(()=>{
    try{
        userDetail(userId);
    }catch(error){
        setErrorMessage(error)
    }
  },[])

    return (
        <>
        {
            <Link to={`/users`}>Go Back</Link>
        }
        {
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>FIRST NAME</td>
                        <td>LAST NAME</td>
                        <td>PICTURE</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData!=null && userData!=undefined ?
                        [userData].map((ud,index)=>(
                            <tr>
                                <td key={ud.id}>{ud.id}</td>
                                <td key={ud.firstName}>{ud.firstName}</td>
                                <td key={ud.lastName}>{ud.lastName}</td>
                                <td key={ud.image}><img src={ud.image} alt={ud.image} /></td>
                            </tr>
                        ))
                        : 
                        <td>{errorMessage ? errorMessage : "No"}</td>
                    }
                </tbody>
            </table> 
        }
        </>
    )
}
export default UserDetail