import React, { useEffect, useState } from 'react';
import "./Orders.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Error fetching orders");
      console.error("Error fetching orders:", error);
    }
  };

const statusHandler=async(event,orderId)=>{
  const response=await axios.post(url+"/api/order/status",{
    orderId,
    status:event.target.value
  })
  if (response.data.success) {
      await fetchAllOrders();
  }
}
useEffect(() => {
  fetchAllOrders();
  const interval = setInterval(fetchAllOrders, 5000); // Refresh every 5 seconds
  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    fetchAllOrders();
  }, []);

  // Filter orders where payment is true
  // const filteredOrders = orders.filter(order => order.payment === true);
  const filteredOrders = orders.filter(order => order.payment === true && order.status !== "Canceled");
  return (
    <div className='order-add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {filteredOrders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items && order.items.map((item, idx) => (
                  <span key={idx}>
                    {item.name} x {item.quantity}
                    {idx === order.items.length - 1 ? "" : <br />}
                  </span>
                ))}
              </p>
              <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + " , " + order.address.state + " , " + order.address.country + " , " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items: {order.items ? order.items.length : 0}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;




