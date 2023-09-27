import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../App.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'
const NewLogin =()=>{

    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate=useNavigate();
   const handleLogin=async ()=>{
    console.log(email,password)
    let result=await fetch("http://localhost:5000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type': 'application/json',
          }
    })

    result=await result.json();
    console.log(result)
    if(result.name){
 localStorage.setItem("user",JSON.stringify(result));
 navigate("/")
    }
    else{
        alert("please enter correct email")
    }
   }
    
    return(
    //     <div className='login'>
    //       <input type='text' className='inputBox' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} value={email}/>

    //       <input type='password' className='inputBox' placeholder='Enter Password'  onChange={(e)=>setPassword(e.target.value)} value={password}/>

    //       <button onClick={handleLogin} className="appbutton" type="button">
    //     Login
    //   </button>
    //     </div>


<>

    <Form style={{backgroundColor:"blue"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</>
    )
}

export default NewLogin;