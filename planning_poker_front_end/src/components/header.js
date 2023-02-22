import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
const LOGOUT_URL = 'https://localhost:44349/api/User/logout'

const Header=props=>{
    console.log(props.user)
    let logToggle;
    const [logoutMsg, setLogoutMsg] = useState('')
    console.log(logoutMsg)    

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    let username;

    if (props.user != undefined)
    {
        localStorage.setItem('username', (props.user));
        username=localStorage.getItem('username')
    }
    console.log(username+' cia jau userneimas headeryje')

    let adminLoggedInStatus = localStorage.getItem('admin logged in')
    console.log(adminLoggedInStatus + ' cia admin loggedin statusas')
    let guestLoggedInStatus = localStorage.getItem('guest logged in')
    console.log(guestLoggedInStatus + ' cia guest loggedin statusas')
   
    const logout = async ()=>{
        fetch(LOGOUT_URL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'     
        })
            .then(result=> result.json())
            .then(data=>setLogoutMsg(data.message));
            setAuth({});
            
            username=null;
            localStorage.clear();
            console.log('pacioj logout funkcijoje: '+logoutMsg)
            navigate('/');

            localStorage.clear();           
    }
if(adminLoggedInStatus != null || guestLoggedInStatus != null){
        username=localStorage.getItem('username')
        logToggle=(
            <div class="col-6 row justify-content-end">   
                <div class="col-6" align="right">
                    <span>                 
                    {username}
                    </span>
                </div>
                <div class="col-2" align="left">
                    <Link to="/" class="nav-link active" onClick={()=>{logout()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill mb-1" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    <span> Logout</span>
                    </Link>
                </div>                
            </div>
        )
    }          
    else {      
           
        logToggle=(
            <div class="col-6 row justify-content-end">   
                <div class="col-6" align="right">
                    <span>
                        
                    </span>
                </div>
                <div class="col-2" align="left">
                    <Link to="/adminlogin" class="nav-link active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill mb-1" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    <span> Login</span>
                    </Link>
                </div>                
            </div>
        )
}
    return(
        <div class="container-fluid">
        <nav class="header navbar fixed-top row">
            <div class="col-3">
                <span class="navbar-brand h1 ms-4">Festo Scrum Poker</span>                
            </div>
            {logToggle}
            <div class="col-2" align="center">
                <a href="https://www.festo.com">
            <img src="https://www.festo.com/media/fox/frontend/img/svg/logo_blue.svg" alt="Festo icon" width="120px" align="center" />          
                </a>
            </div>
        </nav>    
        </div>
    )
    }

export default Header;