import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src="/assets/images/choose.png"
            alt="Why Choose Us"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h3 className="text-sm font-semibold text-primary mb-2">
            Why Choose Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlocking Opportunities for <br /> Your Success Loan Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            Our dedicated team of experts conducts thorough research and analysis
            to provide you with comprehensive and unbiased reviews of various
            loan options.
          </p>

          <ul className="space-y-4">
            {[
              {
                title: "Exceptional Customer Service",
                desc: "We prioritize your satisfaction. Our dedicated customer service team is ready to assist.",
              },
              {
                title: "Extensive Network of Lenders",
                desc: "We have established strong partnerships with a wide network of reputable lenders.",
              },
              {
                title: "Unbiased and Transparent Approach",
                desc: "Transparency and objectivity are at the core of our values. Our platform provides unbiased support.",
              },
              {
                title: "Expertise and Knowledge",
                desc: "Our team consists of financial experts with deep industry knowledge.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle className="text-primary mt-1 w-5 h-5" />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition shadow">
            Get Loan →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
