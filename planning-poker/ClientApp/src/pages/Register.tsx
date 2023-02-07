import React, {SyntheticEvent ,useState} from 'react';
import { Navigate } from "react-router-dom";


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();
       await fetch('https://localhost:44338/api/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
       setRedirect(true);
    }
    if(redirect){
        return <Navigate to='/login'/>
    }

    return (
        <form onSubmit={submit} className='form-signin w-100 m-auto'>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>
            <input onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name" required/>
            <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email address" required/>
            <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" required/>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default Register;