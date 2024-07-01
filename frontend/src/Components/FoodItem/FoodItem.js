import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../Assests/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url+"/images/"+image} alt=""/>
        { !cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
            </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <img src={assets.rating_starts} alt=""/>
            <p>{name}</p>
        </div>
        <p className='food-item-discription'>{description}</p>
        {/* <p className='food-item-price'>${price}</p> */}
        <p className='food-item-price'>${price.toFixed(2)}</p>
      </div>
    </div>
  )
};

export default FoodItem

// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import './FoodItem.css';
// import { assets } from '../../Assests/assets';
// import { StoreContext } from '../../Context/StoreContext';

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img
//           className='food-item-image'
//           src={url ? `${url}/images/${image}` : ''}
//           alt={name}
//         />
//         { !cartItems[id]
//           ? <img
//               className='add'
//               onClick={() => addToCart(id)}
//               src={assets.add_icon_white}
//               alt="Add to cart"
//             />
//           : <div className='food-item-counter'>
//               <img
//                 onClick={() => removeFromCart(id)}
//                 src={assets.remove_icon_red}
//                 alt="Remove from cart"
//               />
//               <p>{cartItems[id]}</p>
//               <img
//                 onClick={() => addToCart(id)}
//                 src={assets.add_icon_green}
//                 alt="Add more"
//               />
//             </div>
//         }
//       </div>
//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <img src={assets.rating_starts} alt="Rating stars" />
//           <p>{name || 'Unknown'}</p>
//         </div>
//         <p className='food-item-description'>{description || 'No description available'}</p>
//         <p className='food-item-price'>${price !== undefined ? price : 'N/A'}</p>
//       </div>
//     </div>
//   );
// };

// FoodItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.string,
//   image: PropTypes.string
// };

// FoodItem.defaultProps = {
//   description: '',
//   image: ''
// };

// export default FoodItem;
 