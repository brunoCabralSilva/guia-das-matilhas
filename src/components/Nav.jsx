import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import { motion } from 'framer-motion';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-nav">
        <motion.ul className="nav-ulNav"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          exit={{ y: -30, opacity: 0, transition: { duration: 0.5 } }}>
          <li className="nav-liNav">
            <Link
              to="/guia-das-matilhas"
              className="nav-aNav"
            >
              Início
            </Link>
          </li>
          <span className="nav-liSpan">|</span>
          <li className="nav-liNav">
            <Link to="/trybes"
              className="nav-aNav"
            >
              Tribos
            </Link>
          </li>
          <span className="nav-liSpan">|</span>
          <li className="nav-liNav">
            <Link to="/auspices"
              className="nav-aNav"
            >
              Augúrios
            </Link>
          </li>
          <span className="nav-liSpan">|</span>
          <li className="nav-liNav">
            <Link to="/breeds"
              className="nav-aNav"
            >
              Raças
            </Link>
          </li>
          <span className="nav-liSpan">|</span>
          <li className="nav-liNav">
            <Link to="/about"
              className="nav-aNav"
            >
              Quem Somos
            </Link>
          </li>
        </motion.ul>
      </nav >
    );
  }
}
