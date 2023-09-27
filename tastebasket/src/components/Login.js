import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../logincss.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter the correct email and password.");
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-form">
      <h3>Login now</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleLogin}>
          Login now
        </Button>
      </Form>

      <p>Forgot your password <a href="#">click here</a></p>
      <p>Don't have an account <a href="index.html" target="_blank">create now</a></p>
    </div>
  );
}

export default Login;
