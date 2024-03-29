import PropTypes from 'prop-types';
import Tagline from "./Tagline";
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';

const Heading = ({ className, title ,text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 md:text-center lg:mb-20`}
    >
      {tag && (
        <Tagline className="mb-4 md:justify-center">{tag}</Tagline>
      )}
      {title && <motion.h2 variants={textVariant(0.4)} className="h2">{title}</motion.h2>}
      {text && <motion.p variants={textVariant(0.6)} className="body-2 mt-4 text-n-4">{text}</motion.p>}
    </div>
  )
}

Heading.propTypes = {
  className: PropTypes.string, 
  title: PropTypes.string, 
  text: PropTypes.string, 
  tag: PropTypes.string, 
};

export default Heading