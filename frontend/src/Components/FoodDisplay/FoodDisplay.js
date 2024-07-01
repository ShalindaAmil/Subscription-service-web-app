import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {foodList}=useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <p className='title'>Top dishes near you</p>
        <h1 className='menu-title'>Menu of {category}</h1>
        <div className='food-display-list'>
            {foodList.map((item,index)=>{
                if(category==="All"|| category===item.category){
                  return <FoodItem key={item.id} id={index} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
