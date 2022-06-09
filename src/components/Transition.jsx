import React from 'react';
import '../css/transition.css';
import { Link } from 'react-router-dom';

export default class Transition extends React.Component {
  render() {
    const { homeReturn } = this.props;
    return (
      <section className="transition-phrase">
        <img
          src={require('../images/logos/arrow-left.png')}
          alt="Seta para baixo"
          className="transition-arrow-left"
          onClick={homeReturn}
        />
        <div className="transition-all-content">
          <h3 className="transition-text">
            Frase pequena
          </h3>
          <h4 className="transition-author">- Lobisomem: O Apocalipse (Ed. Revisada)</h4>
        </div>
      </section>
    );
  }
}