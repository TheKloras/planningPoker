import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const GUEST_LOGIN_URL = 'https://localhost:44349/api/GuestUser/login'

const GuestLogin=props=>{
    console.log(props)
    const { setAuth } = useContext(AuthContext);
    const errRef = useRef();
    const [name, setName] = useState('');
    const [errMsg, setErrMsg] = useState('');  
    const navigate = useNavigate();

    useEffect(()=>{
        setErrMsg('');
    }, [name])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(GUEST_LOGIN_URL, JSON.stringify({name}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
            );
            setAuth({name})
            setName('')
            navigate('/guestlobby')
            localStorage.setItem('guest logged in', 'true')
            const content = response?.data
            console.log(content + ' is guesto')
            props.onChange(content) 
            props.onSubmit(content)
    }catch(err){
        if(!err?.response) {
            setErrMsg('No server response');
        }else if (err.response?.status === 400){
            setErrMsg(                 
                <div class="alert alert-danger d-flex align-items-center" role="alert"> 
                    <div>
                        You have provided invalid credentials 
                    </div>
                </div>                                   
                );
        }else if (err.response?.status === 401){
            setErrMsg("Unauthorized");
        }else{
            setErrMsg("Login failed");
        }
        // errRef.current.focus();
    }     
}
    return(
        <section class="guest-login container-fluid row justify-content-center align-items-center">
                <div class="letsStart col-5 ">
                    <h1 class="text-center">Let's Start</h1>
                    <h5 class="text-center">Join the room:</h5>
                    <br/>                  
                        <form onSubmit={handleSubmit}>
                            <div class="input-group">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-1 mb-1 col bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                </span>
                                <input                       
                                    class="form-control"
                                    maxLength={25}
                                    type="text"
                                    placeholder="Enter your name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required>                
                                </input>
                            </div>
                            <br/>
                            <button class="form-control btn btn-primary" type="submit">
                                Enter
                            </button>                     
                        </form>      
                    <br/>  
                    <div ref={errRef} class={errMsg ? "errmsg" : "offscreen"}  aria-live="assertive"  >  
                                   {errMsg}
                                
                            </div>
                    <h5 class="text-center">Already have an account?</h5>    
                    <br/>
                    <button class="form-control btn btn-outline-primary">
                        <Link to="/adminlogin" class="nav-link active">Login</Link>                          
                    </button>      
                </div>  
        </section>
    )
}

export default GuestLogin;