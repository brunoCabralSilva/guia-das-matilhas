import React from 'react';
import '../css/navegation.css';
import { Link } from 'react-router-dom';

export default class Navegation extends React.Component {
  render() {
    return (
      <section className="navegation">
        <div className="first-block">
          <div className="navegation-link-container">
            <Link to="/garou-nordeste" className="navegation-link-inside">
              <div className="darkness2"></div>
              <p className="navegation-p">Garou Nordeste</p>
            </Link>
            <Link to="/matilha-da-kombi" className="navegation-link-inside">
              <div className="darkness2"></div>
              <p className="navegation-p">Matilha da Kombi</p>
            </Link>
          </div>
          <Link to="/page" className="navegation-link">
            <div className="darkness2"></div>
            <p className="navegation-p">Insira um texto aqui</p>
          </Link>
        </div>
        <div className="navegation-link-vertical">
          <Link to="/dons" className="navegation-link-vert-inside">
            <div className="darkness2"></div>
            <p className="navegation-p">Dons</p>
          </Link>
          <div className="navegation-link-horizontal">
            <Link to="/rituais" className="navegation-link-hor-inside">
              <div className="darkness2"></div>
              <p className="navegation-p">Rituais</p>
            </Link>
            <Link to="/parceiros" className="navegation-link-hor-inside">
              <div className="darkness2"></div>
              <p className="navegation-p">Parceiros</p>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}