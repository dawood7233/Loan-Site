import { motion } from "framer-motion";
import {
  Lightbulb,
  BookOpenCheck,
  BadgeCheck,
  Star,
} from "lucide-react"; 

export default function About() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#f9f9f9] to-[#eef2f1]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-primary font-semibold text-lg mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#fbbf24] rounded-full" />
            About Us
          </h3>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Your Trusted Source for Loan Reviews and Comparison
          </h2>

          <p className="text-gray-600 mb-8">
            We are dedicated to providing you with a reliable and user-friendly
            platform for loan reviews and comparison. With a mission to simplify
            the loan selection.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Lightbulb className="text-primary w-6 h-6" />,
                title: "Expertise & Objectivity",
                desc: "With years of experience in the financial industry",
              },
              {
                icon: <BookOpenCheck className="text-primary w-6 h-6" />,
                title: "Loan Database",
                desc: "We have curated a comprehensive database of loan products",
              },
              {
                icon: <BadgeCheck className="text-primary w-6 h-6" />,
                title: "Transparent Comparison",
                desc:
                  "Our user-friendly loan comparison tools allow you to effortlessly",
              },
              {
                icon: <Star className="text-primary w-6 h-6" />,
                title: "Reviews and Ratings",
                desc:
                  "We pride ourselves on providing unbiased loan reviews",
              },
            ].map(({ icon, title, desc }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="bg-white shadow p-3 rounded-full">
                  {icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-6 py-3 bg-primary text-white rounded-full text-sm font-medium shadow hover:bg-primary/90 transition"
          >
            Get Loan →
          </motion.button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <img
            src="/assets/images/about-me.png" 
            alt="Loan Illustration"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
