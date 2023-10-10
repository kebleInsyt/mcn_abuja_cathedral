// components/AnimationComponent.js
import { motion } from 'framer-motion';

const AnimationComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      This is a Framer Motion animation!
    </motion.div>
  );
};

export default AnimationComponent;
