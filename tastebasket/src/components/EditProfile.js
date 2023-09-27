import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import  { useState } from 'react';

export default function EditProfile() {

  const [name,setName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [phone,setPhone]=React.useState('');
  const [hintname,setHintname]=React.useState('');
  const [userId,setUserId]=React.useState('');
  const [address,setAddress]=React.useState('');
  
  const [gender,setGender]=React.useState('');
  const [phone2,setPhone2]=React.useState('');
  const [dob, setDOB] = React.useState(null); // Set a default date or null as needed




  



  
  // const [company,setCompany]=React.useState('');


  const params=useParams();
  const navigate=useNavigate();
  
  useEffect(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      // Populate the form fields with user data
      setUserId(userData._id);
      setName(userData.name);
      setEmail(userData.email);
      setPassword(userData.password);
      setPhone(userData.phone);
      setHintname(userData.hintname);
      setGender(userData.gender)
      setAddress(userData.address)
      setDOB(userData.dob)
      setPhone2(userData.phone2);


    }
  }, []);

//  const getProductsDetails=async()=>{
//   console.log(params)
//   let result=await fetch(`http://localhost:5000/product/${params.id}`)
//   result =await result.json();
// setName(result.name)
// setEmail(result.email)
// setPassword(result.password)
// // setCompany(result.company)
//  }

  const updateProfile=async()=>{
      // console.warn(name,price,category,company)
      let result= await fetch(`http://localhost:5000/editprofile/${params.id}`,{
          method:'put',
          body: JSON.stringify({
            name,
            email,
            password,
            phone,
            hintname,
            gender,
            address,
            phone2,
            dob,
          }),
          headers:{
              'Content-Type':"application/json"
          }
      });
      result = await result.json();
      console.log(result);
      const updatedUserData = {
        _id: userId,
        name: name,
        email: email,
        password: password,
        phone:phone,
        hintname:hintname,
        gender:gender,
        address:address,
        phone2:phone2,
        dob:dob,
      };
  
      // Save the updated data to local storage
      localStorage.setItem('user', JSON.stringify(updatedUserData));
      navigate('/');
  }
  return (
    <div className='register'>
    <h1 style={{marginLeft:"200px",marginTop:"40px"}}>
       Edit Profile
    </h1>
    <input type="text" placeholder='Enter yourt Name' className='inputBox'   value={name} onChange={(e)=>{setName(e.target.value)}}/>


    <input type="text" placeholder='Enter your Email' className='inputBox'  value={email}   onChange={(e)=>{setEmail(e.target.value)}}/>

    


    <input type="text" placeholder='Enter your Password' className='inputBox' value={password}   onChange={(e)=>{setPassword(e.target.value)}}/>
    <input type="text" placeholder='Enter your Phone no.' className='inputBox' value={phone}   onChange={(e)=>{setPhone(e.target.value)}}/>
    <input type="text" placeholder='Enter your hint name.' className='inputBox' value={hintname}   onChange={(e)=>{setHintname(e.target.value)}}/>
    <input type="text" placeholder='Enter your address.' className='inputBox' value={address}   onChange={(e)=>{setAddress(e.target.value)}}/>
    <select className='inputBox' value={gender} onChange={(e)=>{setGender(e.target.value)}}>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
    <input type="text" placeholder='Enter your alternate no.' className='inputBox' value={phone2}   onChange={(e)=>{setPhone2(e.target.value)}}/>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePicker className='inputBox'  value={dob} // Set the selected date to dob
  onChange={(date) => setDOB(date)}/>
    </LocalizationProvider> */}
    
   







    


    
    {/* <input type="text" placeholder='Enter Product Company' className='inputBox'  value={company}  onChange={(e)=>{setCompany(e.target.value)}}/> */}
    <br/>
    
    <button  onClick={updateProfile} className='appbutton'>Save Details</button>


</div>

  )
}
