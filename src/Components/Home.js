import React from 'react'
import CompanySummary from './CompanySummary'
import Destinations from './Destinations'
import About from './About'
import Navbar from './Navbar'
import Slider from './Slider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <CompanySummary/>
        <Destinations/>
        <About/>
    </div>
  )
}

export default Home