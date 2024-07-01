import React from 'react'
import './Advantage.css'
import { assets } from '../../Assests/assets'

const Advantage = () => {
  return (
    <div className='advantage'>
      <div className='advantage-content'>
        <p>Delicious</p>
        <h1>Discover the joy of Chocolate Subscription</h1>
        <div className='advantage-content-parts'>
            <div className='part-1'>
                <img src={assets.free_shiping_icon} alt=""/>
                <h2>Free Shiping</h2>
                <p>We offer free on all subcription plan.</p>
            </div>
            <div className='part-2'>
                <img src={assets.selection_icon} alt="" />
                <h2>Curated Selection</h2>
                <p>Each month, our expect chocolatiers curate a unique selection of flavors.</p>
            </div>
            <div className='part-3'>
                <img src={assets.flexible_plan_icon} alt="" />
                <h2>Flexible Plans</h2>
                <p>Choose from our range of subscription plan to suit your chocolate cravings.</p>
            </div>
        </div>
        {/* <button>Subscribe</button> */}
      </div>
    </div>
  )
}

export default Advantage
