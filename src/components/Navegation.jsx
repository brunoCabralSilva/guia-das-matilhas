import React from 'react';
import '../css/navegation.css';
import { Link } from 'react-router-dom';
import Transition from '../components/Transition';

export default class Navegation extends React.Component {
  render() {
    const { homeReturn } = this.props;
    return (
      <div className="navegation navegation-grid">
        <div className="nav-default navegation0">
          <div className="darkness-more"></div>
          <Transition homeReturn={homeReturn} />
        </div>
        <Link to="/garou-nordeste" className="navegation-default navegation1">
          <div className="darkness2"></div>
          <p className="navegation-p">Garou Nordeste</p>
        </Link>
        <Link to="/matilha-da-kombi" className="navegation-default navegation2">
          <div className="darkness2"></div>
          <p className="navegation-p">Matilha da Kombi</p>
        </Link>
        <Link to="/page" className="navegation-default navegation3">
          <div className="darkness2"></div>
          <p className="navegation-p">Insira um texto aqui</p>
        </Link>
        <Link to="/dons" className="navegation-default navegation4">
          <div className="darkness2"></div>
          <p className="navegation-p">Dons</p>
        </Link>
        <Link to="/rituais" className="navegation-default navegation5">
          <div className="darkness2"></div>
          <p className="navegation-p">Rituais</p>
        </Link>
        <Link to="/parceiros" className="navegation-default navegation6">
          <div className="darkness2"></div>
          <p className="navegation-p">Parceiros</p>
        </Link>
      </div>
    );
  }
}