import React, {SyntheticEvent, useState} from 'react';
import {Navigate} from "react-router-dom";

const Login = ( props: {setName: (name: string)=> void}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();
        const response = await fetch('https://localhost:44338/api/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json()
        props.setName(content.name)
        window.location.replace('/')
        //setRedirect(true);
    }
    // if(redirect){
    //     return (
    //         <>
    //         <Navigate to='/'/>
    //         </>
    //     )
    // }


    return (
        <div className='Login d-flex align-items-center justify-content-center'>
            <div>
                <form onSubmit={submit} className='form-signin w-100 m-auto'>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <input onChange={e=> setEmail(e.target.value)} type="email" className="form-control" placeholder="Email address" required/>
                    <input onChange={e=> setPassword(e.target.value)} type="text" className="form-control" placeholder="Password" required/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;