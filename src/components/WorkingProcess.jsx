import { motion } from 'framer-motion';
import { Lightbulb, ClipboardList, Scale, FileText } from 'lucide-react';
import workingPerson from '/assets/images/hero-image2.png'; 

const steps = [
  {
    icon: <Lightbulb className="text-primary w-8 h-8" />,
    title: 'Search Loan Request',
    desc: 'Begin by filling out our simple loan request form. Provide us with some basic information...'
  },
  {
    icon: <ClipboardList className="text-primary w-8 h-8" />,
    title: 'Select Your Loan',
    desc: 'Browse through loan options and choose the one that suits your financial needs...'
  },
  {
    icon: <Scale className="text-primary w-8 h-8" />,
    title: 'Compare Loan',
    desc: 'Compare interest rates, repayment terms, and lender ratings side-by-side...'
  },
  {
    icon: <FileText className="text-primary w-8 h-8" />,
    title: 'Complete Loan',
    desc: 'Submit necessary documents and finalize the process to receive your loan...'
  }
];

export default function WorkingProcess() {
  return (
    <section className="py-16 pt-0 px-4 md:px-12  text-secondary-foreground">
      <div className="text-center mb-12">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-primary font-semibold text-lg"
        >
          Our Working Process
        </motion.h3>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Simplified Steps to Find Your Ideal Loan
        </motion.h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base">
          The goal is to provide a clear and concise overview of how your platform works and guide users through the loan application journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Steps */}
        <div className="flex flex-col gap-14 relative">
          {steps.slice(0, 2).map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center bg-secondary z-10 relative">
                  {step.icon}
                </div>
                {index < 1 && (
                  <div className="absolute left-1/2 top-full h-14 w-px bg-primary transform -translate-x-1/2"></div>
                )}
              </div>
              <div>
                <h4 className="text-lg font-bold text-secondary-foreground">{step.title}</h4>
                <p className="text-sm mt-1 text-secondary-foreground/80">{step.desc}</p>
              </div>
            </div>
          ))}
          {/* Line connecting to image */}
          <div className="absolute right-[-32px] top-7 bottom-7 w-[2px] bg-primary hidden md:block"></div>
        </div>

        {/* Center Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img src={workingPerson} alt="Working Person" className="w-[280px] md:w-[320px] rounded-xl shadow-xl" />
        </motion.div>

        {/* Right Steps */}
        <div className="flex flex-col gap-14 relative">
          {steps.slice(2).map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center bg-secondary z-10 relative">
                  {step.icon}
                </div>
                {index < 1 && (
                  <div className="absolute left-1/2 top-full h-14 w-px bg-primary transform -translate-x-1/2"></div>
                )}
              </div>
              <div>
                <h4 className="text-lg font-bold text-secondary-foreground">{step.title}</h4>
                <p className="text-sm mt-1 text-secondary-foreground/80">{step.desc}</p>
              </div>
            </div>
          ))}
          {/* Line connecting to image */}
          <div className="absolute left-[-32px] top-7 bottom-7 w-[2px] bg-primary hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
