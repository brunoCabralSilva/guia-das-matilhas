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
        <div className="bg-black">
          <div className=""></div>
          <div className="">
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
            <div className="">
              <h1 className="">Guia das Matilhas</h1>
            </div>
            <div className="">
              <Link to="/menu" className="">
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