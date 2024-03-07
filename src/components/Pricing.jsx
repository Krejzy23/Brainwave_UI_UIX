import { smallSphere, stars } from '../assets';
import Section from './Section';
import Heading from './Heading';
import PricingList from './PricingList';
import { LeftLine , RightLine } from "./design/Pricing";
import { motion } from 'framer-motion';
import { staggerContainer,zoomIn } from '../../utils/motion';
import { GradientLight } from './design/Benefits';


const Pricing = () => {
  return <Section crosses className="overflow-hidden" id="pricing">
    <motion.div 
      className="container relative z-2"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
    >
      <motion.div 
        className="flex relative justify-center mb-[6.5rem] md:flex lg:flex sm:scale-50" 
        variants={zoomIn(0.2, 1)}
      >
        <img 
          src={smallSphere}
          className="relative z-1"
          width={255}
          height={255}
          alt="Sphere"
        />
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img 
            src={stars}
            alt="Stars"
            className="w-full "
            height={400}
            width={950}
          />
        </div>
      </motion.div>

      <Heading 
        tag="Get started with Brainwave"
        title="Pay once, use forever"
      />

      <div className="relative">
        <PricingList />
        <LeftLine />
        <RightLine />
      </div>

      <div className="flex justify-center mt-10">
        <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="#pricing">See the full details</a>
      </div>
    </motion.div>
    <GradientLight />
  </Section>
}

export default Pricing