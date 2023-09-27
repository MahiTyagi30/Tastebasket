import React from 'react'
import { useState } from 'react';
import '../App.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditProfile from './EditProfile'; 
import Table from 'react-bootstrap/Table'
import { clearCart } from '../redux/actions/action';
import Avatar from '@mui/material/Avatar';

export default function Profile() {
  const navigate=useNavigate();
  


  const handleEditClick = () => {
    const auth = localStorage.getItem("user");
  
    if (auth) {
      const userData = JSON.parse(auth);
      if (userData._id) {
        const userId = userData._id;
        navigate(`/editprofile/${userId}`);
      } else {
        console.error("User ID not found in user data");
        // Handle the case where user data does not contain the ID
      }
    } else {
      console.error("User data not found in local storage");
      // Handle the case where user data is not found in local storage
    }
  };

  const dispatch = useDispatch();
   const logout =()=>{
    dispatch(clearCart()); 
    localStorage.clear();
    
    navigate('/');
}
  return (

<div>
  <h1>profile page</h1>
  <button>Logout</button>
</div>
  
  )
}
