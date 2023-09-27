import React from 'react';
import {Navigate,Outlet} from 'react-router-dom'

const PrivateComponent =()=>{
    // checking local storage for any item
    const auth=localStorage.getItem("user");
    
    return auth? <Outlet/>:<Navigate to="/"/>
}
export default PrivateComponent;