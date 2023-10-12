'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import PropTypes from 'prop-types';

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, el: Wrapper = 'p', className, once }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: once });

  return (
    <Wrapper className={className}>
      <span className='sr-only'>{text}</span>
      <motion.span
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex}>
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className='inline-block'
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}
            <span className='inline-block'>&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

// AnimatedText.propTypes = {
//   text: PropTypes.string.isRequired,
//   el: PropTypes.elementType,
//   className: PropTypes.string,
//   once: PropTypes.bool,
// };

export default AnimatedText;
