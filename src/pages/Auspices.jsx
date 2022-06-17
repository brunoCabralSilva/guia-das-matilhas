import React from 'react';
import '../css/features.css';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import augurios from '../data/augurios.json';

export default class Auspices extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <motion.section
        className="features"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        exit={{
          y: -20,
          opacity: 0,
          transition: { duration: 0.5 }
        }}
      >
        <div className=""></div>
        <div className="features-div">
          <div className="nav-features">
            <Nav />
          </div>
          <h1 className="title-page title-features">Augúrios</h1>
          <Carousel list={augurios} repository={'auspices'} />
        </div>
        <div className="footer-features">
          <Footer />
        </div>
      </motion.section>
    );
  }
}