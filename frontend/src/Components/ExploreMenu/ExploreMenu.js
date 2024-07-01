import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../Assests/assets.js'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='menu'>
        <div className="explore-Menu" id="explore-Menu">
            <h2>Choose Your Plan and Select Your <br/>Chocolates</h2>
            <p className='explore-menu-text'>Selecting chocolates is the first step in your chocolate journey. Choose your plan and dive into a world of delicious options, from classic favorites to exciting new flavors. Indulge in the pleasure of selecting chocolates tailored to your taste, and elevate your chocolate experience today.</p> 
            <div className='explore-menu-list'>
                {menu_list.map((item,index)=>{
                    return(
                        <div key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} src={item.menu_image} alt=""/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default ExploreMenu
