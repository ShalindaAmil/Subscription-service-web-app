import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
import About from '../../Components/About/About';
import Discover from '../../Components/Discover/Discover';
import Advantage from '../../Components/Advantage/Advantage';

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <About/>
      <Discover/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Advantage/>
      <AppDownload/>
    </div>
  )
}

export default Home
