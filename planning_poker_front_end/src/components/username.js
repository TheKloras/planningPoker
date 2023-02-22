import { useState, useEffect } from "react";
import axios from "axios";
const USER_URL = 'https://localhost:44349/api/User/user'

const UserName=()=>{

const[name,setName]=useState('')
    useEffect(()=>{
                 (
    async (e)=>{
    const response = await axios.get(USER_URL,
    {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
    });   
        console.log(JSON.stringify(response));
        const content = response?.data
        console.log(content);
        console.log(content.name);
        setName(content.name)
        console.log(name + ' from username.js')

    }
    )()
    });

return(
    <div>
    {name}
    </div>
)

}
export default UserName;