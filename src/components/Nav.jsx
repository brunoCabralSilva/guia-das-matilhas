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
              to="/"
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
          <li className="nav-liSearch">
            <input
              type="text"
              placeholder="Digite algo aqui"
              className="nav-inputSearch"
            />
            <button
              type="button"
              className="nav-btnSearch"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
