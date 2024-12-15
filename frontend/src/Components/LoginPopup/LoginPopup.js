// import React, { useContext,useState } from 'react'
// import './LoginPopup.css'
// import { assets } from '../../Assests/assets'
// import { StoreContext } from '../../Context/StoreContext'
// import axios from "axios"

// const LoginPopup = ({setShowLogin}) => {

//   const {url,setToken}=useContext(StoreContext)

//     const [currentState,setCurrentState]=useState("Login")
//     const [data,setData]=useState({
//       name:"",
//       email:"",
//       password:""
//     })

//     const onChangeHandler=(event)=>{
//       const name=event.target.name;
//       const value=event.target.value;
//       setData(data=>({...data,[name]:value}))
//     }
  
//     const onLogin=async(event)=>{
//       event.preventDefault()
//       let newUrl= url;
//       if(currentState==="Login"){
//         newUrl += "/api/user/login"
//       }
//       else{
//         newUrl += "/api/user/register"
//       }
//       const response=await axios.post(newUrl,data);
//       if(response.data.success){
//         setToken(response.data.token);
//         localStorage.setItem("token",response.data.token);
//         setShowLogin(false)
//       }
//       else{
//         alert(response.data.message)
//       }
//     }
    
//   return (
//     <div className='login-popup'>
//       <form onSubmit={onLogin} className='login-popup-container'>
//         <div className='login-popup-title'>
//             <h2>{currentState}</h2>
//             <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
//         </div>
//         <div className='login-popup-inputs'>
//             {currentState==="Login" ? <></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
//             <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
//             <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
//         </div>
//         <button type='submit '>{currentState==="Sign Up"?"Create account":"Login"}</button>
//         <div className='login-popup-condition'>
//             <input type="checkbox" required/>
//             <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         {currentState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p> 
//         :<p>Alrerady have an account? <span onClick={()=>setCurrentState("Login")}>Login here </span> </p>}
//       </form>
//     </div>
//   )
// }

// export default LoginPopup


// import React, { useContext, useState } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../Assests/assets';
// import { StoreContext } from '../../Context/StoreContext';
// import axios from 'axios';


// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);

//   const [currentState, setCurrentState] = useState('Login');
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currentState === 'Login') {
//       newUrl += '/api/user/login';
//     } else {
//       newUrl += '/api/user/register';
//     }

//     try {
//       const response = await axios.post(newUrl, data, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (response.data.success) {
//         setToken(response.data.token);
//         localStorage.setItem('token', response.data.token);
//         setShowLogin(false);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error during login/register:', error);
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error('Server responded with:', error.response.data);
//         alert(`Error: ${error.response.data.message}`);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('No response received:', error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error('Error setting up request:', error.message);
//       }
//     }
//   };

//   return (
//     <div className="login-popup">
      
//       <form onSubmit={onLogin} className="login-popup-container">
//           <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === 'Sign Up' && (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Password"
//             required
//           />
//         </div>
//         <button type="submit">{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         {currentState === 'Login' ? (
//           <p>
//             Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;






import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../Assests/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken,setUsername } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState('Login');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }

    try {
      const response = await axios.post(newUrl, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // if (response.data.success) {
      //   setToken(response.data.token);
      //   //setUsername(response.data.user.name);
      //   localStorage.setItem('token', response.data.token);
      //   setShowLogin(false);
      // } else {
      //   alert(response.data.message);
      // }
      if (response.data.success) {
        setToken(response.data.token);
        if (response.data.user && response.data.user.name) {
            setUsername(response.data.user.name); // Update username only if valid
            
        }
        localStorage.setItem('token', response.data.token);
        setShowLogin(false); // Close the popup
    }
    
    } catch (error) {
      console.error('Error during login/register:', error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <img class="close_button" onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        {/* Left Side: Image */}
        <div className="login-popup-image">   
          <img src={assets.side_image} alt="Flexible Plan" />
        </div>
        {/* Right Side: Form */}
        <div className="login-popup-form">
          <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
              <h2>{currentState}</h2>
            </div>         
            <div className="login-popup-inputs">
              {currentState === 'Sign Up' && (
                <input
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                  type="text"
                  placeholder="Your name"
                  required
                />
              )}
                <input
                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                  type="email"
                  placeholder="Your email"
                  required
                />
                <input
                  name="password"
                  onChange={onChangeHandler}
                  value={data.password}
                  type="password"
                  placeholder="Password"
                  required
                />
            </div>
          <button type="submit">{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          {currentState === 'Login' ? (
          <p>
            Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
          </p>
          ) : (
          <p>
            Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span>
          </p>
        )}
      </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
