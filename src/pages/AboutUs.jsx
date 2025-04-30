import React from 'react'
import About from '@/components/AboutUs-Section'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <>
      <section className="w-full text-secondary mt-18 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 ">
              About Us
            </h2>
          </div>

          <div className="mt-9 md:mt-0">
            <img
              src="/assets/images/Contact.png"
              alt="Contact Illustration"
              className="w-56 h-auto object-contain md:block hidden"
            />
          </div>
        </motion.div>
      </div>
        <About/>
      </section>
  </>
  )
}

export default AboutUs
