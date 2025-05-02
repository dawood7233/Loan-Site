import React, { useState, useEffect, memo } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 90, suffix: "k", label: "Daily Payments" },
  { value: 90, suffix: "%", label: "Loan Approve" },
  { value: 290, suffix: "", label: "Expert People" },
  
];

const AnimatedNumber = ({ targetValue, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = Math.floor(targetValue * 0.6);
      setCount(start);

      const increment = Math.ceil(targetValue / 100);
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= targetValue) {
            clearInterval(interval);
            return targetValue;
          }
          return prev + increment;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [inView, targetValue]);

  return (
    <span ref={ref} className="animate-fade-in">
      {count}
      {suffix}
    </span>
  );
};

const Carousel = memo(() => {
  return (
    <section className="p-6 bg-secondary text-primary">
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-start m-2 lg:m-6 cursor-pointer"
          >
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <AnimatedNumber targetValue={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Carousel;
