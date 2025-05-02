import React from 'react'
import HeroSection from '../components/HeroSection'
import WorkingProcess from '@/components/WorkingProcess'
import WhyChooseUs from '@/components/WhyChooseUs'
import Carousel from '@/components/Carousel'

const Home = () => {
  return (
    <>
    {/* Hero Section Component */}
    <section>
    <HeroSection/>
    </section>
    {/* working process component */}
    <section>
      <WorkingProcess/>
    </section>
    {/* Carousel section */}
    <section>
      <Carousel/>
    </section>
    {/* Why Choose Us Component */}
    <section>
      <WhyChooseUs/>
    </section>

    </>
  )
}

export default Home
