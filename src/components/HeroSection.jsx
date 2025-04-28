// import Image from "next/image"; // if using Next.js
// import heroImage from "../assets/landing-image.png"; // update the correct path
import {Link} from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-primary-foreground text-secondary py-26">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h4 className="text-lg font-semibold text-secondary">Simplify Your Loan Search and Save Time</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
            Explore Your Loan <br /> Options with Ease
          </h1>
          <p className="text-secondary/80 text-base md:text-lg">
            We understand that finding the right loan can be overwhelming.
            That’s why we’re here to help simplify the process.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <button className="bg-secondary text-primary font-semibold py-3 px-6 rounded-full hover:scale-105 transition">
              Get Started 
            </button>
            <Link to="/about">
            <button className="border border-secondary text-secondary font-semibold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary transition">
              About Us 
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          {/* <Image
            
            alt="Loan search illustration"
            className="w-full h-auto object-contain"
            priority
          /> */}
        </div>

      </div>
    </section>
  );
}
