import React from 'react';
import { motion } from 'framer-motion' ;

export default class ContactIcon extends React.Component {
  render() {
    const { iconName, link, index } = this.props;
    const iconesRedes = {
      hidden: { opacity: 0, x: 20 },
      visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 + index * 0.3, duration: 0.2 }
      }),
      exit: (index) => ({
        opacity: 0,
        x: -20,
        transition: { delay: 0.5 + index * 0.1, duration: 0.2 }
      }),
    };

    return(
      <motion.div
        variants={iconesRedes}
        custom={ index }
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }
        }
      >
        <a href={ link } target="_blank" rel="noreferrer">
          <i className={`fa-brands ${ iconName } p-2 text-xl hover:text-crepusculo transition duration-1000`}></i>
        </a>
      </motion.div>
    );
  }
}