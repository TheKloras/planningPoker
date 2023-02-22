import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header";
import Footer from './components/footer';
import './App.css';
import GuestLogin from './pages/guestlogin';
import GuestLobby from './pages/guestlobby';
import AdminLogin from './pages/adminlogin';
import AdminLobby from './pages/adminlobby';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useState } from 'react';
import NotLoggedInRoutes from './utils/notloggedinroutes';
import ProtectedAdminRoutes from './utils/protectedadminroutes';
import ProtectedGuestRoutes from './utils/protectedguestroutes';

function App() {
  const [userData, setUserData] = useState('test')
    console.log(userData);
  return (
    <>
      <Router>            
        <Header user={userData.name} />
          <main class="main container-fluid ">
                <Routes>
                  
                    <Route element={<NotLoggedInRoutes/>}>
                      <Route path="/" element={<GuestLogin onChange={content => setUserData(content)}/>}/>
                      <Route path="/adminlogin" element={<AdminLogin onChange={content => setUserData(content)}/>}/>
                    </Route>

                    <Route element={<ProtectedAdminRoutes/>}>
                      <Route path="/adminlobby" element={<AdminLobby/>}/>
                    </Route>

                    <Route element={<ProtectedGuestRoutes/>}>
                      <Route path='/guestlobby' element={<GuestLobby/>}/>
                    </Route>
                </Routes>            
          </main>
        <Footer/>
      </Router>
    </>
  );
 } 

export default App;
