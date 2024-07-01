// // import React, { useContext, useEffect, useState } from 'react'
// // import './MyOrders.css'
// // import {StoreContext}  from '../../Context/StoreContext'
// // import axios from 'axios'
// // import { assets } from '../../Assests/assets'


// // const MyOrders = () => {

// //   const {url,token}=useContext(StoreContext);
// //   const [data,setData]=useState([]);

// //   const fetchOrders=async()=>{
// //     const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}});
// //     setData(response.data.data);
// //   }

  

// //   useEffect(()=>{
// //     if(token){
// //       fetchOrders();
// //     }
// //   },[token])

// //   return (
// //     <div className='my-orders'>
// //       <h2>My Orders</h2>
// //       <div className='container'>
// //       {data.map((order, index) => (
// //         <div key={index} className='my-orders-order'>
// //         <img src={assets.parcel_icon} alt="" />
// //         <p>
// //           {order.items.map((item, idx) => (
// //             <span key={idx}>
// //               {item.name} x {item.quantity}
// //               {idx === order.items.length - 1 ? "" : ", "}
// //             </span>
// //           ))}
// //         </p>
// //         <p>${order.amount}</p>
// //         <p>Items: {order.items ? order.items.length : 0}</p> {/* Safely check for items */}
// //             <p><span>&#x25cf;</span><b>{JSON.stringify(order)}</b></p>
// //         <button>Track Order</button>
// //       </div>
// //       ))}
// //       </div>
// //     </div>
// //   )


  
// // }

// // export default MyOrders;



// import React, { useContext, useEffect, useState } from 'react';
// import './MyOrders.css';
// import { StoreContext } from '../../Context/StoreContext';
// import axios from 'axios';
// import { assets } from '../../Assests/assets';

// const MyOrders = () => {
//   const { url, token } = useContext(StoreContext);
//   const [data, setData] = useState([]);
//   const [nextSubscriptionDate, setNextSubscriptionDate] = useState('');

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
//       setData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   const getNextMonthDate = () => {
//     const today = new Date();
//     const nextMonth = new Date(today);
//     nextMonth.setMonth(today.getMonth() + 1);

//     // Formatting the date to "YYYY-MM-DD" format
//     const formattedDate = `${nextMonth.getFullYear()}-${(nextMonth.getMonth() + 1).toString().padStart(2, '0')}-${nextMonth.getDate().toString().padStart(2, '0')}`;

//     return formattedDate;
//   };

//   useEffect(() => {
//     if (token) {
//       fetchOrders();
//     }
//   }, [token]);

//   useEffect(() => {
//     const nextMonthDate = getNextMonthDate();
//     setNextSubscriptionDate(nextMonthDate);
//   }, []); // Runs once on component mount to set the subscription date

//   return (
//     <div className='my-orders'>
//       <h2>My Orders</h2>
//       <div className='container'>
//         {data.map((order, index) => (
//           <div key={index} className='my-orders-order'>
//             <img src={assets.parcel_icon} alt="" />
//             <p>
//               {order.items.map((item, idx) => (
//                 <span key={idx}>
//                   {item.name} x {item.quantity}
//                   {idx === order.items.length - 1 ? "" : <br/>}
//                 </span>
//               ))}
//             </p>
//             <p>${order.amount}</p>
//             <p>Items: {order.items ? order.items.length : 0}</p> {/* Safely check for items */}
//             {/* <p><span>&#x25cf;</span><b>{JSON.stringify(order)}</b></p> */}
//             <p><span className="bullet">&#x25cf;</span><b>{order.status}</b></p>
//               {/* <p id='subscriptionDate'>Next month's subscription date: {nextSubscriptionDate}</p> */}
//             <button>Track Order</button>
//           </div>
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default MyOrders;



import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../Assests/assets';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [nextSubscriptionDate, setNextSubscriptionDate] = useState('');

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const getNextMonthDate = () => {
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(today.getMonth() + 1);

    // Formatting the date to "YYYY-MM-DD" format
    const formattedDate = `${nextMonth.getFullYear()}-${(nextMonth.getMonth() + 1).toString().padStart(2, '0')}-${nextMonth.getDate().toString().padStart(2, '0')}`;

    return formattedDate;
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  useEffect(() => {
    const nextMonthDate = getNextMonthDate();
    setNextSubscriptionDate(nextMonthDate);
  }, []); // Runs once on component mount to set the subscription date

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
        {data.filter(order => order.payment).map((order, index) => (
          <div key={index} className='my-orders-order'>
            <img src={assets.parcel_icon} alt="" />
            <p>
              {order.items.map((item, idx) => (
                <span key={idx}>
                  {item.name} x {item.quantity}
                  {idx === order.items.length - 1 ? "" : <br/>}
                </span>
              ))}
            </p>
            <p>${order.amount}</p>
            <p>Items: {order.items ? order.items.length : 0}</p> {/* Safely check for items */}
            {/* <p><span>&#x25cf;</span><b>{JSON.stringify(order)}</b></p> */}
            <p><span className="bullet">&#x25cf;</span><b>{order.status}</b></p>
            {/* <p id='subscriptionDate'>Next month's subscription date: {nextSubscriptionDate}</p> */}
            <button>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
