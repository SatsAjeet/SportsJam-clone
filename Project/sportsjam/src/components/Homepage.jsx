import React from 'react'
import Carousel from './homepage/Carousel '
import Section1 from './homepage/Section1'
import Section2 from './homepage/Section2'
import Section3 from './homepage/Section3'

const Homepage = () => {
  return (
    <div>
      <div>
        <Carousel/>
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
    </div>
  )
}

export default Homepage