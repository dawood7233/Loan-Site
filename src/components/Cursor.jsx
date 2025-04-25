import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Cursor = () => {
  const controls = useAnimation();
  const dotControls = useAnimation(); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      controls.start({
        x: e.clientX - 16,
        y: e.clientY - 16,
        transition: { type: "spring", stiffness: 600, damping: 30 },
      });
    };

    const handleClick = () => {
      dotControls.start({
        scale: 1.6,
        transition: { duration: 0.15 },
      }).then(() => {
        dotControls.start({
          scale: 1,
          transition: { duration: 0.25 },
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [controls, dotControls]);

  return (
    <motion.div
      animate={controls}
      className="fixed top-1 left-1 pointer-events-none z-[9999]"
    >
      
      <div className="w-6 h-6 rounded-full border-1 border-secondary flex items-center justify-center bg-transparent">
        
        <motion.div
          animate={dotControls}
          className="w-2 h-2 rounded-full bg-primary animate-pulse"
        />
      </div>
    </motion.div>
  );
};

export default Cursor;
