import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="w-full text-secondary  mt-18 relative overflow-hidden">
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
              Contact Us
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

      {/* Contact Section */}
      <div className="bg-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 border-b pb-2">
                Get in touch with us.
              </h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name..."
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Enter Your Number..."
                  className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                /> 
                <textarea
                  rows="5"
                  placeholder="Enter Your Message..."
                  className="md:col-span-2 w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="md:col-span-2 mt-4 w-fit px-6 py-3 bg-primary text-primary-foreground rounded-full shadow hover:bg-primary/90 transition"
                >
                  Send Message →
                </button>
              </form>
            </motion.div>

            {/* Right: Need More Help */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl shadow-md h-fit"
            >
              <h3 className="text-xl font-semibold  mb-6 border-b pb-2">
                Need more help?
              </h3>

              <div className="space-y-4 ">
                <p className="flex items-center gap-3">
                  <Mail className="text-primary w-5 h-5" />
                  support@loansite.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-primary w-5 h-5" />
                  +1 18 26899292
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
