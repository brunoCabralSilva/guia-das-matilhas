import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Transition from '../components/Transition';
import navegation from '../data/navegation.json';
import '../css/navegation.css';
import '../css/menu.css';

export default class Menu extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  homeReturn = () => {
    const { history } = this.props;
    history.push('/');
    
  }
  render() {
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
      <section className="">
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
          <Transition homeReturn={this.homeReturn} />
        </motion.div>

        {
          navegation.map((nav, index) => (
            <motion.div
              key={index}
              className={nav.class}
              custom={index}
              variants={item}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              { nav.nome === 'Admin'
                ? <a
                    className="link-menu"
                    href="https://guiadasmatilhas-admin.up.railway.app/"
                  >
                    <p className="navegation-p">{nav.nome}</p>
                  </a>
                :<Link to={nav.link} className="link-menu">
                  <p className="navegation-p">{nav.nome}</p>
                </Link>
              }
            </motion.div>
          ))
        }

      </div>
        <div className="bg-black"><Footer /></div>
      </section>
    );
  }
}