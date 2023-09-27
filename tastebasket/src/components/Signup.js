import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.warn(name, email, password, phone);

    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password, phone }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
   
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Signup now</h3>
        <input
          type="text"
          placeholder="Your name"
          className="box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email"
          className="box"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          className="box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your phone number"
          className="box"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type="submit" value="Sign Up" className="btn" />
      </form>
    </div>
  );
};

export default SignUp;
