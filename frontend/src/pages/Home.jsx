import React from 'react'
import Header from "../components/Layout/Header"
import Hero from "../components/Route/Hero/Hero"
import Categories from "../components/Route/Categories/Categories"
import BestDeals from "../components/Route/BestDeals/BestDeals"
const Home = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  )
}

export default Home
