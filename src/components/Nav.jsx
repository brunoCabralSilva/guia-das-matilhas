import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import { motion } from 'framer-motion';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="w-full z-20 font-andika text-base  2xl:text-xl leading-6">
        <motion.ul className="flex flex-row text-white justify-center pt-3 flex-wrap w-10/12 mx-auto"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          exit={{ y: -30, opacity: 0, transition: { duration: 0.5 } }}>
          <li className="px-2 mt-2">
            <Link
              to="/guia-das-matilhas"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Início
            </Link>
          </li>
          <span className=" mt-2">|</span>
          <li className="px-2 mt-2">
            <Link to="/trybes"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Tribos
            </Link>
          </li>
          <span className=" mt-2">|</span>
          <li className="px-2 mt-2">
            <Link to="/auspices"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Augúrios
            </Link>
          </li>
          <span className=" mt-2"><span className="flex mob-1:hidden mob-2:flex">|</span></span>
          <li className="px-2 mt-2">
            <Link to="/breeds"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Raças
            </Link>
          </li>
          <span className=" mt-2"><span className="flex mob-1:flex mob-2:hidden mob-3:flex">|</span></span>
          <li className="px-2 mt-2">
            <Link to="/about"
              className="text-white hover:text-crepusculo transition duration-1000 px-2"
            >
              Quem Somos
            </Link>
          </li>
        </motion.ul>
      </nav >
    );
  }
}
