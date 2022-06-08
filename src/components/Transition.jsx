import React from 'react';
import '../css/transition.css';
import { Link } from 'react-router-dom';

export default class Transition extends React.Component {
  render() {
    return (
      <section className="transition">
        <div className="darkness-more"></div>
        <div className="transition-content">
          <div className="transition-arrow-image">
            <Link to="/guia-das-matilhas" className="link-arrow-left">
              <img
                src={require('../images/logos/arrow-left.png')}
                alt="Seta para baixo"
              />
            </Link>
          </div>
          <div>
            <h3 className="transition-text">
              Cê vai sentir algo fazendo pressão contra você. Não resista. Deslize por entre os espaços. Vá para além do reflexo... É isso aí. Você está quase...
            </h3>
            <h4 className="transition-author">- Lobisomem: O Apocalipse (Ed. Revisada)</h4>
          </div>
        </div>
      </section>
    );
  }
}