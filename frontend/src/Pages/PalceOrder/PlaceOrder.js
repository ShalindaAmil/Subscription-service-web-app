import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { assets } from '../../Assests/assets';

const PlaceOrder = () => {
    const { getTotalCartAmount, token, refreshtoken, foodList, cartItems, url } = useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const placeOrder = async (event) => {
        event.preventDefault();
        
        // Prepare order items based on cart items
        let orderItem = [];
        foodList.forEach((item, index) => {
            if (cartItems[index] > 0) {
                let itemInfo = { ...item, quantity: cartItems[index] };
                orderItem.push(itemInfo);
            }
        });
    
        // Prepare order data object
        let orderData = {
            userId: token.userId,
            address: data, // Assuming 'data' contains delivery information
            items: orderItem,
            amount: getTotalCartAmount() + 2, // Assuming delivery fee is $2
        };
    
        try {
            console.log('Placing order with data:', orderData);
    
            // Make POST request to place order
            let response = await axios.post(url + "/api/order/place", orderData, { headers: { token, refreshtoken } });
    
            console.log('API response:', response.data);
    
            if (response.data.success) {
                // Assuming 'session_url' is retrieved from API response
                const { session_url } = response.data;
                console.log("Received session URL: ", session_url);
                
                // Redirect user to payment session URL
                window.location.replace(session_url);
            } else {
                // Display error alert if API response indicates failure
                alert(`Error: ${response.data.message || 'Unknown error'}`);
            }
        } catch (error) {
            // Handle and log errors from axios request
            console.error('Error placing order:', error);
            alert(`An error occurred while placing the order: ${error.message}`);
        }
    };

    const navigate=useNavigate();
    
    useEffect(()=>{
        if(!token){
            navigate('/cart');
        }else if(getTotalCartAmount()===0){
            navigate('/cart');
        }
    },[token])
  
    return (
        <form onSubmit={placeOrder} className='place-order'>
            {/* <div className="place-order-image">
                <img src={assets.order_image} alt="Order Image" />
            </div> */}
            <div className='palce-order-left'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
                    <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
                </div>
                <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
                <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
                <div className='multi-fields'>
                    <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                    <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
                </div>
                <div className='multi-fields'>
                    <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
                    <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
                </div>
                <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
            </div>
            <div className='palce-order-right'>
                <div className='cart-total'>
                    <h2>Cart Total</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p><b>Total</b></p>
                            <p><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b></p>
                        </div>
                    </div>
                    <button type='submit'>Proceed to Payment</button>
                </div>
            </div>
        </form>
    );
};


export default PlaceOrder;

