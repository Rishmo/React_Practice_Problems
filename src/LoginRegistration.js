import React, { useState } from 'react' // Import the useState hook

export default function Thirteen() { // Export the function

    const [email,setEmail] = useState(''); // Declare email state variable
    const [password,setPassword] = useState(''); // Declare password state variable
    const [isRegistered,setIsRegistered] = useState(false); // Declare isRegistered state variable
    const [isLoggedIn,setIsLoggedIn] = useState(false); // Declare isLoggedIn state variable
    const [users,setUsers] = useState([]) // Declare users state variable

    const handleAuthentication = () => { // Declare handleAuthentication function
      if(isRegistered){ // Check if isRegistered is true
        //LogIn
        if(isRegistered){ // Check if isRegistered is true
          const user = users.find((u)=> u.email === email && u.password === password); // Find the user
          if(user) { // Check if user exists
            setIsLoggedIn(true); // Set isLoggedIn to true
          }
          else{ // If user does not exist
            alert('Login failed.Please check your credential') // Alert the user
          }
        }
      }
      else { // If isRegistered is false
        //Register
        const newUser = {email,password}; // Create a new user object
        setUsers([...users,newUser]); // Add the new user to the users array
        localStorage.setItem('users',JSON.stringify([...users,newUser])); // Store the users array in local storage
        setIsLoggedIn(true); // Set isLoggedIn to true
      }
    }
    const handleLogout = () => { // Declare handleLogout function
      setIsLoggedIn(false); // Set isLoggedIn to false
      setEmail(''); // Reset email
      setPassword(''); // Reset password
    }
    

  return ( // Return the JSX
    <div>   {/* Create a div element */}

      {
        isLoggedIn ? ( 
            // Check if isLoggedIn is true
          <div>
            <h2>
              Welcome , {email}! {/* Display the email */}
            </h2>
            <button onClick={handleLogout}>Logout</button> {/*  Create a button element with an onClick event listener */}
            </div>
        ) : ( // If isLoggedIn is false
          <div>
            <h2>{isRegistered ? 'Login' : 'Register'} </h2> {/* Display the heading */}
            <form>
        <input type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/> {/* Create an input element */}
        <input type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/> {/* Create an input element */}
        <button onClick={handleAuthentication}> {/* Create a button element with an onClick event listener */}
          {isRegistered ? 'Login':'Register'} {/* Display the text */}
        </button>
      </form>
      <p>
        {isRegistered ? "Dont have an account? Register now" : 'Already have an account? Log in!'} {/* Display the text */}
      </p>
      <button onClick={()=> setIsRegistered(!isRegistered)}> {/* Create a button element with an onClick event listener */}
        {isRegistered ?'Register':'Login'} {/* Display the text */}
      </button>
    </div>
        )
     }
      </div>
        )
      }
      