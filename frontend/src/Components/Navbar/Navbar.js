// // import React, { useContext, useState } from 'react'
// // import './Navbar.css'
// // import {assets} from '../../Assests/assets.js'
// // import {Link, useNavigate} from 'react-router-dom'
// // import { StoreContext } from '../../Context/StoreContext.js'

// // const Navbar = ({setShowLogin}) => {
// //     const [menu,setMenu]=useState("home");
// //     const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
// //     const navigate=useNavigate();
// //     const logout=()=>{
// //         localStorage.removeItem("token");
// //         setToken("");
// //         navigate("/")
// //     }
// //     let totalCartAmount;
// //     try {
// //       totalCartAmount = getTotalCartAmount();
// //     } catch (error) {
// //       console.error("Error calculating total cart amount", error);
// //       totalCartAmount = 0;
// //     }
// import React, { useContext, useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../Assests/assets.js';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../Context/StoreContext.js';

// const Navbar = ({ setShowLogin }) => {
//     const [menu, setMenu] = useState("home");
//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//     const navigate = useNavigate();
    
//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     };

//     let totalCartAmount;
//     try {
//         totalCartAmount = getTotalCartAmount();
//     } catch (error) {
//         console.error("Error calculating total cart amount", error);
//         totalCartAmount = 0;
//     }

//   return (
//     <div className="navbar">
//         <Link to='/'><h1 className='logo'>ChocoBox</h1></Link>
//         {/* <Link to='/'><img src={assets.logo} alt="logo" className="logo"/></Link> */}
//         <ul className="navbar-menu">
//             <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
//             <a href="#explore-Menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
//             <a href="#app-download" onClick={()=>setMenu("mobile app")} className={menu==="mobile app"?"active":""}>Mobile App</a>
//             <a href="#footer" onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact Us</a>
//         </ul>
//         <div className="navbar-right">
//             <img src={assets.search_icon} alt=""/>
//             <div className="navbar-search-icon">
//                 <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
//                 <div className={getTotalCartAmount()===0?"":"dot"}></div>
//             </div>
//             {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>:
//             <div className='navbar-profile'>   
//                 <img src={assets.profile_icon} alt=""/>
//                 <ul className='nav-profile-dropdown'>
//                     <li><img src={assets.bag_icon}alt=""/><p>Orders</p></li>
//                     <li onClick={logout}><img src={assets.logout_icon} alt=""/><p>Logout</p></li>
//                 </ul>
//             </div> }
//         </div>
//     </div>
//   )
// }

// export default Navbar






import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../Assests/assets.js';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext.js';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, cartItems={}, token, setToken, username } = useContext(StoreContext);
  console.log(username);
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  let totalCartAmount;
  try {
    totalCartAmount = getTotalCartAmount();
  } catch (error) {
    console.error("Error calculating total cart amount", error);
    totalCartAmount = 0;
  }
  
  const cartItemsCount = Object.keys(cartItems).length;

  return (
    <div className="navbar">
        <Link to='/'><h1 className='logo'>ChocoBox</h1></Link>
        {/* <Link to='/'><img src={assets.logo} alt="logo" className="logo"/></Link> */}
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href="#explore-Menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("mobile app")} className={menu==="mobile app"?"active":""}>Mobile App</a>
            <a href="#footer" onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            {/* <img src={assets.search_icon} alt=""/> */}
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                {/* <div className={cartItemsCount === 0 ? " " : "dot"}></div> */}
                {cartItemsCount > 0 && (
                  <div className="cart-indicator">
                  <span className="cart-count">{cartItemsCount}</span>
                 </div>
                )}
            </div>
            {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button> :
            <div className='navbar-profile'> 
                <p><b>Hello, {username}</b></p>  
                {/* <img src={assets.profile_icon} alt=""/> */}
                <ul className='nav-profile-dropdown'>
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon}alt=""/><p>Orders</p></li>
                    <li onClick={logout}><img src={assets.logout_icon} alt=""/><p>Logout</p></li>
                </ul>
            </div> }
        </div>
    </div>
  )
}

export default Navbar;
