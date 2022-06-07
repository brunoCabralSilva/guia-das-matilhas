import React from 'react';
import '../css/navegation.css';

export default class Navegation extends React.Component {
  render() {
    return (
      <section className="navegation">
        <div className="navegation-link-container">
          <div className="navegation-link-inside">
            <div className="darkness2"></div>
            <p className="navegation-p">Garou Nordeste</p>
          </div>
          <div className="navegation-link-inside">
            <div className="darkness2"></div>
            <p className="navegation-p">Matilha da Kombi</p>
          </div>
        </div>
        <div className="navegation-link">
          <div className="darkness2"></div>
          <p className="navegation-p">Insira um texto aqui</p>
        </div>
        <div className="navegation-link-vertical">
          <div className="navegation-link-vert-inside">
            <div className="darkness2"></div>
            <p className="navegation-p">Dons</p>
          </div>
          <div className="navegation-link-horizontal">
            <div className="navegation-link-hor-inside">
              <div className="darkness2"></div>
              <p className="navegation-p">Rituais</p>
            </div>
            <div className="navegation-link-hor-inside">
              <div className="darkness2"></div>
              <p className="navegation-p">Parceiros</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}