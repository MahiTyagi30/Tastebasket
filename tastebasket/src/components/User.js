import React,{useState,useEffect,useRef} from 'react'

export default function User() {



    const initialUserData = {
        name: "John Doe",
        email: "john@example.com",
        // Add more user properties as needed
      };
      const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("userData")) || initialUserData
      );
    
      // State to manage user data and edit mode
     
      const [isEditMode, setIsEditMode] = useState(false);
    
      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Save edited data and exit edit mode
     


      const handleSave = () => {
        // Save user data to localStorage and exit edit mode
        localStorage.setItem("userData", JSON.stringify(userData));
        setIsEditMode(false);
      };
    
      const userProfileRef = useRef(null);

  useEffect(() => {
    // Close the form when clicking outside of the form
    const handleClickOutside = (event) => {
      if (userProfileRef.current && !userProfileRef.current.contains(event.target)) {
        setIsEditMode(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  return (
    <div className="user-profile">
        {isEditMode ? (
        <form action="" class="login-form">
        <h3>login now</h3>
        <input type="email" placeholder="your email"   name="email"
              value={userData.email}
              onChange={handleInputChange} class="box"/>
        <input type="text" placeholder="your Name "   name="name"
              value={userData.name}
              onChange={handleInputChange} class="box"/>
        <p>forget your password <a href="#">click here</a></p>
        <p>don't have an account <a href="index.html" target="_blank">create now</a></p>
        <input type="submit" value="login now"   onClick={handleSave} class="btn"/>
    </form>
        ):(
            <div style={{border:"black solid 3px",width:"300px"}}>
            <p style={{fontSize:"20px",padding:"10px"}}>Name: {userData.name}</p>
            <p style={{fontSize:"20px",padding:"10px"}}>Email: {userData.email}</p>
            {/* Display other user properties */}
            <button className='profile-edit'  style={{fontSize:"20px",padding:"10px",margin:"10px"}} type="button" onClick={() => setIsEditMode(true)}>
              Edit Profile
            </button>
          </div>
        )}
        
    </div>
  )
}
