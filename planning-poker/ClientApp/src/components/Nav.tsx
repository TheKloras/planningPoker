import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

const Nav = (props: {name: string, setName: (name: string)=> void} ) => {
    let menu;

    const logout = async ()=>{
        await fetch('https://localhost:44338/api/logout',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        props.setName('');
    }

    if(props.name == null){
        menu = (   
            <div>                 
                <Link to='/login' className=" nav-link active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-1 mb-1 col bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    Login                           
                </Link>
            </div> 

        //     <ul className="navbar-nav me-auto mb-2 mb-md-0">
        //     <li className="nav-item">
        //         <i className="bi bi-person-fill"></i>
        //         <Link to='/login' className="nav-link active">Login</Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link to='/register' className="nav-link active">Register</Link>
        //     </li>
        // </ul>
        )
    }else{
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to='/login' className="nav-link active" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

        console.log(props.name + ' is nav')
    return (
        <div className="container fixed-top m-auto row Navigation">
            <nav className="row mt-2">
                <h3 className="mt-1 col-md-8">Festo Scrum Poker</h3>
                <h6 className="p-2 m-1 col-md">        
                    {menu}
                </h6>
                <a className=" pt-1 col-md" href="https://www.festo.com/us/en/">
                    <img src="https://www.festo.com/media/fox/frontend/img/svg/logo_blue.svg" alt="Festo icon" width="120px" />
                </a>
            </nav>
        </div>  
    );
};

export default Nav;