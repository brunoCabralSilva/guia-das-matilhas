import React from 'react';
import '../css/footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-divImg">
          <img src={require('../images/logos/Garou Nordeste.png')} alt="Logo do Garou Nordeste" className="footer-img" />
          <img src={require('../images/logos/Crônicas da Kombi.png')} alt="Logo da Matilha da Kombi" className="footer-img" />
        </div>
        <div className="footer-copyright">
          <p>© 2022 Copyright - Bruno Gabryell Cabral da Silva & Thiago Lucas Martins da Silva</p>
        </div>
      </footer>
    );
  }
}