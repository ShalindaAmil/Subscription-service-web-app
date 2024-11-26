import React, { useContext} from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems,foodList,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);
  const navigate=useNavigate();

  console.log('foodList:', foodList);
  console.log('cartItems:', cartItems);
  console.log('total amount :',getTotalCartAmount());

  return (
    <div className='cart'>
      <div className='cart-item'>
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {foodList.map((item,index)=>{
          if(cartItems[index]>0){
            return(
              <div key={item.id}>
                <div className='cart-item-title cart-items-item'>
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[index]}</p>
                  <p>${item.price*cartItems[index]}</p>
                  <p onClick={()=>removeFromCart(index)} className='cross'>X</p>
                </div>
                <hr/>
              </div>
            )
          }
          return null;
        })}
      </div>
      <div className='cart-bottom'>
        {/* <div class="side image">
          <img src={asse}/>
        </div> */}
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p><b>Total</b></p>
              <p><b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b></p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
