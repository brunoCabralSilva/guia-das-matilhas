import React from 'react';
import '../css/advert.css';
import { Link } from 'react-router-dom';

export default class Advert extends React.Component {
  render() {
    const { texto, link } = this.props;
    return (
      <div className="advert-content">
        <h5 className="advert-title-descrip">
          {texto}
        </h5>
        <Link to={link}>
          <button class="advert-button-link" type="button">Clique aqui e Saiba mais</button>
        </Link>
      </div>
    );
  }
}