import React from 'react';
import '../css/home.css';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="wallpaper01 main">
          <div className="darkness"></div>
          <div className="main-nav">
            <Nav />
          </div>
          <div className="home-title">
            <h1 className="content-title-page">Guia das Matilhas</h1>
          </div>
          <div className="home-arrow-image">
            <Link to="/menu" className="link-arrow-image">
              <img
                src={require('../images/logos/arrow-down.png')}
                alt="Seta para baixo"
              />
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}