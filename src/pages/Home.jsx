import React from 'react';
import '../css/home.css';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <div className="wallpaper01 main">
          <div className="darkness"></div>
          <div className="main-nav">
            <Nav />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            exit={{ y: -20, opacity: 0, transition: { duration: 0.3 } }}
          >
            <div className="home-title">
              <h1 className="content-title-page">Guia das Matilhas</h1>
            </div>
            <div className="home-arrow-image">
              <Link to="/menu" className="link-arrow-image">
                <img
                  src={require('../images/logos/arrow-down.png')}
                  alt="Seta para baixo"
                />
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main >
    );
  }
}