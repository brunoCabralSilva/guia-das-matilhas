import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-nav">
        <ul className="nav-ulNav">
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
        </ul>
      </nav >
    );
  }
}
