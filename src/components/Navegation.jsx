import React from 'react';
import '../css/navegation.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GoToTop from '../components/GoToTop';
import Transition from '../components/Transition';
import navegation from '../data/navegation.json';

export default class Navegation extends React.Component {
  render() {
    const { homeReturn } = this.props;
    const item = {
      hidden: {
        x: 20,
        opacity: 0
      },
      visible: (index) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.5 + (0.1 * index),
          duration: 0.5,
          type: 'spring',
          stiffness: 150
        }
      }),
      exit: (index) => ({
        x: 20,
        opacity: 0,
        transition: {
          delay: (0.1 * index),
          duration: 0.1,
        }
      }),
    }

    return (
      <div className="navegation navegation-grid h-screen">
        <motion.div
          className="nav-default navegation0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: 'spring',
            stiffness: 150
          }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="darkness-more"></div>
          <Transition homeReturn={homeReturn} />
        </motion.div>

        {
          navegation.map((nav, index) => (
            <motion.div
              className={nav.class}
              custom={index}
              variants={item}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link to={nav.link} className="link-menu">
                <p className="navegation-p">{nav.nome}</p>
              </Link>
              <GoToTop />
            </motion.div>
          ))
        }

      </div>
    );
  }
}