import { Navigate, Outlet } from "react-router-dom"

const NotLoggedInRoutes=()=>{
    let adminLoggedInStatus = localStorage.getItem('admin logged in') 
    let guestLoggedInStatus = localStorage.getItem('guest logged in')  

    let access;


    // if(!guestLoggedInStatus)
    // access=(<Outlet/>)   
    // else if(guestLoggedInStatus)
    // access=(<Navigate to="/guestlobby"/>)
    // else
     if(!adminLoggedInStatus && !guestLoggedInStatus)
    access=(<Outlet/>)

    else if(adminLoggedInStatus)
    access=(<Navigate to="/adminlobby"/>)

    else 
    access=(<Navigate to="/guestlobby"/>)

    return(    
        access
    )
}
export default NotLoggedInRoutes