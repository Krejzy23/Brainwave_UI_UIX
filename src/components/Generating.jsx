import PropTypes from 'prop-types';
import { loading } from "../assets";
import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';


const Generating = ({ className }) => {
  return (
    <motion.div 
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base ${ className || ''}`}
    >
      <img 
        src={loading}
        alt="Loading"
        className="w-5 h-5 mr-4"
      />
      <TypingText 
        title="Ai is generating"
      />
    </motion.div>
  )
}
Generating.propTypes = {
  className: PropTypes.string, 
};

export default Generating