import React from 'react';
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
      <main className="bg-wolf-01 bg-cover bg-center md:bg-top">
        <div className="h-screen relative">
          <div className="h-full w-full absolute bg-h-transp"></div>
          <div className="z-10 relative">
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
            className="relative flex flex-col items-center w-full"
          >
            <div className="w-80% h-35vh md:h-45vh text-center text-white flex items-end justify-center font-amatic text-5xl md:text-7xl 2xl:text-8xl">
              <h1 className="animate-pulse ">Guia das Matilhas</h1>
            </div>
            <div className="w-full h-33vh md:h-40vh flex justify-center items-end">
              <Link to="/menu" className="">
                <img
                  src={require('../images/logos/arrow-down.png')}
                  alt="Seta para baixo"
                  className="animate-pulse hover:animate-pulse-fast w-16 md:w-20"
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