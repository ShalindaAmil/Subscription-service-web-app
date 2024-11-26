import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../Assests/assets';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [nextSubscriptionDates, setNextSubscriptionDates] = useState({});

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
      setData(response.data.data);
      
      // Calculate next subscription dates for each order
      const nextDates = {};
      response.data.data.forEach(order => {
        const orderDate = new Date(order.date); // Assuming order.date is the order date field
        const nextMonthDate = new Date(orderDate);
        nextMonthDate.setMonth(orderDate.getMonth() + 1);
        const formattedDate = `${nextMonthDate.getFullYear()}-${(nextMonthDate.getMonth() + 1).toString().padStart(2, '0')}-${nextMonthDate.getDate().toString().padStart(2, '0')}`;
        nextDates[order._id] = formattedDate; // Store next subscription date by order ID
      });
      setNextSubscriptionDates(nextDates);
      
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

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
            <p><span className="bullet">&#x25cf;</span><b>{order.status}</b></p>
            
            <p className="date" id='subscriptionDate'>Next month's subscription date: {nextSubscriptionDates[order._id]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

