import React from 'react'
import HeroSection from '../components/HeroSection'
import WorkingProcess from '@/components/WorkingProcess'


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
    </>
  )
}

export default Home
