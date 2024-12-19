import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1 className='logo'>ChocoBox<br/><p>Admin Pannel</p></h1>
      <div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option'>
           
           <p>Add Items</p>
        </NavLink>
        <NavLink to='/list'  className='sidebar-option'>
           
           <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className='sidebar-option'>
           
           <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
