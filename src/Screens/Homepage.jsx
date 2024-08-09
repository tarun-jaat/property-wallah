import React from 'react'
import HeroSection from '../Components/Common/HeroSection'
import UnderHeroSection from '../Components/Common/UnderHeroSection'
import LatesListing from '../Components/Common/LatesListing'

function Homepage() {
  return (
    <div className=''>
        <HeroSection/>
        <UnderHeroSection/>
        <LatesListing/>
    </div>
  )
}

export default Homepage