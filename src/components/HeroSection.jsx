import { motion } from "framer-motion";
import heroImage from "/assets/images/hero-image.png"; 
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-primary-foreground text-secondary py-30 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-10">

        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-secondary">
            Simplify Your Loan Search and Save Time
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-secondary">
            Explore Your Loan <br /> Options with Ease
          </h1>
          <p className="text-secondary/80 text-base md:text-lg">
            We understand that finding the right loan can be overwhelming.
            That’s why we’re here to help simplify the process.
          </p>

          <div className="items-center gap-4 mt-6">
            <Link to="/form">
            <button className="border border-secondary text-secondary font-semibold mr-3 py-3 px-6 rounded-full hover:scale-105 hover:bg-secondary hover:text-primary transition duration-300 cursor-pointer">
              Apply for Loan
            </button>
            </Link>
            <Link to="/about">
            <button className="border border-secondary text-secondary font-semibold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary hover:scale-105 transition duration-300 cursor-pointer ">
              About Us
            </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={heroImage}
            alt="Loan search illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
