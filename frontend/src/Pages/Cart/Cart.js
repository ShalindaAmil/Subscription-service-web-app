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
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>delivery Fee</p>
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
        <div className='cart-promocode'>
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className='cart-promocode-input'>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart





// import React, { useContext } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../Context/StoreContext';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const { cartItems, foodList, removeFromCart, getTotoalCartAmount } = useContext(StoreContext);
//   const navigate = useNavigate();
  
//   const subtotal = getTotoalCartAmount();
//   const deliveryFee = subtotal === 0 ? 0 : 2;
//   const total = subtotal + deliveryFee;





// import React, { useContext } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../Context/StoreContext';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//     const { cartItems, foodList, removeFromCart, getTotalCartAmount, loading, url } = useContext(StoreContext);
//     const navigate = useNavigate();

//     const subtotal = getTotalCartAmount();
//     const deliveryFee = subtotal === 0 ? 0 : 2;
//     const total = subtotal + deliveryFee;

//     console.log('foodList:', foodList);
//     console.log('cartItems:', cartItems);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!foodList || foodList.length === 0) {
//         return <div>No items available.</div>;
//     }

//     return (
//         <div className='cart'>
//             <div className='cart-item'>
//                 <div className='cart-item-title'>
//                     <p>Items</p>
//                     <p>Title</p>
//                     <p>Price</p>
//                     <p>Quantity</p>
//                     <p>Total</p>
//                     <p>Remove</p>
//                 </div>
//                 <br/>
//                 <hr/>
//                 {Object.keys(cartItems).map(itemId => {
//                     console.log('Looking up item with id:', itemId);
//                     const parsedItemId = parseInt(itemId, 10);
//                     const item = foodList.find(food => food.id === parsedItemId);
//                     console.log('Item:', item);
//                     if (item && cartItems[itemId] > 0) {
//                         return (
//                             <div key={item.id}>
//                                 <div className='cart-item-title cart-items-item'>
//                                     <img src={`${url}/images/${item.image}`} alt={item.name} />
//                                     <p>{item.name}</p>
//                                     <p>${item.price}</p>
//                                     <p>{cartItems[itemId]}</p>
//                                     <p>${item.price * cartItems[itemId]}</p>
//                                     <p onClick={() => removeFromCart(parsedItemId)} className='cross'>X</p>
//                                 </div>
//                                 <hr />
//                             </div>
//                         );
//                     } else {
//                         console.log(`Item with id ${itemId} not found in foodList`);
//                     }
//                     return null;
//                 })}
//             </div>
//             <div className='cart-bottom'>
//                 <div className='cart-total'>
//                     <h2>Cart Total</h2>
//                     <div>
//                         <div className='cart-total-details'>
//                             <p>Subtotal</p>
//                             <p>${subtotal}</p>
//                         </div>
//                         <hr />
//                         <div className='cart-total-details'>
//                             <p>Delivery Fee</p>
//                             <p>${deliveryFee}</p>
//                         </div>
//                         <hr />
//                         <div className='cart-total-details'>
//                             <p>Total</p>
//                             <p>${total}</p>
//                         </div>
//                     </div>
//                     <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
//                 </div>
//                 <div className='cart-promocode'>
//                     <div>
//                         <p>If you have a promocode, enter it here</p>
//                         <div className='cart-promocode-input'>
//                             <input type="text" placeholder='Promo code' />
//                             <button>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;
