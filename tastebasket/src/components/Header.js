import React, { useEffect, useState } from "react";
// import './style.css'
import logo from "../img/shopping-basket.gif";
import { Link } from "react-router-dom";
// import Badge from '@mui/material-next/Badge';
// import MailIcon from '@mui/material-next/MailIcon';
// import Badge from "@mui/material-next/Badge";

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductData from "./ProductData";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { DLT,ADD,REMOVE } from "../redux/actions/action";
import { clearCart } from "../redux/actions/action";
import "../App.css";
import greem from "../images/greentick-removebg-preview.png";
import User from "./User";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Avatar from "@mui/material/Avatar";
import { getAuth,signInWithPopup,signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const provider = new GoogleAuthProvider();



export default function Header() {
  const [price, setPrice] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [userProfileImage, setUserProfileImage] = useState(null); 
  const[payNow,setpayNow]=useState(false);
  const [user, setUser] = useState(null);
  const [showStripeCheckout, setShowStripeCheckout] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  // const user = useSelector((state) => state.auth.user);

  // const nodemailer = require("nodemailer");

  // const {google} =require("googleapis")
  // const CLIENT_ID='268236021564-spjj6fotfj9f159684qb6ltfo0p65465.apps.googleusercontent.com'
  // const CLIENT_SECRET='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'
  // const REDIRECT_URL='https://developers.google.com/oauthplayground'
  // const REFRESH_TOKEN='1//04h1_Gw_k27PaCgYIARAAGAQSNwF-L9IrtI6gdTVq1B8-XRKjhpAeQxdUz8d68ULHS_3VVnVlRtvQbplism0vANYkMVY1dwvL5CU'

  // const oAuth2Client=new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URL)
  // oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
  // async function SendmailTransport(){
  //   try{
  //     const accessToken=await oAuth2Client.getAccessToken()
  //     const transport =nodemailer.createTransport({
  //       service: "gmail", // Use your email service provider (e.g., Gmail)
  //   auth: {
  //     type:'OAuth2',
  //     user: "mahityagi2003@gmail.com", // Your email address
  //    clientId:CLIENT_ID,
  //    clientSecret:CLIENT_SECRET,
  //    refreshToken:REFRESH_TOKEN,
  //    accessToken:accessToken
  //     }
  //    } )
  //    const mailOptions={
  //     from:'mahityagi2003@gmail.com',
  //     to:{userEmail},
  //     subject:"hello",

  //    }
  //    const result=await transport.sendMail(mailOptions)
  //    return result
    
  
  //   }
  //   catch(error){
  //     return (error)
  //   }

  // }
 

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);
  const dispatch = useDispatch();
  

  const applyCoupon = () => {
    // Replace 'VALID_COUPON_CODE' with the actual valid coupon code
    const validCouponCode = 'FIRST_COUPON';
  
    if (couponCode === validCouponCode) {
      // Calculate the discount
      const discountAmount = (price * 10) / 100;
  
      // Deduct the discount from the total price
      const discountedPrice = price - discountAmount;
  
      // Update the 'price' state with the discounted price
      setPrice(discountedPrice);
      setCouponCode('');
    } else {
      // Handle invalid coupon code (e.g., show an error message)
      console.error("Invalid coupon code");
    }
  };
  
  

  const authh = localStorage.getItem("user");
  const navigate = useNavigate();

  const gotocart = () => {
    navigate("/cart");
  };
  const gotowishlist = () => {
    console.log("button clicked");
    dispatch(clearCart()); 
    localStorage.clear();
    navigate("/wishlist");
  };

  const auth =getAuth();
  
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    handleLoginNowClick();
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: 'select_account',
    });

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const newUser = result.user; // Assign user
        console.log("Authentication successful", newUser);

        // Save the user's email to local storage
        localStorage.setItem("userEmail", newUser.email);
        // localStorage.setItem("user", JSON.stringify(newUser));


        // Update the state with the user's email and set payNow to true
        setUser(newUser);
        setUserEmail(newUser.email);
        setUserProfileImage(newUser.photoURL || newUser.email[0]);
        setpayNow(true);
      })
      .catch((error) => {
        console.error("Authentication error", error);
      });
  };
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("logout successful");
        setUserEmail(null); // Clear the userEmail state
        localStorage.clear(); // Clear localStorage
        dispatch(clearCart());
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
  
    // Check if the email is in a valid format using a regular expression
    const emailPattern = "user@example.com";
    if (!emailPattern.test(email)) {
      console.error("Invalid email format");
      return; // Don't proceed with sign-up if the email format is invalid
    }
  
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      const user = userCredential.user;
      // Handle user registration success...
    } catch (error) {
      console.error("Error signing up:", error.code, error.message);
    }
  };
  
  
  
  const LogoutForm = () => {
    console.log("Logout icon clicked"); // Add this line for debugging
    // Clear localStorage and navigate to the home route
    localStorage.clear();
    navigate("/");
  };
  
  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };
  const send=(e)=>{
    // console.log(e)
    dispatch(ADD(e));

  }
 
  

  const remove = (item)=>{
    dispatch(REMOVE(item))
  }

  // const total = () => {
  //   let price = 0;
  //   getdata.map((ele, k) => {
  //     price = ele.price * ele.qnty + price;
  //   });
  //   setPrice(price);
  // };

  useEffect(() => {
    // Calculate the initial total price when the component first loads
    let initialPrice = 0;
    getdata.forEach((item) => {
      initialPrice += item.price * item.qnty;
    });
    setPrice(initialPrice);
  }, [getdata]);
  useEffect(() => {
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

 

  const handleProfileClick = () => {
    navigate("/profile");
  };
  // const handleOrderClick = () => {
  //   console.log("Place Order clicked");
  //   setShowStripeCheckout(true);
  
  //   // For testing purposes, you can also log the value of showStripeCheckout here
  //   console.log("showStripeCheckout:", showStripeCheckout);
  
  //   // Dispatch to clear the cart (you may need to dispatch an action)
  //   dispatch(clearCart());
  // };
  // const nodemailer = require("nodemailer");
  // const transporter = nodemailer.createTransport({
  //   service: "Gmail", // Use your email service provider (e.g., Gmail)
  //   auth: {
  //     user: "mahityagi2003@gmail.com",
  //     pass: "Mahi@tyagi11",
  //   },
  // });
  // const sendConfirmationEmail = (recipientEmail) => {
  //   const mailOptions = {
  //     from: "mahityagi2003.com",
  //     to: recipientEmail,
  //     subject: "Payment Confirmation",
  //     text: "Thank you for your payment. Your order has been confirmed.",
  //   };
  
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error("Error sending confirmation email:", error);
  //     } else {
  //       console.log("Confirmation email sent:", info.response);
  //     }
  //   });

  // };
  
  

  const handleOrderClick = () => {
    if (user) {
      setShowStripeCheckout(true);
    } else {
      // Handle the case where the user is not authenticated, e.g., show a login modal
      // or redirect to the login page.
      // You can add your logic here.
    }
   

    // dispatch(clearCart());

    // You can also reset it after a delay if needed
    // setTimeout(() => {
    //   setShowSuccessMessage(false);
    // }, 3000);
  };
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isSignUpFormVisible, setIsSignUpFormVisible] = useState(false);
  const [isLogoutFormVisible, setIsLogoutFormVisible] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const toggleLoginForm = () => {
    console.log("User icon clicked"); // Add this line
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  const toggleSignUpForm = () => {
    console.log("User icon clicked"); // Add this line
    setIsSignUpFormVisible(!isSignUpFormVisible);
  };
  const toggleLogoutForm = () => {
    console.log("User icon clicked"); // Add this line
    setIsLogoutFormVisible(!isLogoutFormVisible);
  };

  const handleLoginNowClick = () => {
    setIsLoginFormVisible(false); // Set isLoginFormVisible to false when "login now" is clicked
    // Add any other logic you need for handling the login process here
  };

  const payment = async (token) => {
    try {
      // Make sure you have the correct token object and other required data
      console.log("Received token:", token);
  
      // Construct the request body
      const requestBody = {
        amount: price * 100,
        token: token.id, // Use token.id
      };
  
      // Make the POST request using fetch
      const response = await fetch("http://localhost:8000/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      console.log(response);
  
      if (response.ok) {
        // Payment was successful, clear the cart
        dispatch(clearCart()); // Assuming clearCart() is correctly implemented
        setShowStripeCheckout(false);
  
        // Verify that you're correctly importing and using the navigate function
        // Also, ensure that it points to the correct URL for your home page
        console.log("Navigating to the home page...");
        navigate("/");
      } else {
        // Log the response status and any error message
        console.error("Payment failed. Response Status:", response.status);
        const errorData = await response.json();
        console.error("Payment Error:", errorData);
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };
  
  
  
  

  
  return (
    <header className="header">
      <img height="35px" src={logo} alt="logo" className="Animatedlogo" />
      <a href="#home" className="logo" style={{ color: "#db3056" }}>
        TasteBasket
      </a>

      <nav className="navbar">
        <Link to="/">Home</Link>

        <Link to="/category">Categories</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blogs</Link>

        {showSuccessMessage && (
          <div id="orderContainer">
            <div id="check">
              <i class="fas fa-check-circle"></i>
            </div>

            <div id="aboutCheck">
              <h1> Order Placed Successfully! </h1>
              {/* <p> We've sent you an email with the Order details. </p> */}
            </div>
          </div>
        )}
      </nav>

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <Link to="/wishlist" className="fas fa-heart" id="wishlist-btn"></Link>
        <div className="fas">
          <Badge
            badgeContent={getdata.length}
            color="secondary"
            onClick={handleClick}
          >
            <ShoppingCartIcon
              id="cart-btn"
              style={{ height: "30px", width: "30px", margin: "10px" }}
            />
          </Badge>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {getdata.length > 0 ? (
              <div
                className="card_details"
                style={{ width: "24rem", padding: 10 }}
              >
                <Table>
                  <thread>
                    <tr>
                      <th>Photo</th>
                      <th>product Name</th>
                    </tr>
                  </thread>
                  <tbody>
                    {getdata.map((e) => {
                      return (
                        <>
                          <tr key={e.id}>
                            <td>
                              <NavLink
                                to={`/products/${e.id}`}
                                onClick={handleClose}
                              >
                                <div
                                  style={{
                                    border: "black solid 3px",
                                    width: "50px",
                                  }}
                                >
                                  <img
                                    src={e.image}
                                    style={{ width: "5rem", height: "5rem" }}
                                    alt=""
                                  />
                                </div>
                              </NavLink>
                            </td>
                            <td>
                              <diV>
                                <p
                                  style={{
                                    margin: "3px -100px",
                                    paddingTop: "10px",
                                  }}
                                >
                                  {e.name}
                                </p>
                                <p
                                  style={{
                                    margin: "3px -100px",
                                    paddingTop: "10px",
                                  }}
                                >
                                  Price : {e.price}
                                </p>
                                <p
                                  style={{
                                    margin: "3px -100px",
                                    paddingTop: "10px",
                                    
                                  }}
                                >
                                  Quantity : <div  className="mt-5  p-3 d-flex justify-content-between align-items-center "   style={{width:50,cursor:"Pointer",background:"#ddd",color:"#111"}}>
                                  <span style={{ fontSize: 15 }} onClick={e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)}>-</span>
  <span style={{ fontSize: 20 }}> {e.qnty} </span>
  <span style={{ fontSize: 15 }} onClick={() => send(e)}>+</span>
                                    </div>
                                </p>
                              </diV>
                              
                            </td>
                            <td
                              className="mt-5"
                              style={{
                                color: "red",
                                fontSize: "15px",
                                cursor: "pointer",
                                marginRight: "-50px", // Adjusted margin to move the icon towards the left
                                textAlign: "center", // Add this line to center the trash icon
                                width: "50px",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i class="fas fa-trash "></i>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <p className="text-center"> Total : ₹{price}</p>
                    <Button
                      variant="primary"
                      size="lg"
                      style={{ margin: "20px", width: "170px" }}
                      onClick={handleOrderClick}
                    >
                      Place Order
                    </Button>
        <div style={{marginLeft:"20px"}}>           
  <input
    type="text"
    placeholder="Enter coupon code"
    value={couponCode}
    className="box"
    onChange={(e) => setCouponCode(e.target.value)}
  />
  <button className="btn" onClick={applyCoupon}>Apply Coupon</button>
  </div>


                    {/* {payNow && (
  <div>
    <button
      onClick={() => {
        setShowStripeCheckout(true);
      }}
    >
      Pay to TasteBasket
    </button>
  </div>
)} */}

{showStripeCheckout && (
  <StripeCheckout
    stripeKey="pk_test_51Niol8SHa7wjJumJhp7HUX4b97prYsfFDiCbYDwXXEObe3WvAMCH4KtzxQt2SqRCRD0po1QPT1BR7Gv3ZX8ytSro007Zb0oAED"
    name="TasteBasket"
    amount={price * 100}
    label="Pay to TasteBasket"
    description={`Your Payment amount is $${price}`}
    token={payment}
    email={user.email}
    onClose={() => {
      setShowStripeCheckout(false); // Close the Stripe Checkout component when needed
    }}
  />
)}


                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="card_deatails d-flex justify-content-center align-items-center"
                style={{ width: "24rem", padding: 10, position: "relative" }}
              >
                <i
                  className="fa-solid fa-xmark smallclose"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 20,
                    fontSize: 23,
                    cursor: "pointer",
                  }}
                ></i>
                <p className="m-2" style={{ fontSize: 22 }}>
                  your cart is empty
                </p>
              </div>
            )}
          </Menu>
        </div>
        <div>
  {userEmail ? (
    <>
      <Avatar
        alt={userEmail}
        sx={{ backgroundColor: "#db3056", marginLeft: "60px", top: "15px" }}
        src={userProfileImage}
        onClick={handleProfileClick}
      />
      <i
        style={{
          position: "relative",
          top: "-20px", // Adjust the value to move it up
          right: "1px", // Adjust the value to move it to the right
        }}
        class="fas fa-sign-out-alt"
        onClick={handleSignOut}
      ></i>
    </>
  ) : (
    <>
      <div className="fas fa-user user-icon" id="login-btn" onClick={toggleLoginForm}></div>
      {/* <div class="fas fa-user-plus" id="login-btn" onClick={toggleSignUpForm}></div> */}
    </>
  )}
</div>



        {isSignUpFormVisible && (
          <form
            action=""
            className={`login-form ${isSignUpFormVisible ? "active" : ""}`}
          >
            <h3>Signup now</h3>
            <input
              className="box"
              type="text"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              placeholder="enter your name"
            />
            <input
              type="email"
              placeholder="your email"
              className="box"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
            />
            <input
              type="password"
              placeholder="your password"
              className="box"
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
            />

            <input
              type="submit"
              value="Signup now"
              className="btn"
              onClick={handleSignUp}
              
            />
          </form>
        )}

{isAuthenticated ? null : (
          <form
            action=""
            className={`login-form ${isLoginFormVisible ? "active" : ""}`}
          >
            <h3>login now</h3>
            <input
              type="email"
              placeholder="your email"
              className="box"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
            />
            <input
              type="password"
              placeholder="your password"
              className="box"
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
            />
            <p>
              forget your password <a href="#">click here</a>
            </p>
            <p>
              don't have an account{" "}
              <a href="index.html" target="_blank">
                create now
              </a>
            </p>
            <input
              type="submit"
              value="login now"
              className="btn"
             
             
            />
           
            <IconButton
      // variant="contained"
      // color="primary"
      onClick={handleGoogleLogin}
      className="btn"
      style={{ color: "black",marginTop:"20px" }}
    >
      <GoogleIcon />
      Login with Google
    </IconButton>
          </form>
        )}
      </div>

      <div className="shopping-cart">
        {/* Cart items here */}
        <a href="#" className="btn">
          checkout
        </a>
      </div>

      <form action="" className="login-form">
        <h3>login now</h3>
        <input type="email" placeholder="your email" className="box" />
        <input type="password" placeholder="your password" className="box" />
        <p>
          forget your password <a href="#">click here</a>
        </p>
        <p>
          don't have an account{" "}
          <a href="index.html" target="_blank">
            create now
          </a>
        </p>
        <input
          type="submit"
          value="login now"
         
          className="btn"
        />
      </form>
    </header>
  );
}
