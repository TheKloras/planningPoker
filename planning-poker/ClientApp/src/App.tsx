import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

// https://youtu.be/OUP-urBy1k4?list=PLlameCF3cMEtY5S-9aVlCobcfDdbmpjPa&t=1339


function App() {
    const [name, setName] = useState('')
    useEffect(()=>{
        (
            async ()=>{
                const response =  await fetch('https://localhost:44338/api/user',{
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                });
                const content = await response.json();
                setName(content.name)
            }
        )()
    });
console.log(name + ' is app')
  return (    
           
        <Router>
            <div className="App container row m-auto"> 
            <Nav name={name} setName={setName}/>
            <Routes>
                <Route path="/" element={<Home name={name}/> }/>
                <Route path='/login' element={<Login setName={()=>setName}/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>            
            <Footer />
            </div>
        </Router>
    
  );
}

export default App;
